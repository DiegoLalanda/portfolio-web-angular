export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    lenguajes: string;
    linkRepositorio: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, lenguajes: string, linkRepositorio: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.lenguajes = lenguajes;
        this.linkRepositorio = linkRepositorio;
        this.imagen = imagen;
    }
}
