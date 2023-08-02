import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  cars: Car[] =[]
  cars2: Car[] =[]
  constructor(
    private carsService: CarsService
    ) { }

  ngOnInit(): void {
    this.getAllCars()
  }

  getAllCars() {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data
      let c = data.length - 10
      this.cars.splice(0, c)
      // console.log(data.length);
      for(let i = data.length; i < 0; i--){
        this.cars2[i] = this.cars[i]
      }
    })
  }

}
