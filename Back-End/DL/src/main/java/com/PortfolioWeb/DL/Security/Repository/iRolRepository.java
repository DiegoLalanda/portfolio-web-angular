
package com.PortfolioWeb.DL.Security.Repository;

import com.PortfolioWeb.DL.Security.Entity.Rol;
import com.PortfolioWeb.DL.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
   Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
