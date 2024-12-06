import http from "node:http";
import { jsonHanddler } from "./middlewares/jsonHanddler.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await jsonHanddler(req, res);

  if (method === "GET" && url === "/products") {
    return res.end("Lista de produtos");
  }

  if (method === "POST" && url === "/products") {
    return res.end(JSON.stringify(req.body));
  }

  return res.writeHead(404).end("Rota não encontrada");
});

server.listen(3333);
