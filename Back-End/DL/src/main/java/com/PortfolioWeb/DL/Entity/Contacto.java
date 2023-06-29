package com.PortfolioWeb.DL.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contacto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 20)
    private String numeroTelefonico;

    @Column(length = 100)
    private String direccionCorreo;

    @Column(length = 100)
    private String tema;

    @Column(length = 1000)
    private String mensaje;

    public Contacto() {
    }

    public Contacto(String nombre, String numeroTelefonico, String direccionCorreo, String tema, String mensaje) {
        this.nombre = nombre;
        this.numeroTelefonico = numeroTelefonico;
        this.direccionCorreo = direccionCorreo;
        this.tema = tema;
        this.mensaje = mensaje;
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

    public String getNumeroTelefonico() {
        return numeroTelefonico;
    }

    public void setNumeroTelefonico(String numeroTelefonico) {
        this.numeroTelefonico = numeroTelefonico;
    }

    public String getDireccionCorreo() {
        return direccionCorreo;
    }

    public void setDireccionCorreo(String direccionCorreo) {
        this.direccionCorreo = direccionCorreo;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
