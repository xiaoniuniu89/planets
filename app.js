const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const planetRoutes = require('./routes/planetRoutes')

// make app
const app = express();

// register ejs engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('assets'));
app.use(morgan('dev'))



// listen for requests
PORT = process.env.PORT | 3500

app.listen(PORT, () => {
    console.log(`running on PORT ${PORT}`)
});

app.get('/', (req, res) => {
    res.redirect('/mercury')
});

app.use(planetRoutes)

app.use((req, res) => {
    res.status(404).render('404');
})