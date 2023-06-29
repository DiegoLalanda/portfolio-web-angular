package com.PortfolioWeb.DL.Repository;

import com.PortfolioWeb.DL.Entity.Contacto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RContacto extends JpaRepository<Contacto, Integer> {
    public Optional<Contacto> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
