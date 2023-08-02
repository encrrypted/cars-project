import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    "userName": new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{3,20}$/)]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('',  [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,24}$/)])
  })
  users: User[] = []

  constructor(
    private usersService: UsersService,
    private router: Router
   ){} 
  
  
  ngOnInit(): void {
    this.getAllUsers()
    localStorage.clear()
  }
  
  get f() {
    return this.registerForm.controls
  }


  submit() {



    if(this.registerForm.valid) {
      let userName: string = this.registerForm.controls["userName"].value
      let email: string = this.registerForm.controls["email"].value
      let password: string = this.registerForm.controls["password"].value
      let valid = true
      for(let i = 0; i < this.users.length; i++) {
        if(userName == this.users[i].userName || email == this.users[i].log){
          console.log('Username or email are already used.');
          valid = false
        }
      }
      if(valid) {
        this.usersService.registerUser(userName, email, password)
        localStorage.setItem("username", userName)
        this.router.navigate(['/auth/home'])
      }
    }
  }

  back() {
    this.router.navigate(['/login'])
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data
    })
  }
}
