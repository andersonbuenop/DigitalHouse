/*
Sala 01

Arnaldo Ramos
Anderson Bueno
Lelia Salles
Ector Cunha
Francieli Celeghim
Wallace Souza
Dayana
 */
package aula06;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Principal {
    public static void main(String[] args) {
        //(boolean podeAdotar, boolean chip, boolean ferido, String raca, String nome, Date dataNasc, double peso  )
        //LocalDate data1 = LocalDate.of(2019,04,21);
        Cachorro dog = new Cachorro(true, true, false, "Pug", "Amassado", LocalDate.of(2018, 07, 22), 5.1);

/*        System.out.println("Nome: "+dog.getNome());
        System.out.println("Pode ser adotado: "+dog.getPodeAdotar());
        System.out.println("Possui Chip: "+dog.getChip());
        System.out.println("Está ferido: "+dog.getFerido());
        System.out.println("Raça: "+dog.getRaca());
        System.out.println("Data Nascimento: "+dog.getDataNasc());
        System.out.println("Peso: "+dog.getPeso());*/
        System.out.println("Idade: "+dog.validarIdade());
        System.out.println("Chip Valido: "+dog.validarChip());
        System.out.println("Status de adoção: "+dog.validarAdocao());

    }
}
