const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      app = express(),
      blogRoutes = require('./routes/blogRoute');
// connect to mongoDB
const dbURI = 'mongodb+srv://ReiTest:2m8cCjHGa6x0mfDy@firstproject.igvdt.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true,useUnifiedTopology: true } )
.then(result => {
    // Listen for requests
    app.listen(3000);
})
.catch((err) => console.log(err));
// Middleware & static files
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
//Blog Router
app.use('/blogs/api',blogRoutes);
//404
app.use((req,res) => {
    res.render('404',{ title:'Not Found' });
})
