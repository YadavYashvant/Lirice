package com.yashvant.lirice.services;

/*
import com.yashvant.lirice.models.UserL;
import com.yashvant.lirice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserL saveUser(UserL userL){
        return userRepository.save(userL);
    }

    @Override
    public List<UserL> fetchUserList(){
        return (List<UserL>) userRepository.findAll();
    }

    @Override
    public UserL updateUser(UserL userL, Long userId){
        UserL depDB
                = userRepository.findById(userId)
                .get();

        if (Objects.nonNull(userL.getUsername())
                && !"".equalsIgnoreCase(
                userL.getUsername())) {
            depDB.setUsername(
                    userL.getUsername());
        }

        if (Objects.nonNull(
                userL.getEmail())
                && !"".equalsIgnoreCase(
                userL.getEmail())) {
            depDB.setEmail(
                    userL.getEmail());
        }

        */
/*if (Objects.nonNull(department.getDepartmentCode())
                && !"".equalsIgnoreCase(
                department.getDepartmentCode())) {
            depDB.setDepartmentCode(
                    department.getDepartmentCode());
        }*//*


        return userRepository.save(depDB);
    }

    @Override
    public void deleteUserById(Long userId){
        userRepository.deleteById(userId);
    }

}
*/
