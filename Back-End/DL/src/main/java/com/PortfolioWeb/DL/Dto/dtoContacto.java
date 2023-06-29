package com.PortfolioWeb.DL.Dto;

import javax.validation.constraints.NotBlank;

public class dtoContacto {
    @NotBlank
    private String nombre;
    @NotBlank
    private String numeroTelefonico;
    @NotBlank
    private String direccionCorreo;
    @NotBlank
    private String tema;
    @NotBlank
    private String mensaje;

    public dtoContacto() {
    }

    public dtoContacto(String nombre, String numeroTelefonico, String direccionCorreo, String tema, String mensaje) {
        this.nombre = nombre;
        this.numeroTelefonico = numeroTelefonico;
        this.direccionCorreo = direccionCorreo;
        this.tema = tema;
        this.mensaje = mensaje;
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
