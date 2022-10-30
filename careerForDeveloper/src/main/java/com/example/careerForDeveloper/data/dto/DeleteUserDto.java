package com.example.careerForDeveloper.data.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class DeleteUserDto {
    long userId;
    String pwd;

    public DeleteUserDto(String pwd){
        this.pwd = pwd;
    }
}
