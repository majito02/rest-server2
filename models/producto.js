const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  /*Crear una propiedad description*/
  description:{
    type: String,
  }
});

const Produc = mongoose.model('Produc', productSchema);

module.exports = Produc;