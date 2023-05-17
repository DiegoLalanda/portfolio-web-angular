import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.animacionSkills.bind(this));
  }

  animacionSkills(): void {
    const skillsElement = this.elementRef.nativeElement.querySelector("#skills");
    const distanciaSkills = window.innerHeight - skillsElement.getBoundingClientRect().top;
    
    if (distanciaSkills >= 300) {
      const habilidades = this.elementRef.nativeElement.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("bootstrap");
      habilidades[4].classList.add("angular");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajoenequipo");
      habilidades[7].classList.add("dedicacion");
      habilidades[8].classList.add("autonomia");
      habilidades[9].classList.add("liderazgo");
    }
  }

}
