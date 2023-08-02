const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')

const carsRouter = require('./routes/appRouter')
const usersRouter = require('./routes/userRouter')
const {PORT, DB_URI, DB_NAME} = require('./config/config')
const app = express()

app.use(express.static('/mvc-express/upload'));

// const storageConfig = multer.diskStorage({
//  destination: (req, file, cb) =>{
//      cb(null, "upload");
//  },
//  filename: (req, file, cb) =>{
//      cb(null, file.originalname);
//  }
// });

app.use(multer({storage:"/mvc-express/upload"}).single("carPhoto"));

const cors = require('cors')
app.use(cors())
app.use('/api/cars', carsRouter)
app.use('/api/users', usersRouter)
mongoose.connect(`${DB_URI}/${DB_NAME}`, {}, (err) => {
 if(err) return console.log(err)
 app.listen(PORT, () => {
  console.log('Server started');
 })
})