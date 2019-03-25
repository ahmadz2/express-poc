const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!')) //Responds with 'Hello World' on homepage
//app.METHOD(PATH, HANDLER)     //Syntax for routing

app.use(express.static('public'))   //Serve static files using Public directory - access using localhost:300/FILENAME.png

app.listen(port, () => console.log(`Example app listening on port ${port}!`))