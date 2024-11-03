import prisma from "@/lib/db";
import { Hono } from "hono";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono();

const FarmerSchema = z.object({
  username: z.string().min(1),
  age: z.number().int().positive(),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  location: z.string().min(1),
  role: z.string().min(1),
});

app.post("/save-farmer", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  console.log(auth?.userId);

  if (!auth?.userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const body = await c.req.json();

  const result = FarmerSchema.safeParse(body);
  if (!result.success) {
    return c.json({ error: result.error.errors }, 400);
  }

  const { username, age, dob, location, role } = result.data;

  try {
    console.log("Attempting to save user:", {
      clerkId: auth.userId,
      username,
      age,
      dob,
      location,
      role,
    });
    const newUser = await prisma.farmer.create({
      data: {
        clerkId: auth.userId,
        username,
        age,
        dob: new Date(dob),
        location,
        role,
      },
    });

    return c.json(
      { message: "User information saved successfully", user: newUser },
      201
    );
  } catch (error) {
    console.error("Error saving user information:", error);
    return c.json({ error: "Failed to save user information" }, 500);
  }
});

app.get("/get-farmers", async (c) => {
  const farmers = await prisma.farmer.findMany();

  return c.json(
    {
      farmer: farmers,
    },
    200
  );
});

app.get("/get-farmers/:id", async (c) => {
  const farmerId = c.req.param("id");

  try {
    const farmer = await prisma.farmer.findUnique({
      where: {
        id: farmerId,
      },
    });
    if (!farmer) {
      return c.json({ message: "Farmer not found" }, 404);
    }

    return c.json({
      role: farmer.role,
    });
  } catch (error) {
    console.error(error);
    return c.json(
      {
        error: error,
      },
      500
    );
  }
});

app.get("get-user-role", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const user = await prisma.farmer.findUnique({
      where: {
        clerkId: auth.userId,
      },
      select: {
        role: true,
      },
    });

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ role: user.role }, 200);
  } catch (error) {
    console.error("Error fetching user role:", error);
    return c.json({ error: "Failed to fetch user role" }, 500);
  }
});

export default app;
