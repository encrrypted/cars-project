const Car = require('../models/car')

const getCars = (req, res) => {

  Car.find({}, (err, cars) => {
   res.json(cars)
  })

 }
const getOneCar = (req, res) => {

  Car.findOne({_id: req.params.id}, (err, car) => {
    if(err) return console.log(err)
    res.json(car)
   })
 }

const addCar = (req, res) => {
  
 let filedata = req.body.image;

 if(!filedata) {image=''}
 else image = filedata

console.log(filedata);

 const name = req.body.name
 const model = req.body.model
 const price = req.body.price
//  const image = req.body.image
 const car = new Car({name, model, price, image})
 car.save()
 res.send(car)
} 

const updateCar = (req, res) => {
 
  let filedata = req.body.image

  if(!filedata) {image=''}
  else image = filedata
  
  let car = {
  name: req.body.name,
  model: req.body.model,
  price: req.body.price,
  image: image
 }
 console.log(image);
 Car.findOneAndUpdate({_id: req.params.id}, car, (err, car) => {
  if(err) return console.log(err);
  res.json(car)
 })


}

const deleteCar = (req, res) => {

  Car.findOneAndDelete({_id: req.params.id}, (err, car) => {
    if(err) return console.log(err);
    res.json(car)
   })

}


module.exports = {
 getCars,
 getOneCar,
 addCar,
 updateCar,
 deleteCar
}