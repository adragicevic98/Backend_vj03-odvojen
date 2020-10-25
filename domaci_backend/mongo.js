const mongoose = require('mongoose')

const password='Antonela12'
const dbname='osobe-API'

const url =`mongodb+srv://oarwa-ad:${password}@cluster0.xkrn6.mongodb.net/${dbname}?retryWrites=true&w=majority`

	
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const osobaSchema = new mongoose.Schema({
    imePrezime: String,
    adresa:String,
    datum: Date
})

const Osoba = mongoose.model('Osoba',osobaSchema,'osobe')

const novaOsoba = new Osoba({
    imePrezime: 'Monika Lelas',
    adresa: 'mlelas@pmfst.hr',
    datum:new Date()
})

//ispis svih osoba (select) -- u uglate zagrade uvjet ako 
//zelimo ispis samo onih koji zadovoljavaju uvjet

Osoba.find({ adresa:'aantic@pmfst.hr'}).then(
    result =>{
        result.forEach(o => {
            console.log(o)
        });
        mongoose.connection.close()
    }
)

// novaOsoba.save().then(result => {
//     console.log("Osoba spremljena");
//     console.log(result);
//     mongoose.connection.close()
// })