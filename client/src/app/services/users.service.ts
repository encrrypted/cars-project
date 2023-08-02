import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  push(arg0: User) {
    throw new Error('Method not implemented.');
  }
  url: string = 'http://localhost:3333/api/users'
  users: User[] =[]
  constructor(
    private http: HttpClient
  ) {
  }
  
  register() {}

  isAuthenticated: boolean = true

  getUsers(): Observable<User[]>{
    return this.http.get(this.url) as Observable<User[]>
  }

  // login(email: string, password: string) {
  //   this.getAllUsers()
  //   console.log(this.users);
    
  //   if(email == "test@gmail.com" && password == "123") {
  //     this.isAuthenticated = true
  //     return of({}).pipe(delay(2000))
  //   }
  //   return throwError(`Invalid login or password`)
  // }
  
  getAllUsers() {
    this.getUsers().subscribe((data) => {
      this.users = data
    })
  }

  registerUser(userName: any, log: any, pass: any){
    this.http.post(this.url, {
      "userName": userName,
      "log": log,
      "pass": pass
    })
    .subscribe((res) => {
        console.log(res);
      })
  }

  signOut() {}

}
