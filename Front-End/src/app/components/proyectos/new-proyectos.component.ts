import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { ProyectoImageService } from 'src/app/service/proyecto-image.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  lenguajes: string = '';
  linkRepositorio: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private tokenService: TokenService,
    public proyectoImageService: ProyectoImageService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
      this.router.navigate(['']);
      alert('Por favor, inicia sesión para continuar.');
    }
  }

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombre,
      this.descripcion,
      this.lenguajes,
      this.linkRepositorio,
      this.proyectoImageService.getLatestImageUrl() // Obtener la URL de la imagen cargada más recientemente
    );

    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert('Proyecto añadido');
        this.router.navigate(['']);
      },
      err => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const name = 'proyecto_new'; // Nombre de la imagen para el nuevo proyecto
    this.proyectoImageService.uploadImageProject($event, name);
  }
}
