import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Resposta 2");
});

server.listen(3333);
