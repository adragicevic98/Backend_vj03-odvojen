const express = require('express')
const app=express()

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
    res.json(poruke)
})
app.get('/api/osobe/:id',(req, res) => {
    const id=Number(req.params.id)
    const poruka=poruke.find(p=> p.id === id)
    if(poruka){
      res.json(poruka)
    }else{
      res.status(404).end()
    }
   
   
})
app.delete('/api/osobe/:id',(req, res) => {
  const id=Number(req.params.id)
  poruke=poruke.filter(p => p.id!== id)
  res.status(204).end()

})
app.put('/api/osobe/:id',(req, res) => {
  const id=Number(req.params.id)
  const podatak=req.body
  poruke=poruke.map(p => p.id !== id ? p : podatak)
  res.json(podatak)

})

app.post('/api/osobe',(req,res) => {
    const maxId = poruke.length > 0 ? Math.max(...poruke.map(p => p.id )) : 0
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
    const poruka={
      imePrezime: podatak.imePrezime,
      adresa: podatak.adresa,
      datum:new Date(),
      id:maxId+1

    }

    poruke=poruke.concat(poruka)

    res.json(poruka)
})
const nepoznataRuta = (req, res) => {
  res.status(404).send({ error: 'nepostojeca ruta' })
}
 
app.use(nepoznataRuta)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server sluša na portu ${PORT}`);
})

