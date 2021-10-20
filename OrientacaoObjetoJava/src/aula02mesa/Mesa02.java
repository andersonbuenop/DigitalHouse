/*
    Mesa 07
    Anderson Bueno
    Arnaldo Ramos
    Pedro Menezes
    Renan de Andrade
    Wirley Almeida
    Jehan Lucas Vieira
    Weverton Gois
     */
package aula02mesa;

import java.util.Scanner;

public class Mesa02 {
    public static void main(String[] args) {
        Scanner scanner;
        scanner = new Scanner(System.in);
        System.out.println("Entre com primeiro valor: ");
        int num1 = scanner.nextInt();
        System.out.println("Entre com o segundo valor: ");
        int num2 = scanner.nextInt();
        System.out.println("Entre com o terceiro valor: ");
        int num3 = scanner.nextInt();

        int result = Maior(num1,num2,num3);
        System.out.println("O maior valor entre "+num1+", "+num2+" e "+num3+" é : "+result);

    }

     public static int Maior(int num1, int num2, int num3) {
        int valor = Math.max(Math.max(num1,num2),num3);
        return valor;
    }
}
