package aula05;

public class UsuarioJogo {

    private String nome;
    private String nickname;
    private int pontuacao;
    private int nivel;

    public UsuarioJogo(String nome, String nick) {
        this.nome = nome;
        this.nickname = nick;
        this.pontuacao = 0;
        this.nivel = 0;

    }

    public void aumentarPontuacao(int pontuacao){
        this.pontuacao = pontuacao;
    }

    public void subirNivel(int nivel){
        this.nivel = nivel;
    }

    public void bonus(int valor){
        this.setPontuacao(valor);

    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public int setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
        return pontuacao;
    }

    public int getNivel() {
        return nivel;
    }

    public int setNivel(int nivel) {
        this.nivel = nivel;
        return nivel;
    }
}
