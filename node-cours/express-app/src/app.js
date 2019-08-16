const path=require('path')
const express = require('express')
const hbs= require('hbs')

const port = 80; 
const app = express();

//path definition
const pathPublic = path.join(__dirname, '..', 'public');
const pathTemplates = path.join(__dirname, '..', 'templates', 'views');
const pathPartials = path.join(__dirname, '..', 'templates', 'partials');

hbs.registerPartials(pathPartials);

app.use(express.static(pathPublic));

app.set('view engine', 'hbs');
app.set('views', pathTemplates);
//precise à node + crea dossier viexs + fichier index.hbs
//routes
app.get('', (req, res)=> {
    res.render('index', {title: 'Le chocolt c\'est trop cool'});
});

//Roots
// app.get('/about', (req, res)=> {
//     res.send('<h1>About</h1>');
// });
// app.get('/help', (req, res)=> {
//     res.send('<h1>Help</h1>');
// });

app.get('/weather', (req, res)=> {
    res.send({
        forecast: ' ',
        location: ''
    });
});

//listen 
app.listen (port, ()=>{
    console.log('serveur running');
});
