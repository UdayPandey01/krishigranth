import prisma from "@/lib/db";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono();

const UserSchema = z.object({
  username: z.string().min(1),
  age: z.number().int().positive(),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  location: z.string().min(1),
  role: z.string().min(1),
});

app.post("/save-farmer", async (c) => {
  const body = await c.req.json();

  const result = UserSchema.safeParse(body);
  if (!result.success) {
    return c.json({ error: result.error.errors }, 400);
  }

  const { username, age, dob, location, role } = result.data;

  try {
    console.log('Attempting to save user:', { username, age, dob, location, role });
    const newUser = await prisma.farmer.create({
      data: {
        username,
        age,
        dob: new Date(dob),
        location,
        role,
      },
    });

    return c.json({ message: 'User information saved successfully', user: newUser }, 201);
  } catch (error) {
    console.error("Error saving user information:", error);
    return c.json({ error: "Failed to save user information" }, 500);
  }
});

app.get("/get-farmers",
    async (c) => {
        const farmers = await prisma.farmer.findMany()

        return c.json({
            farmer : farmers
        },200)
    }
)

export default app;