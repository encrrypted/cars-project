import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {


  car!: Car
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location:Location
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    
    this.carsService.getCarById(id).subscribe((data) => {
      this.car = data
    })
    
  }


  back() {
    this.location.back()
    console.log(localStorage.getItem('username'));
    
  }

}
