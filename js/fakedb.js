
var db = {
    "data":  [
        {
        "id": 1,
        "title": "Praça da Liberdade",
        "tipo": "publico",
        "especial": true,
        "pago": true,
        "longitude": "-43.938078",
        "latitude": "-19.932482"
                                },
    {
        "id": 2,
        "title": "Rua Ricardo Almeida, Dentro do restaurante Santo Augusto",
        "tipo": "publico",
        "especial": true,
        "pago": true,
        "longitude": "-43.937169",
        "latitude": "-19.933168"
                                },
    {
        "id": 3,
        "title": "Rua Marlene Penha, lanchonete Sinhazinha",
        "tipo": "publico",
        "especial": false,
        "pago": true,
        "longitude": "-43.941105",
        "latitude": "-19.933869"
                                },
    {
        "id": 4,
        "title": "Rua Alberto Magalhães, Dentro da Lojas rede",
        "tipo": "publico",
        "especial": false,
        "pago": false,
        "longitude": "-43.934410",
        "latitude": "-19.934071"
                                },
    {
        "id": 5,
        "title": "Rua pedro paulo, Na calçada",
        "tipo": "publico",
        "especial": false,
        "pago": true,
        "longitude": "-43.937682",
        "latitude": "-19.927182"
                                },
    {
        "id": 6,
        "title": "Rua 18 de julho, Dentro do Shopping BH",
        "tipo": "publico",
        "especial": false,
        "pago": false,
        "longitude": "-43.932951",
        "latitude": "-19.927152"
                                }
                            ];

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbFake
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('.msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id;
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
    db.data.push(novobanheiro);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = id-1;

    // Altera os dados do objeto no array
       
        db.data[index].title = contato.title,
        db.data[index].tipo = contato.tipo
        db.data[index].especial = contato.especial,
        db.data[index].pago = contato.pago,
        db.data[index].foto = contato.foto,
        db.data[index].longitude = contato.longitude,
        db.data[index].latitude = contato.latitude,

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}