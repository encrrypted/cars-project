import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {


  editCarForm: FormGroup = new FormGroup({
    'carName': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!]{3,16}$/)]),
    'carModel': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!]/)]),
    'carPrice': new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9!]/)])
  })

  // carName: string = ''
  // carModel: string  = ''
  // carPrice: number = 0
  car: any

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location:Location
    ) { }

    
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.carsService.getCarById(id).subscribe((data) => {
      this.car = data
      this.editCarForm.controls['carName'].setValue(this.car.name)
      this.editCarForm.controls['carModel'].setValue(this.car.model)
      this.editCarForm.controls['carPrice'].setValue(this.car.price)
    })
  }

  get f() {
    return this.editCarForm.controls
  }

  editCompiled() {
    let id = this.route.snapshot.params['id']

    let carName = this.editCarForm.controls['carName'].value
    let carModel = this.editCarForm.controls['carModel'].value
    let carPrice = this.editCarForm.controls['carPrice'].value

    this.car = {
      id: id,
      name: carName,
      model: carModel,
      price: carPrice
    }

    this.carsService.editCar(id, carName, carModel, carPrice)
    this.location.back()
    
  }

  back() {
    this.location.back()
  }
}
