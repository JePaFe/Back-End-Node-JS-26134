import { Router } from "express";

const router = Router();

const movies = [
  {
    id: 1,
    title: "Matrix",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Batman",
    genre: "Action",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
  },
];

// CRUD - Create, Read, Update, Delete

router.post("/", (req, res) => {
  // Aquí iría la lógica para crear una nueva película
  res.json({ message: "Crear una nueva película" });
});

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Película no encontrada" });
  }
});

router.put("/:id", (req, res) => {
  // Aquí iría la lógica para actualizar una película existente
  res.json({ message: "Actualizar una película existente" });
});

router.delete("/:id", (req, res) => {
  // Aquí iría la lógica para eliminar una película existente
  res.json({ message: "Eliminar una película existente" });
});

export default router;
