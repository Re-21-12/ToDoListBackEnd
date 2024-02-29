//importamos router
import { Router } from "express";
//hacemos uuna instancia de router
const router = Router();
//Llamamos a los controladores
import {
  getNota,
  getNotas,
  postNota,
  deleteNota,
  patchNota,
  filtrarNotaNombre,
  filtrarNotaEstado
} from "../Controllers/notas.controller.js";
//pedir todos
router.get("/notas", getNotas); 
//pedir uno
router.get("/nota/:id", getNota);
//crear uno
router.post("/nota", postNota);
//actualizar 1
router.patch("/nota/:id", patchNota);
//filtrar nombre
router.get("/notaNombre/:nombre",filtrarNotaNombre);
//filtrar nota por noombre
router.get("/notaEstado/:estado",filtrarNotaEstado);
//eliminar uno
router.delete("/nota/:id", deleteNota);
export default router;
