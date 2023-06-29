package com.PortfolioWeb.DL.Dto;

import javax.validation.constraints.NotBlank;

public class dtoProyecto {

    @NotBlank
    private String nombre;

    @NotBlank
    private String descripcion;

    @NotBlank
    private String lenguajes;

    @NotBlank
    private String linkRepositorio;

    @NotBlank
    private String imagen;

    public dtoProyecto() {
    }

    public dtoProyecto(String nombre, String descripcion, String lenguajes, String linkRepositorio, String imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.lenguajes = lenguajes;
        this.linkRepositorio = linkRepositorio;
        this.imagen = imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getLenguajes() {
        return lenguajes;
    }

    public void setLenguajes(String lenguajes) {
        this.lenguajes = lenguajes;
    }

    public String getLinkRepositorio() {
        return linkRepositorio;
    }

    public void setLinkRepositorio(String linkRepositorio) {
        this.linkRepositorio = linkRepositorio;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}
