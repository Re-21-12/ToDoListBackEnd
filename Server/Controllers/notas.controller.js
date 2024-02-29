import { pool } from "../../db.js";

export const getNotas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Nota");

    //obtenemos el resuult de  el pool.query
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//localhost:3333/
export const getNota = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Nota WHERE id = ?", [
      req.params.id,
    ]);
    //result es un arreglo por eso lo medimos con metodo length
    if (result.length == 0) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: "no se pudo cargar la nota" });
  }
};

export const filtrarNotaNombre = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Nota WHERE titulo = ?", [
      req.params.nombre,
    ]);
    //result es un arreglo por eso lo medimos con metodo length
    if (result.length == 0) {
      return res.status(404).json({ message: "Nombre no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filtrarNotaEstado = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Nota WHERE estado = ?", [
      req.params.estado,
    ]);
    //result es un arreglo por eso lo medimos con metodo length
    if (result.length == 0) {
      return res.status(404).json({ message: "Estado no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postNota = async (req, res) => {
  const { titulo, descripcion, fecha_entrega, estado } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO Nota(titulo,descripcion,fecha_entrega,estado) VALUES (?,?,?,?)",
      [titulo, descripcion, fecha_entrega, estado]
    );
    console.log(result);
    res.json({
      titulo,
      descripcion,
      fecha_entrega,
      estado,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const patchNota = async (req, res) => {
  //destructura el body y adquuiere los campos
  const { titulo, descripcion, fecha_entrega, estado } = req.body;
  try {
    const result = await pool.query(
      "UPDATE Nota SET titulo = ?, descripcion = ?, fecha_entrega = ?, estado = ? WHERE id = ?",
      [titulo, descripcion, fecha_entrega, estado, req.params.id]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteNota = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM Nota WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows == 0) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
