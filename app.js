const express = require('express');
const connection = require('./configration/configDb');
const userRouter = require('./modules/users/routes/userRoutes')
const attendanceRouter = require('./modules/attendances/routes/attendanceRoutes')
const departmentRouter = require("./modules/department/routes/departmentRoutes")
var cron = require('node-cron');

const dailyEmail = require('./jobs/dailyEmail');






cron.schedule('0 30 10 * * 1- 5', dailyEmail );

// dailyEmail()




require('dotenv').config() ; 
const app = express() ; 


app.use(express.json());
app.use(userRouter) ;
app.use(departmentRouter)
app.use(attendanceRouter);


const port = process.env.PORT;



connection();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));