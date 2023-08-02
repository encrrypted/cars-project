import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, observable, Observable, of } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  push(arg0: Car) {
    throw new Error('Method not implemented.');
  }

  url: string = 'http://localhost:3333/api/cars'

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.url) as Observable<Car[]>
  }


  getCarById(id: string): Observable<Car>  {
    return this.http.get(`${this.url}/${id}`) as Observable<Car>

  }

  
  editCar(id:string, name: any, model: any, price: any){
    return this.http.put(`${this.url}/${id}`, {
      "id": id,
      "name": name,
      "model": model,
      "price": price
    })
    .subscribe()
    
  }

  addCar(id:any, name: any, model: any, price: any){
    return this.http.post(this.url, {
      "id": id,
      "name": name,
      "model": model,
      "price": price
    })
    .subscribe()
  }

  deleteCar(id:string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>
  }


}
