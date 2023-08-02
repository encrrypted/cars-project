import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ){
    this.renderer.setStyle(document.body, "background-color" ,"url(./assets/images/deriv-hero-1920x9600-azure-rose-gold.jpg)")
  }

  ngOnInit(): void {
    
  }

}
