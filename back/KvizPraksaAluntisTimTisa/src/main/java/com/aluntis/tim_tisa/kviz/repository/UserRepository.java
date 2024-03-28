package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
