package com.aluntis.tim_tisa.kviz.service;
import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.entity.Hard;
import com.aluntis.tim_tisa.kviz.entity.Medium;
import com.aluntis.tim_tisa.kviz.entity.User;
import com.aluntis.tim_tisa.kviz.repository.EasyRepository;
import com.aluntis.tim_tisa.kviz.repository.HardRepository;
import com.aluntis.tim_tisa.kviz.repository.MediumRepository;
import com.aluntis.tim_tisa.kviz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.Duration;
import java.time.LocalDateTime;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    EasyRepository easyRepository;
    @Autowired
    MediumRepository mediumRepository;
    @Autowired
    HardRepository hardRepository;
    public void dodaj(User user) {
        if(user.getIme()==null || user.getBrojBodova()==null || user.getVrijeme()==null || user.getTipPitanja()==null || user.getOblast().getId()==null || user.getMode()==null){
            throw new IllegalStateException("Sva polja tabele user moraju biti popunjena-(ne mogu imati vrijednost null)");
        }
        userRepository.save(user);
        if(user.getMode()==1){
            Easy igrac=new Easy();
            igrac.setIme(user.getIme());
            igrac.setVrijeme(user.getVrijeme());
            igrac.setBrojBodova(user.getBrojBodova());
            igrac.setTipPitanja(user.getTipPitanja());
            easyRepository.save(igrac);
        }else if(user.getMode()==2){
            Medium igrac1=new Medium();
            igrac1.setIme(user.getIme());
            igrac1.setVrijeme(user.getVrijeme());
            igrac1.setBrojBodova(user.getBrojBodova());
            igrac1.setTipPitanja(user.getTipPitanja());
            mediumRepository.save(igrac1);
        }else if(user.getMode()==3){
            Hard igrac2=new Hard();
            igrac2.setIme(user.getIme());
            igrac2.setVrijeme(user.getVrijeme());
            igrac2.setBrojBodova(user.getBrojBodova());
            igrac2.setTipPitanja(user.getTipPitanja());
            hardRepository.save(igrac2);
        }
    }
}
