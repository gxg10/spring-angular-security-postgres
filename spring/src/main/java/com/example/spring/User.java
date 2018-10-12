package com.example.spring;

import javax.persistence.*;

@Entity
@Table(name="userss")
public class User {

//    @Id
//    @GeneratedValue(generator = "user_generator")
//    @SequenceGenerator(
//            name="user_generator",
//            sequenceName = "user_sequence",
//            initialValue = 1
//    )
//    private Long id;

    @Id
    private String userName;

    @Column
    private String password;

    @Column
    private Boolean enabled;

    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}