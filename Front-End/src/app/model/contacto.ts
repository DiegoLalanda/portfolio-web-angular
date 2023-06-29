export class Contacto {
    id?: number;
    nombre: string;
    numeroTelefonico: string;
    direccionCorreo: string;
    tema: string;
    mensaje: string;

    constructor(nombre: string, numeroTelefonico: string, direccionCorreo: string, tema: string, mensaje: string) {
        this.nombre = nombre;
        this.numeroTelefonico = numeroTelefonico;
        this.direccionCorreo = direccionCorreo;
        this.tema = tema;
        this.mensaje = mensaje;
    }
}
