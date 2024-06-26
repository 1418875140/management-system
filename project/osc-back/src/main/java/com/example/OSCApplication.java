package com.example;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@MapperScan("com.example.mapper")
@SpringBootApplication
public class OSCApplication {

    public static void main(String[] args) {
        SpringApplication.run(OSCApplication.class, args);
    }

}
