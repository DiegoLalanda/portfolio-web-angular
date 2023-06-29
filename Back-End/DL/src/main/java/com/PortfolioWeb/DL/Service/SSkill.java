
package com.PortfolioWeb.DL.Service;

import com.PortfolioWeb.DL.Entity.Skill;
import com.PortfolioWeb.DL.Repository.RSkill;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SSkill {
    @Autowired
    RSkill rhys;
    
    public List<Skill> list(){
        return rhys.findAll();
    }
    
    public Optional<Skill> getOne(int id){
        return rhys.findById(id);
    }
    
    public Optional<Skill> getByNombre(String nombre){
        return rhys.findByNombre(nombre);
    }
    
    public void save(Skill skill){
        rhys.save(skill);
    }
    
    public void delete(int id){
        rhys.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rhys.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return rhys.existsByNombre(nombre);
    }
}
