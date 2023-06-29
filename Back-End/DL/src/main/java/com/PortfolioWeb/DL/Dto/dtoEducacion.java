package com.PortfolioWeb.DL.Dto;

import javax.validation.constraints.NotBlank;

public class dtoEducacion {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String nombreInstitucion;
    @NotBlank
    private String anio;
    @NotBlank
    private String imagenInstitucion;

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreE, String descripcionE, String nombreInstitucion, String anio, String imagenInstitucion) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.nombreInstitucion = nombreInstitucion;
        this.anio = anio;
        this.imagenInstitucion = imagenInstitucion;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getNombreInstitucion() {
        return nombreInstitucion;
    }

    public void setNombreInstitucion(String nombreInstitucion) {
        this.nombreInstitucion = nombreInstitucion;
    }

    public String getAnio() {
        return anio;
    }

    public void setAnio(String anio) {
        this.anio = anio;
    }

    public String getImagenInstitucion() {
        return imagenInstitucion;
    }

    public void setImagenInstitucion(String imagenInstitucion) {
        this.imagenInstitucion = imagenInstitucion;
    }
}
