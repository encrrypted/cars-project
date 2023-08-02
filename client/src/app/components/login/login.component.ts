import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/)])
  })
  users: User[] = []
  isAuthenticated: boolean = true
  constructor(
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllUsers()
    localStorage.clear
  }


  get f() {
    return this.loginForm.controls
  }

  submit() {
    localStorage.clear()
    if(this.loginForm.valid) {
      let email: string = this.loginForm.controls["email"].value
      let password: string = this.loginForm.controls["password"].value
      for(let i = 0; i < this.users.length; i++) {
        if(email == this.users[i].log && password == this.users[i].pass){
          this.router.navigate(['/auth/home'])
          localStorage.setItem("username", this.users[i].userName)
          return
        }
        else return alert("Invalid login or password")
      }


    }
  }

  register() {
    this.router.navigate(['/register'])
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data
    })
  }
  

}
