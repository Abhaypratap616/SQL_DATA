const express = require('express');
const app = express();

const db = require('./config/db');
app.get('/', (req, res) => {
  res.send('Hello');
});
app.use("/api/v1/students", require('./routes/student'));

db.query("SELECT 1").then(()=>{
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err)=>{
    console.log("Error connecting to database");
    console.log(err);
})



