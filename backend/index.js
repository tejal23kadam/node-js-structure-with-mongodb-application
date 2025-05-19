const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
const conn = require('./utility/connectdb')

const userroute = require('./routes/user_route')
const employeeroute = require('./routes/employee_route')
const productroute = require('./routes/product_route')
const categoryroute = require('./routes/category_route')
const app = express();
const port = 2000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, 'assets')))

app.use(cors());
app.use(express.json());
app.use('/api', userroute);
app.use('/api', employeeroute);
app.use('/api', productroute);
app.use('/api', categoryroute)
const startServer = async () => {
  await conn();
  app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
  })
}

startServer();



