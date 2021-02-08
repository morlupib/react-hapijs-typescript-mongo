import { Server } from "@hapi/hapi";

import { createRate, getRates } from "../controllers/rates.controller";

export const routes = (server: Server) => {
  server.route({
    method: "POST",
    path: "/rates",
    handler: createRate,
  });

  server.route({
    method: "GET",
    path: "/rates",
    handler: getRates,
  });
};
