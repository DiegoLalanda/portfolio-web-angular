import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { ProyectoImageService } from 'src/app/service/proyecto-image.service'; // Importar el ProyectoImageService

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto: Proyecto = null;
  isLoggedIn: boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    public proyectoImageService: ProyectoImageService // Inyectar el ProyectoImageService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
      this.router.navigate(['']);
      alert('Por favor, inicia sesión para continuar.');
    }

    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      },
      error => {
        alert('Error al cargar el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyecto.imagen = this.proyectoImageService.getLatestImageUrl(); // Obtener la URL de la imagen cargada más recientemente
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      },
      error => {
        alert('Error al modificar el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = 'proyecto_' + id;
    this.proyectoImageService.uploadImageProject($event, name);
  }
}
