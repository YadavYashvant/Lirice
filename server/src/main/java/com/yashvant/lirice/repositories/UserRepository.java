package com.yashvant.lirice.repositories;

import com.yashvant.lirice.models.UserL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserL, Long> {
}
