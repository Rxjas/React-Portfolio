const express = require('express');
// connect to routes const routes = require()
const path = require('path');
const app = express();
const logger = require('morgan');
require ('./config/db.js')();

//Port default 3000 otherwise use the one assigned by heroku
const PORT = process.env.PORT || 3001;

//Middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
// app.use(routes);

// if (process.env.NODE_ENV === "production") {
//    app.use(express.static("client/build"));
//   app.get('*', (req, res) => {
//      res.sendFile(path.join(__dirname, "../client/build/index.html"));
//    });
// }

//Letting us know if the server is listening emoji may cause issues
app.listen(PORT, () => {
    console.log('😤 👌 App Running on PORT: '+ PORT)
});