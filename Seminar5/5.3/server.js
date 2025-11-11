//Exercitiu
const express = require("express");
const app = express();

const obiecte = [
  { id: 1, nume: "Carte", categorie: "Educație" },
  { id: 2, nume: "Pix", categorie: "Papetărie" },
  { id: 3, nume: "Caiet", categorie: "Papetărie" },
];

app.get("/obiecte", (req, res) => {
  res.json({
    succes: true,
    totalObiecte: obiecte.length,
    data: obiecte,
    info: "Lista completă a obiectelor disponibile",
  });
});

app.get("/obiect", (req, res) => {
  const id = parseInt(req.query.id);
  if (!id) {
    return res
      .status(400)
      .json({ succes: false, eroare: "Trebuie să furnizezi un id valid!" });
  }

  const obiect = obiecte.find((o) => o.id === id);

  if (!obiect) {
    return res.status(404).json({
      succes: false,
      eroare: `Nu există obiect cu id-ul ${id}`,
      timestamp: new Date().toISOString(),
    });
  }

  res.json({
    succes: true,
    obiect: obiect,
    mesaj: `Ai cerut obiectul cu id ${id}`,
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.send("Bine ai venit la serverul meu!");
});

app.listen(3000, () => {
  console.log("Serverul rulează pe http://localhost:3000");
});
