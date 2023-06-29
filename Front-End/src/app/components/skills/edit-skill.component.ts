import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  isLogged = false;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.getToken() ? true : false;
    if (!this.isLogged) {
      this.router.navigate(['']); // Redirige si no se ha iniciado sesión
      alert('Por favor, inicia sesión para continuar.');
    }

    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    if (this.isLogged) {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillS.update(id, this.skill).subscribe(
        (data) => {
          this.router.navigate(['']);
        },
        (err) => {
          alert('Error al modificar la skill');
          this.router.navigate(['']);
        }
      );
    }
  }
}
``
