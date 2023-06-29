package com.PortfolioWeb.DL.Service;

import com.PortfolioWeb.DL.Entity.Contacto;
import com.PortfolioWeb.DL.Repository.RContacto;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SContacto {
    @Autowired
    private RContacto rContacto;

    public List<Contacto> list() {
        return rContacto.findAll();
    }

    public Optional<Contacto> getOne(int id) {
        return rContacto.findById(id);
    }

    public Optional<Contacto> getByNombre(String nombre) {
        return rContacto.findByNombre(nombre);
    }

    public void save(Contacto contacto) {
        rContacto.save(contacto);
    }

    public void delete(int id) {
        rContacto.deleteById(id);
    }

    public boolean existsById(int id) {
        return rContacto.existsById(id);
    }

    public boolean existsByNombre(String nombre) {
        return rContacto.existsByNombre(nombre);
    }
}
