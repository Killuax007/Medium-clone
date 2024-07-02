import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@404guy/medium-zod-schema";

export const userRoute = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET_KEY: string };
}>();
userRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = Number(c.req.param("id"));

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    return c.json({ name: user?.name });
  } catch (error: any) {
    console.log(error.message);
  }
});
userRoute.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);

    return c.json({ message: "user created successfully", token, id: user.id });
  } catch (error: any) {
    c.status(403);
    return c.json({ message: error.message });
  }
});
userRoute.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { email, password } = await c.req.json();
  const user = await prisma.user.findUnique({
    where: { email: email, password: password },
  });
  if (!user) {
    c.status(403);
    return c.text("Invalid user");
  }
  console.log(user);
  const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);
  return c.json({ message: "welcome user !!!", token: token, id: user.id });
});
userRoute.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user = await prisma.user.update({
    where: { id: body.id },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
  return c.json({ updatedUser: user });
});
