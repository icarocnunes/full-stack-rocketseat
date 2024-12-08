import { routes } from "../routes.js";

export function routeHanddler(req, res) {
  console.log(req.url);
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });

  if (route) {
    return route.controller(req, res);
  }
  return res.writeHead(404).end("Rota não encontrada");
}
