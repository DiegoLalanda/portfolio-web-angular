package com.PortfolioWeb.DL.Repository;

import com.PortfolioWeb.DL.Entity.Proyecto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RProyecto extends JpaRepository<Proyecto, Integer> {
    Optional<Proyecto> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
}
