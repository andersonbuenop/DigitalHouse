

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

    let idContent = 1;
    var cardsObj = new Object();
    
    cardsObj.title = tituloContent;
    cardsObj.url = urlContent;
    cardsObj.descricao = descricaoContent;
    cardsObj.id = idContent;
    console.log(cardsObj);


}