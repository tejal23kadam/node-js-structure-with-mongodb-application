const express = require('express');
const cors = require('cors');
const conn = require('./utility/connectdb')

const studentroute = require('./routes/student_route')
const employeeroute = require('./routes/employee_route')
const productroute = require('./routes/product_route')

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());
app.use('/api', studentroute);
app.use('/api', employeeroute);
app.use('/api', productroute);

//app.post("/upload", upload.array("image"), (req, res) => {
// const filename = req.files.map(file => file.filename)
//return res.status(200).json({ status: true, data: { message: "image uploading successfully.", data: filename } });
//}
//);


const startServer = async () => {
  await conn();
  app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
  })
}

startServer();



