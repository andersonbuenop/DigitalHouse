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

    public class Mesa01 {
            public static void main(String[] args) {
                Scanner scan = new Scanner(System.in);
                System.out.println("Entre com o numero desejado: ");
                int numero = scan.nextInt();
                if(Primo(numero))
                    System.out.println("O número " + numero + " é primo!");
                else
                    System.out.println("O número " + numero + " não é primo!");
            }
            private static boolean Primo(int numero) {
                for (int j = 2; j < numero; j++) {
                    if (numero % j == 0)
                        return false;
                }
                return true;
            }
        }