const express = require('express')
const app=express()


const Osoba=require('./models/osobe')


const cors=require('cors')
app.use(cors())
app.use(express.json()) //middleware --> pisat ga prije rute
app.use(express.static('build'))
	
const zahtjevInfo = (req, res, next) => {
  console.log('Metoda:', req.method)
  console.log('Putanja:', req.path)
  console.log('Tijelo:', req.body)
  console.log('---')
  next()
}
app.use(zahtjevInfo) //middleware


let poruke = [
    {
      id: 1,
      imePrezime: 'Matea Laća',
      adresa: 'mlaca@pmfst.hr'
    },
    {
      id: 2,
      imePrezime: 'Ivana Radalj',
      adresa: 'iradalj@pmfst.hr'
    },
    {
      id: 3,
      imePrezime: 'Antonela Dragičević',
      adresa: 'adragice1@pmfst.hr'
    },
    {
      id: 4,
      imePrezime: 'Marko Mihael Maras',
      adresa: 'mmaras@pmfst.hr'
    },
  ]
app.get('/',(req, res) => {
    res.send('<h1>Pozdrav od Express servera i nodemona</h1>')
})

app.get('/api/osobe',(req, res) => {
   Osoba.find({}).then( sveOsobe =>{
     res.json(sveOsobe)
   })
})
app.get('/api/osobe/:id',(req, res,next) => {
    Osoba.findById(req.params.id).then( o =>{
      if(o){
        res.json(o)
      }else{
        res.status(404).end()
      }
      
    }).catch(err => next(err)
      // console.log("Dogodila se pogreška",err);
      // res.status(400).send({error:"Neispravan format ID parametra"})
    )
   
})
app.delete('/api/osobe/:id',(req, res) => {
  const id=req.params.id
  Osoba.findByIdAndRemove(id).then(result=>{
    res.status(204).end()
  })
 .catch(err => next(err))

})
app.put('/api/osobe/:id',(req, res,next) => {
  const id=req.params.id
  const podatak=req.body

  const osoba={
    imePrezime:podatak.imePrezime,
    adresa:podatak.adresa
  }

  Osoba.findByIdAndUpdate(id,osoba,{new:true}).then(osoba=>{
    res.json(osoba)
  })
.catch(err => next)

})

app.post('/api/osobe',(req,res,next) => {
   
    const podatak=req.body
    if(!podatak.imePrezime){
      return res.status(400).json({
        error: 'Nedostaje ime i prezime'
      })
    }
    if(!podatak.adresa){
      return res.status(400).json({
        error: 'Nedostaje adresa!'
      })
    }
    const osoba= new Osoba({
      imePrezime: podatak.imePrezime,
      adresa: podatak.adresa,
      datum:new Date(),

    })
    osoba.save().then( result =>{
      console.log("Podatak spremljen")
      res.json(result);
    })
    .catch(err => next(err))

})
const nepoznataRuta = (req, res) => {
  res.status(404).send({ error: 'nepostojeca ruta' })
}
 
app.use(nepoznataRuta)

const errorHandler = (err,req,res,next) =>{
  console.log("Middleware za pogreske");
  if(err.name = "CastError"){
    return res.status(400).send({error:"Krivi ID format"})
  }else if(err.name ==="MongoParseError"){
    return res.status(400).send({error:"Krivi format podatka"})
  }
  next(err)
}
app.use(errorHandler);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server sluša na portu ${PORT}`);
})

