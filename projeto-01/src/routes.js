export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (req, res) => {
      return res.end("Lista de produtos");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (req, res) => {
      return res.end(JSON.stringify(req.body));
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (req, res) => {
      return res.end("Removido!");
    },
  },
];
