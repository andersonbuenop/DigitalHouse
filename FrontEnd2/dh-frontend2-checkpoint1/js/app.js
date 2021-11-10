let btnEnvia = document.querySelector("#enviar");

btnEnvia.addEventListener('click', (evt) => {
    evt.preventDefault();

    criarCards();

})


function criarCards() {

    //pegar conteudo do campo Titulo
    let tituloContent = document.querySelector('#titulo').value;
    //pegar conteudo do campo Url da imagem
    let urlContent = document.querySelector('#url').value;
    //pegar conteudo do campo Descrição
    let descricaoContent = document.querySelector('#descricao').value;


    //criar card
    let card = document.createElement("div");
    card.setAttribute("class", "card text-center text-white bg-dark");

    //cria botão para deletar card
    let btnDeletar = document.createElement("botton");
    btnDeletar.setAttribute("type", "botton");
    btnDeletar.setAttribute("class", "btn-close");

    //cria imagem do card
    let imgUrl = document.createElement("img");
    imgUrl.setAttribute("src", urlContent);
    imgUrl.setAttribute("class", "card-img-top");

    //cria body do card
    let divBody = document.createElement("div");
    divBody.setAttribute("class", "card-body");

    //cria titulo no card
    let titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    titulo.innerText = tituloContent;

    //criar comentario no card
    let comentario = document.createElement("p");
    comentario.setAttribute("class", "card-text");
    comentario.innerText = descricaoContent;

    //adcionar o card na div de id=cards
    let divCards = document.getElementById("cards");
    divCards.appendChild(card);

    //adcionar a botao de deletar no card
    card.appendChild(btnDeletar);
    btnDeletar = 1;

    //adcionar a imagem no card
    card.appendChild(imgUrl);

    //adcionar body do card
    card.appendChild(divBody);

    //adcionar titulo ao card
    divBody.appendChild(titulo);

    //adcionar comentario ao card
    divBody.appendChild(comentario);
}