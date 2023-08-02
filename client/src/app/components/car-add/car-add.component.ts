import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  addCarForm: FormGroup = new FormGroup({
    'carName': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!]{3,16}$/)]),
    'carModel': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!]/)]),
    'carPrice': new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9!]/)])
  })
  car: Car[] = []
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }


  get f() {
    return this.addCarForm.controls
  }

  addCompiled() {
    let id
    // console.log(this.id);
    this.carsService.getCars().subscribe((data) => {
      id = ++data.length
      console.log(id);
      
    })
    

      let carName = this.addCarForm.controls['carName'].value
      let carModel = this.addCarForm.controls['carModel'].value
      let carPrice = this.addCarForm.controls['carPrice'].value
    
      // this.carsService.
      
      this.carsService.addCar(id, carName, carModel, carPrice)
    }

    back() {
      this.location.back()
    }
  }

