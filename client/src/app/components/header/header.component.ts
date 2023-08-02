import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  user: any
  ngOnInit(): void {
    let name = localStorage.getItem('username')
    this.user = name
  }



  logout() {
    this.router.navigate(['/'])
    localStorage.clear()
  }

}
