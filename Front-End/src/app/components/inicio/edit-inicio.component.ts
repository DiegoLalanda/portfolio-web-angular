import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service'; // Importar el TokenService

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css']
})
export class EditInicioComponent implements OnInit {
  persona: persona = null;
  isLoggedIn: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService,
    public bannerService: BannerService,
    private tokenService: TokenService // Inyectar el TokenService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() ? true : false;
    if (!this.isLoggedIn) {
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
    this.bannerService.getBannerURL(); // Obtener la URL del banner
  }

  onUpdate(): void {
    if (this.isLoggedIn) {
      const id = this.activatedRouter.snapshot.params['id'];
      this.persona.img = this.imageService.url;
      this.persona.banner = this.bannerService.url; // Asignar la URL del banner
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

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }

  uploadBannerImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'banner_' + id;
    this.bannerService.uploadBanner($event, name);
  }
}
