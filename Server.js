const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const knex = require("knex")



const db = knex({
    client:'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'test',
        database: 'test'
    }

})

//console.log(db.select('*').from ('users'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render("index.ejs")
})


app.get('/aboutus', (req,res)=>{
    res.render("aboutus.ejs")
})

app.get('/services', (req, res)=>{
    res.render("services.ejs")
})

app.get('/product', (req, res)=>{
    res.render("product.ejs")
})

app.post('/', (req, res)=>{
    const {name, tel, email, message} = req.body;
    db('contacts').insert({
        name: name,
        tel: tel,
        email: email,
        message: message

    }).then(console.log)

    res.send("We'll contact you shortly!")
})
app.listen(3000);
 