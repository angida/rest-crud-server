const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Car = new Schema({
  marke: {
    type: String
  },
  type: {
    type: String
  },
  jahrgang: {
    type: Number
  },
  leistung: {
    type: Number
  },
  preis: {
    type: Number
  },
  bild: {
    type: String
  }
}, {
  collection: 'cars'
})
  
module.exports = mongoose.model('Car', Car)