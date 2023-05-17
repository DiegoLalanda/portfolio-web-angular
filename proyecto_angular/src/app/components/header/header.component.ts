import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  desplegarMenu(): void {
    const navElement = this.elementRef.nativeElement.querySelector("#nav");
    if (this.menuVisible) {
      navElement.classList.remove("responsive");
      this.menuVisible = false;
    } else {
      navElement.classList.add("responsive");
      this.menuVisible = true;
    }
  }

  seleccionar(): void {
    const navElement = this.elementRef.nativeElement.querySelector("#nav");
    navElement.classList.remove("responsive");
    this.menuVisible = false;
  }

}



