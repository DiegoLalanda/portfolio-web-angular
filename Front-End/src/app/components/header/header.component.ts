import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;
  isLogged = false;


  constructor(private elementRef: ElementRef, private router: Router, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  login() {
    this.router.navigate(['/login'])
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

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



