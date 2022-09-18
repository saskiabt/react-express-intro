const express = require("express");

const app = express();
const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Saskia", lastName: "Binder" },
    { id: 2, firstName: "Ian", lastName: "Karel" },
    { id: 2, firstName: "Shea", lastName: "Garner" },
  ];

  res.json(customers);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
