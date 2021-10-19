package com.company;

import java.sql.SQLOutput;

public class Main {

    public static void main(String[] args) {
        // exercicio 00
     /*   int num1 = 6;
        int num2 = 2;
        int result = num1%num2;

        if(result == 0){
            result = num1 / num2;
            System.out.println(num1+" é divisivel por "+num2+" e o resultado é "+result);
        }else{
            System.out.println(num1+" não é divisivel exato por "+num2);
        }*/

        //exercicio 01
        /*String saudacao = "hello world";
        String grettings = "hello world";
        if (saudacao.equals(grettings)) {
            System.out.println("Textos iguais uhuuull!");
        } else {
            System.out.println("Deu ruim, textos não são iguais!");
        }*/

        //ecercicio 02
        int num1 = 9;
        int num2 = 6;

        if(num1>num2){
            System.out.println(num1+" é maior que "+num2);
        }else if(num1 == num2){
            System.out.println(num1+" é igual a "+num2);
        }else{
            System.out.println(num1+" é menor que "+num2);
        }
    }
}