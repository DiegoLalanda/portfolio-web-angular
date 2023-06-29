// NewSkillComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  isLoggedIn: boolean = false;

  constructor(
    private skillS: SkillService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
      this.router.navigate(['']); // Redirige si no se ha iniciado sesión
      alert('Por favor, inicia sesión para continuar.');
    }
  }

  onCreate(): void {
    if (this.isLoggedIn) {
      const skill = new Skill(this.nombre, this.porcentaje);
      this.skillS.save(skill).subscribe(
        data => {
          alert("Skill creada correctamente");
          this.router.navigate(['']);
        }, err => {
          alert("Fallo al añadir la skill");
          this.router.navigate(['']);
        }
      );
    } else {
      this.router.navigate(['']); // Redirige si no se ha iniciado sesión
      alert('Por favor, inicia sesión para continuar.');
    }
  }
}
