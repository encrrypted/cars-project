import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText = ""
  cars: Car[] = []
  isDeleting: boolean = false
  deletedId: number = 0
  
  
  constructor(
    private carsService: CarsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.getAllCars()
    this.carsService.getCars().subscribe((data) => {
      this.cars = data
    })
  }

  // getAllCars() {
  //   this.carsService.getCars().subscribe((data) => {
  //     this.cars = data
  //   })
  // }


  search() {
    this.cars = this.cars.filter(car => car.name.search(this.searchText) != -1)
    
    // if(this.searchText.length > 0){
    //   this.cars = this.cars.filter(car => car.name.search(this.searchText) != -1)
    // }
    // else{
    //   this.getAllCars()
    // }

    
    // console.log(this.cars.filter(car => car.name.search(this.searchText) != -1));
    
    
  }

}
