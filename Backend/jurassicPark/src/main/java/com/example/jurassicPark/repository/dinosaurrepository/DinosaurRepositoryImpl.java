package com.example.jurassicPark.repository.dinosaurrepository;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.models.Species;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class DinosaurRepositoryImpl implements DinosaurRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Dinosaur> getDinosaurBySpecies(Species species){
        List<Dinosaur> results = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Dinosaur.class);
            cr.add(Restrictions.eq("species", species));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }finally {
            session.close();
        }
        return results;
    }

//    @Transactional
//    public List<Dinosaur> getDinosaurByDiet(String diet){
//        List<Dinosaur> results = null;
//        Session session = entityManager.unwrap(Session.class);
//        try {
//            Criteria cr = session.createCriteria(Dinosaur.class);
//            cr.add(Restrictions.eq("diet", diet));
//            results = cr.list();
//        } catch (HibernateException ex) {
//            ex.printStackTrace();
//        }finally {
//            session.close();
//        }
//        return results;
//    }

//    @Transactional
//    public List<Paddock> getDinosaursPaddock(Long id){
//        List<Paddock> results = null;
//        Session session = entityManager.unwrap(Session.class);
//        try {
//            Criteria cr = session.createCriteria(Paddock.class);
//            cr.createAlias("dinosaurs", "dinosaur");
//            cr.add(Restrictions.eq("dinosaur.id", id));
//            results = cr.list();
//        }catch (HibernateException ex) {
//            ex.printStackTrace();
//        }finally {
//            session.close();
//        }
//        return results;
//    };





}
