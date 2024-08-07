package com.yashvant.springseclirice.repositories;

import java.util.Optional;

import com.yashvant.springseclirice.entities.ERole;
import com.yashvant.springseclirice.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
