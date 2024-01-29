//The purpose of this project is to learn about MVC design pattern

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');  //Ive used ejs template engine
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); 
app.use(shopRoutes);   

app.use(errorController.get404);

app.listen(3000,()=>{
  console.log("Listening on port 3000")
});
//Thank you