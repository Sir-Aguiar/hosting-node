const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/teste', (req, res) => {
  return res.json({ message: 'SUA PRIMEIRA APLICAÇÃO FOI HOSPEDADA' })
})

app.listen(process.env.PORT || 3000)