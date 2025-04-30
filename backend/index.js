const express = require('express');
const cors = require('cors');
const conn = require('./utility/connectdb')

const userroute = require('./routes/user_route')
const employeeroute = require('./routes/employee_route')
const productroute = require('./routes/product_route')

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());
app.use('/api', userroute);
app.use('/api', employeeroute);
app.use('/api', productroute);

const startServer = async () => {
  await conn();
  app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
  })
}

startServer();



