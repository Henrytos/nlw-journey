import { app } from "./app";

const port = 3000;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀🚀🚀 running server in ${port} 🚀🚀🚀`);
  });
