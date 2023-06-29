package com.PortfolioWeb.DL.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 1500)
    private String descripcion;

    @Column(length = 200)
    private String lenguajes;

    @Column(length = 500)
    private String linkRepositorio;

    @Column(length = 500)
    private String imagen;

    public Proyecto() {
    }

    public Proyecto(String nombre, String descripcion, String lenguajes, String linkRepositorio, String imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.lenguajes = lenguajes;
        this.linkRepositorio = linkRepositorio;
        this.imagen = imagen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
