package aula03;

public class Ex01 {
    public static void main(String[] args) {

        Primo(7);

    }

     public static void Primo(int numero){
        int index = 2;
        while((ehPrimo(index)) & (index < numero)){
            System.out.println("O numero "+index+" é primo!");
            index++;
        }
    }

    private static boolean ehPrimo(int numero) {
        for (int j = 2; j < numero; j++) {
            if (numero % j == 0)
                return false;
        }
        return true;
    }
}
