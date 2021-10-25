package aula03;

import java.util.Scanner;

public class Funcao {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        System.out.println("Qual o nome do dog: ");
        String name = in.next();
        System.out.println("Quantidade de racao: ");
        String qtd = in.next();
        float quantidade = Float.parseFloat(qtd);

        pacote(quantidade);

    }

    public static void pacote(float num){

        Scanner in = new Scanner(System.in);
        float kilo = 0.0f;
        int pacote = 0;

        while (kilo < num){
            System.out.println("Peso do pacote de racao: ");
            String entrada = in.next();
            float aux = Float.parseFloat(entrada);

            kilo += aux;
            pacote ++;
        }
    }
}
