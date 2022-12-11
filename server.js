require('dotenv').config()
const { response } = require('express')
const express = require('express')
const userRoutes = require('./Routes/userRoutes')
const app = express()
const path = require('path')
const PORT = 5000 || process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/api/v1' , userRoutes )



app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))
