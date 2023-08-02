import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  cars: Car[] = []
  isDeleting: boolean = false
  deletedId: string = ''


  constructor(
    private carsService: CarsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllCars()
  }

  // createCar() {}

  editCar(id: any) {
    this.router.navigate(['/auth/car-edit', id])
  }

  showCarDetails(id: any) {
    this.router.navigate(['/auth/car-details', id])
  }
  
  deleteCar(id:any) {
    let cars
    let newId = 0
    this.deletedId = id
    this.isDeleting = true
    this.carsService.deleteCar(id).subscribe(() => {
      this.isDeleting = false
      this.getAllCars()
    })
    this.carsService.getCars().subscribe((data) => {
      cars = data
    })
    // for (const car of this.cars) {
    //   car.id = ++newId
    //   console.log(this.cars);
      
    // }
  }

  getAllCars() {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data
    })
  }


}
