import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
});

const { error: doesNotEnvironmentVariables, data } = envSchema.safeParse(
  process.env
);

if (doesNotEnvironmentVariables) {
  throw new Error(doesNotEnvironmentVariables.message);
}

export const env = data;
