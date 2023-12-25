const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()
const port = process.env.port || 3000


//configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultlayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/about', (req, res) => res.render('about'))

app.get('/', (req, res)=> res.send('Check out our "<a href="/about">About</a>"page!'))






app.listen(port, () => console.log(
    `\nnaviagte ti http://localhost:${port}/about\n`
))