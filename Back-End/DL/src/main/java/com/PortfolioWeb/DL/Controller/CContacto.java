package com.PortfolioWeb.DL.Controller;

import com.PortfolioWeb.DL.Dto.dtoContacto;
import com.PortfolioWeb.DL.Entity.Contacto;
import com.PortfolioWeb.DL.Security.Controller.Mensaje;
import com.PortfolioWeb.DL.Service.SContacto;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacto")
@CrossOrigin(origins = "https://dlfrontend.web.app/")
public class CContacto {

    @Autowired
    private SContacto sContacto;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoContacto dtoContacto) {
        if (StringUtils.isBlank(dtoContacto.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sContacto.existsByNombre(dtoContacto.getNombre())) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        Contacto contacto = new Contacto(
                dtoContacto.getNombre(), dtoContacto.getNumeroTelefonico(),
                dtoContacto.getDireccionCorreo(), dtoContacto.getTema(),
                dtoContacto.getMensaje()
        );
        sContacto.save(contacto);
        return new ResponseEntity(new Mensaje("Contacto creado"), HttpStatus.OK);
    }
}
