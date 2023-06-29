import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { ImagenInstitucionService } from 'src/app/service/imagen-institucion.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  nombreInstitucion: string;
  anio: string;
  imagenInstitucion: string;
  isLoggedIn: boolean = false;

  constructor(
    private sExperiencia: SExperienciaService,
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
  }

  onCreate(): void {
    if (this.isLoggedIn) {
      const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.nombreInstitucion, this.anio, this.imagenInstitucion);
      this.sExperiencia.save(experiencia).subscribe(
        data => {
          alert('Experiencia añadida correctamente');
          this.router.navigate(['']);
        },
        err => {
          alert('Falló al agregar la experiencia');
          this.router.navigate(['']);
        }
      );
    }
  }

  uploadImage($event: any) {
    const name = 'experiencia_new'; // Nombre de la imagen para la nueva experiencia
    this.imagenInstitucionService.uploadImageInstitucion($event, name);
  }
}
