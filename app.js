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


app.listen(process.env.PORT);

app.get('/', (req, res) => {
    res.redirect('/earth')
});

app.use(planetRoutes)

app.use((req, res) => {
    res.status(404).render('404');
})