const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser')
const app = express()


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.get('/register-thanks', (req, res) => res.render('register-thanks'))
app.get('/sorry', (req, res) => res.render('sorry'))


app.get('*', (req, res) => res.render('feedback'))

app.post('/process-contact', (req, res) => {
    try{


        if(req.body.simulateError) throw new Error("error saving contact!")
        console.log(`contact from ${req.body.name} <${req.body.email}>`)
        res.format({
            'text/html': () => res.redirect(303, 'sorry'),
            'application/json': () => res.json({ success: true}),
        })
    } catch(err){

        console.error(`error processing contact from ${req.body.name}` +
        `<${req.body.email}>`)
        res.format({
            'text/html': () => res.redirect(303, 'register-thanks'),
            'application/json': () => res.status(500).json({
                error: 'error saving contact information'
            }),
        })
    }

})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))
