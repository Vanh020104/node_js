const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()

//configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultlayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));
const port = process.env.port || 3000

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))



// custom 404 page
app.use((req, res)=> {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found from LVM')
})
//custom 500 page
app.use((err, req, res, next)=> {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})
app.listen(port, () => console.log(
    'express started on http://localhost:${port}; ' +
    'press Ctrl-C to terminate'
))