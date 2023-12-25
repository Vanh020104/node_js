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


const products = [
    {
        name: 'Product 1', image: '/img/car1.png'
    },
    {
        name: 'Product 2', image: '/img/car2.png'
    },
    {
        name: 'Product 3', image: '/img/car3.png'
    },
]
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
app.get('/listPro', (req, res) =>  {
    res.render('listPro', {products})
})
 



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
    `express started on http://localhost:${port}; ` +
    'press Ctrl-C to terminate'
))
//note