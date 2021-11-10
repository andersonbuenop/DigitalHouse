package aula05;

public class Mesa {
    public static void main(String[] args) {

        UsuarioJogo user1 = new UsuarioJogo("Anderson","And");
        user1.aumentarPontuacao(5);
        user1.subirNivel(10);
        System.out.println("Nome: " + user1.getNome()+" Nickname: "+user1.getNickname()+"\nPontos: "+user1.getPontuacao()+" Bonus: "+user1.getNivel());

        UsuarioJogo user2 = new UsuarioJogo("Teste","Testando");
        user2.aumentarPontuacao(10);
        user2.subirNivel(99);
        System.out.println("Nome: " + user2.getNome()+" Nickname: "+user2.getNickname()+"\nPontos: "+user2.getPontuacao()+" Bonus: "+user2.getNivel());

    }
}
