package aula06;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Cachorro {
    private Boolean podeAdotar;
    private Boolean chip;
    private Boolean ferido;
    private String raca;
    private String nome;
    private LocalDate dataNasc;
    private Double peso;

    public Cachorro(boolean podeAdotar, boolean chip, boolean ferido, String raca, String nome, LocalDate dataNasc, double peso  ){
        this.podeAdotar =podeAdotar;
        this.chip = chip;
        this.ferido = ferido;
        this.raca = raca;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.peso = peso;

    }

    public Boolean getPodeAdotar() {
        return podeAdotar;
    }

    public void setPodeAdotar(Boolean podeAdotar) {
        this.podeAdotar = podeAdotar;
    }

    public Boolean getChip() {
        return chip;
    }

    public void setChip(Boolean chip) {
        this.chip = chip;
    }

    public Boolean getFerido() {
        return ferido;
    }

    public void setFerido(Boolean ferido) {
        this.ferido = ferido;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDate dataNasc) {
        this.dataNasc = dataNasc;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }
    public long validarIdade() {
        return ChronoUnit.YEARS.between(this.getDataNasc(),LocalDate.now());
    }
    public String validarChip(){
        if (this.getChip()){
            return "Sim";
        } return "Não";
    }
    public String validarAdocao(){
        if((!this.getFerido())&&(this.getPeso() > 5)) {
            return "Pode ser adotado!";
        } return "Não pode ser adotado!";
    }
}
