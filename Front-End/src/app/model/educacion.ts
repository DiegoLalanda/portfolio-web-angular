export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    nombreInstitucion: string;
    anio: string;
    imagenInstitucion: string;

    constructor(nombreE: string, descripcionE: string, nombreInstitucion: string, anio: string, imagenInstitucion: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.nombreInstitucion = nombreInstitucion;
        this.anio = anio;
        this.imagenInstitucion = imagenInstitucion;
    }
}
