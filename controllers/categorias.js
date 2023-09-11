const Categoria = require("../models/categoria");

const categoriaGet = async (req, res) => {  
  const categories = await Categoria.find();
  res.json(categories);
};  

const categoriaByIdGet = async (req, res) => {
  const { id } = req.params;
  const categorie = await Categoria.findById(id )
  res.json(categorie);
};

const guardarCategoria = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const data = {
    name,
  };
  const categoria = new Categoria(data);
  await categoria.save();
  res.status(201).json(categoria);
};

const eliminarCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const categoria = await Categoria.findByIdAndRemove(categoriaId);

    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json({ message: "Categoría eliminada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la categoría" });
  }
};

const actualizarCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const { name } = req.body;

    const updatedCategoria = await Categoria.findByIdAndUpdate(
      categoriaId,
      { name },
      { new: true }
    );

    if (!updatedCategoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json(updatedCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la categoría" });
  }
};

module.exports = {
  categoriaGet,
  guardarCategoria,
  eliminarCategoria,
  actualizarCategoria,
  categoriaByIdGet
};
