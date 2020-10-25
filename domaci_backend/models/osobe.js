

require('dotenv').config()
const mongoose = require('mongoose')
const password='Antonela12'

const dbname='osobe-API'

const url =`mongodb+srv://oarwa-ad:${password}@cluster0.xkrn6.mongodb.net/${dbname}?retryWrites=true&w=majority`

console.log("Spajamo se na bazu")
 
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(result => {
  console.log("Spojeni smo na bazu");
}).catch(error => {
  console.log("Greška pri spajanju", error.message);
})


const osobaSchema = new mongoose.Schema({
  imePrezime:{
      type:String,
      required:true,
      minlength:6
  },
  adresa:{
      type:String,
    required:true},
  datum:{
      type:Date,
      required:true
  }
})

osobaSchema.set('toJSON',{
  transform:(doc,ret) => {
    ret.id=doc._id.toString()
    delete ret._id
    delete ret.__v
    return ret
  }
})

module.exports = mongoose.model('Osoba',osobaSchema,'osobe')
