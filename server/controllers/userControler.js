const User = require('../models/user')

const getUsers = (req, res) => {

  User.find({}, (err, users) => {
   res.json(users)
  })

 }
// const getOneCar = (req, res) => {

//   User.findOne({_id: req.params.id}, (err, user) => {
//     if(err) return console.log(err)
//     res.json(user)
//    })
 
//  }

const registerUser = (req, res) => {
 const userName = req.body.userName
 const log = req.body.log
 const pass = req.body.pass
 const user = new User({userName, log, pass})
 user.save()
 res.send(user)
} 

module.exports = {
 getUsers,
 registerUser
}