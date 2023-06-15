
package com.PortfolioWeb.DL.Interface;

import com.PortfolioWeb.DL.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una persona
    public List<Persona> getPersona();
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    //eliminar un objeto buscandolo por su ID
    public void deletePersona(Long id);
    //buscar persona po ID
    public Persona findPersona(Long id);
}
