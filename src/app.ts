import fastify from "fastify";
import { prisma } from "./utils/prisma";

export const app = fastify();

app.get("/trips", async () => {
  const trips = await prisma.trip.findMany();

  return { trips };
});
