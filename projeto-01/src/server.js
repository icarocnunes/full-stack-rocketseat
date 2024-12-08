import http from "node:http";
import { jsonHanddler } from "./middlewares/jsonHanddler.js";
import { routeHanddler } from "./middlewares/routeHanddler.js";

const server = http.createServer(async (req, res) => {
  await jsonHanddler(req, res);
  routeHanddler(req, res);
});

server.listen(3333);
