package com.PortfolioWeb.DL.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Size(min=1, max=50, message="No cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min=1, max=50, message="No cumple con la longitud")
    private String apellido;
    
    private String img;
    
    private String banner;
    
    @NotNull
    @Size(min=1, max=1500, message="No cumple con la longitud")
    private String descripcion;

    public Persona() {
    }

    public Persona(String nombre, String apellido, String img, String banner, String descripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.banner=banner;
        this.descripcion = descripcion;
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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }
    

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    
}


