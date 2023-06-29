import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre: string;
  numeroTelefonico: string;
  direccionCorreo: string;
  tema: string;
  mensaje: string;

  constructor(
    private contactoService: ContactoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // No se requiere control de inicio de sesión
  }

  onCreate(): void {
    const contacto: Contacto = new Contacto(this.nombre, this.numeroTelefonico, this.direccionCorreo, this.tema, this.mensaje);
    this.contactoService.create(contacto).subscribe(
      () => {
        alert('Contacto enviado correctamente');
        this.resetForm();
        this.router.navigate(['']);
      },
      () => {
        alert('Falló al enviar el contacto');
        this.router.navigate(['']);
      }
    );
  }

  resetForm(): void {
    this.nombre = '';
    this.numeroTelefonico = '';
    this.direccionCorreo = '';
    this.tema = '';
    this.mensaje = '';
  }
}
