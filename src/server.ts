import { app } from "./app";
import { env } from "./utils/env";

const port = env.PORT;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀🚀🚀 running server in ${port} 🚀🚀🚀`);
  });
