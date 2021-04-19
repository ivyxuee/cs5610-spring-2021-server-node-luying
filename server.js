require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
// const remoteUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9jbfv.mongodb.net/wbdv?retryWrites=true&w=majority`

const remoteUri = `mongodb+srv://ivyxue123:ivyxue123@cluster0.dojlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const localUri = `mongodb://localhost:27017/whiteboard-02`
try {
  mongoose.connect(remoteUri,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db'));
} catch (err) {
  console.log('failed to connect to db')
}

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
  }
)

require('./controllers/quizzes-controller')(app);
require('./controllers/question-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(process.env.PORT || 4000);

// const express = require('express')
// const app = express()
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whiteboard-02', {useNewUrlParser: true, useUnifiedTopology: true});
//
// // Configures CORS
// app.use(function (req, res, next) {
//   // res.header('Access-Control-Allow-Origin', '*');
//   // res.header('Access-Control-Allow-Headers',
//   //     'Content-Type, X-Requested-With, Origin');
//   // res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
//   // res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   // res.header('Access-Control-Allow-Methods',
//   //     'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers',
//       'Content-Type, X-Requested-With, Origin');
//   res.header('Access-Control-Allow-Methods',
//       'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   next();
// });
//
//
// // const demos = require('./controllers/demos-controller')
// // demos(app)
//
// // const quizzesController = require('./controllers/quizzes-controller')
// // quizzesController(app)
//
// require('./controllers/quizzes-controller')(app)
// require('./controllers/question-controller')(app)
// require('./controllers/quiz-attempts-controller')(app)
//
// app.listen(4000)