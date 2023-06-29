import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { ImagenInstitucionService } from 'src/app/service/imagen-institucion.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  isLoggedIn: boolean = false;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    public imagenInstitucionService: ImagenInstitucionService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
      this.router.navigate(['']);
      alert('Por favor, inicia sesión para continuar.');
    }

    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      },
      err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expLab.imagenInstitucion = this.imagenInstitucionService.getLatestImageUrl();
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'experiencia_' + id;
    this.imagenInstitucionService.uploadImageInstitucion($event, name);
  }
}
