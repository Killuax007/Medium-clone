import { Hono } from "hono";
import { userRoute } from "./routes/user";
import { blogRoute } from "./routes/blog";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET_KEY: string };
}>();
app.use("/*", cors());
app.get("/api/v1", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));

  return c.text("Hello Hono!");
});
app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);

export default app;
