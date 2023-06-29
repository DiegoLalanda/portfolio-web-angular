package com.PortfolioWeb.DL.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(length = 50)
    private String nombreE;
    
    @Column(length = 1000)
    private String descripcionE;
    
    @Column(length = 100)
    private String nombreInstitucion;
    
    @Column(length = 50)
    private String anio;
    
    @Column(length = 500)
    private String imagenInstitucion;
    
    public Experiencia() {
    }
    
    public Experiencia(String nombreE, String descripcionE, String nombreInstitucion, String anio, String imagenInstitucion) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.nombreInstitucion = nombreInstitucion;
        this.anio = anio;
        this.imagenInstitucion = imagenInstitucion;
    }
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
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
