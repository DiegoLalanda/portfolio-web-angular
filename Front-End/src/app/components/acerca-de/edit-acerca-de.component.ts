import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  persona: persona = null;
  isLogged = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
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
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    if (this.isLogged) {
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.update(id, this.persona).subscribe(
        (data) => {
          this.router.navigate(['']);
        },
        (err) => {
          alert('Error al modificar');
          this.router.navigate(['']);
        }
      );
    }
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
