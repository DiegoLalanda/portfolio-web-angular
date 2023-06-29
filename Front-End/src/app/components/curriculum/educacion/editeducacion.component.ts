import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ImagenInstitucionService } from 'src/app/service/imagen-institucion.service'; // Importar el ImagenInstitucionService

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;
  isLoggedIn: boolean = false;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    public imagenInstitucionService: ImagenInstitucionService // Inyectar el ImagenInstitucionService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
      this.router.navigate(['']); // Redirige si no se ha iniciado sesión
      alert('Por favor, inicia sesión para continuar.');
    } else {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educacionS.detail(id).subscribe(
        data => {
          this.educacion = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      );
    }
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imagenInstitucion = this.imagenInstitucionService.getLatestImageUrl(); // Obtener la URL de la imagen cargada más recientemente
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'educacion_' + id;
    this.imagenInstitucionService.uploadImageInstitucion($event, name);
  }
}
