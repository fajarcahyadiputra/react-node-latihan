const express = require('express');
const dotenv  = require('dotenv').config();
const cors    = require('cors');
const  app    = express();

//database
const db      = require('./models');
//import router
const postRouter = require('./routes/PostRouter');

//port
const PORT    = process.env.PORT || 3000;

//set cors
var whitelist = ['http://localhost:3000']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use router
app.use('/post', postRouter);

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=> console.log(`server running at http://localhost:${PORT}`));
})