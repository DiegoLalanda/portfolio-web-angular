import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  @ViewChild('carrusel') carruselRef!: ElementRef;

  fotos = [
    { url: 'assets/images/proyecto1.png', descripcion: 'Foto 1' },
    { url: 'assets/images/proyecto1_2.png', descripcion: 'Foto 2' },
    { url: 'assets/images/proyecto1_3.png', descripcion: 'Foto 3' },
    { url: 'assets/images/proyecto1_3.png', descripcion: 'Foto 3' }
  ];

  ngOnInit() {
    // Iniciar el desplazamiento automático del carrusel
    setInterval(() => {
      this.scrollCarrusel(1); // Dirección hacia la derecha (1)
    }, 3000); // Cambiar el intervalo según tus necesidades
  }

  scrollCarrusel(direction: number) {
    const carruselElement: HTMLElement = this.carruselRef.nativeElement;
    const carruselWidth = carruselElement.offsetWidth;
    const scrollAmount = carruselWidth * direction;
  
    carruselElement.scrollTo({
      left: carruselElement.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  
    // Verificar si se alcanzó el final del carrusel
    if (
      direction === 1 &&
      carruselElement.scrollLeft + carruselWidth >= carruselElement.scrollWidth - carruselWidth
    ) {
      // Volver al inicio del carrusel
      carruselElement.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
  
}
