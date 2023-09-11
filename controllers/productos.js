const Produc = require("../models/producto")

const obtenerProduto  = async (req, res) => {
    const prodcuto = await Produc.find();
    res.json(prodcuto)
}

const guardarProdcuto= async (req, res) => {
    const { name, description } = req.body;
    const data = {
      name,
      description
    };
    const prodcuto = new Produc(data);
    await prodcuto.save();
    res.status(201).json(prodcuto);
  };

module.exports = {
    obtenerProduto,
    guardarProdcuto

}