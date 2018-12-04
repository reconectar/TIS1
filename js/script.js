/* Insira seu código em javascript abaixo */

console.log('Olá TIS!');

// Caso exista no Local Storage, recupera os dados salvos
var dbb = JSON.parse(localStorage.getItem('dbb'));
if (!dbb) {
    dbb = json;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('.msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = dbb[dbb.length - 1].id;
    ++novoId
    let novobanheiro = {

        "id": novoId,
        "title": contato.title,
        "tipo": contato.tipo,
        "especial": contato.especial,
        "pago": contato.pago,
        "longitude": contato.longitude,
        "latitude": contato.latitude
    };

    // Insere o novo objeto no array
    dbb.push(novobanheiro);
    displayMessage("Banheiro inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbb', JSON.stringify(dbb));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = id - 1;

    // Altera os dados do objeto no array

    dbb[index].title = contato.title,
        dbb[index].tipo = contato.tipo
    dbb[index].especial = contato.especial,
        dbb[index].pago = contato.pago,
        dbb[index].longitude = contato.longitude,
        dbb[index].latitude = contato.latitude,

        displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbb', JSON.stringify(dbb));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    dbb = dbb.filter(function (element) {
        return element.id != id
    });

    displayMessage("Banheiro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbb', JSON.stringify(dbb));
}

//Codigo dos filtros abaixo
