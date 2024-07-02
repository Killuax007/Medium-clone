import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@404guy/medium-zod-schema";

export const blogRoute = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET_KEY: string };
  Variables: { userId: number };
}>();

blogRoute.use("/*", async (c, next) => {
  const token = c.req.header("authorization") || "";
  console.log(token);
  const response = await verify(token, c.env.JWT_SECRET_KEY);
  if (response.id) {
    // @ts-ignore
    c.set("userId", response.id);
    await next();
  } else {
    return c.text("Unauthorized access");
  }
});
blogRoute.get("/", async (c) => {
  return c.text("Hello blog route");
});
blogRoute.get("/blogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json(blogs);
});
blogRoute.get("/blogs/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = Number(c.req.param("id"));
  const blog = await prisma.blog.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json({ Blog: blog });
});

blogRoute.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.get("userId");
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorld: id,
    },
  });
  return c.json({ id: blog.id });
});
blogRoute.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.blog.update({
    where: { id: body.id },
    data: {
      content: body.content,
      published: body.published,
    },
  });
  return c.json({ updatedBlog: blog });
});
blogRoute.delete("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = Number(c.req.param("id"));
  await prisma.blog.delete({
    where: { id: id },
  });
  return c.json({ message: "Blog deleted..." });
});
