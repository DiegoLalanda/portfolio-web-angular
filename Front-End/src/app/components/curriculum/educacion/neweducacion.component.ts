import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ImagenInstitucionService } from 'src/app/service/imagen-institucion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  nombreInstitucion: string;
  anio: string;
  imagenInstitucion: string;
  isLoggedIn: boolean = false;

  constructor(
    private educacionS: EducacionService,
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
      const educacion = new Educacion(this.nombreE, this.descripcionE, this.nombreInstitucion, this.anio, this.imagenInstitucion);
      this.educacionS.save(educacion).subscribe(
        data => {
          alert("Educacion añadida correctamente");
          this.router.navigate(['']);
        }, err => {
          alert("Falló al agregar educación");
          this.router.navigate(['']);
        }
      );
    }
  }

  uploadImage($event: any) {
    const name = 'educacion_new'; // Nombre de la imagen para la nueva educación
    this.imagenInstitucionService.uploadImageInstitucion($event, name);
  }
}

