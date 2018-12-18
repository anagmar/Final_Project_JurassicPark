package com.example.jurassicPark.repository.paddockreposirtory;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.repository.dinosaurrepository.DinosaurRepositoryCustom;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class PaddockRepositoryImpl implements PaddockRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Dinosaur> getAllDinosaursInPaddock(Long id){
        List<Dinosaur> results = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Dinosaur.class);
            cr.createAlias("paddock","paddocks");
            cr.add(Restrictions.eq("paddocks.id", id));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }finally {
            session.close();
        }
        return results;

    }

}
