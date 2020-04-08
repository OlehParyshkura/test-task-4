// dependencies
const express = require('express');
const cors = require('cors');
const log = require('./app/routes/middleware/log');


// app initialization
const serverConfig = require('./config/server');
const app = express();

// connect database
//require('./app/database/connection/mongoose');
//midlewares
app.use(cors())
app.use(express.json());
app.use(log);
// // routers
let usersRoutes = require('./app/routes/api/users');
app.use('/api', usersRoutes);
app.use(express.static('app/react-front/build'));
app.listen(serverConfig.port);
console.log(`listening on port ${serverConfig.port}`)