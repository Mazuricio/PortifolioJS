var formulario = document.querySelector("form")


formulario.addEventListener("submit", function(e){
    // Previne de recarregar pagina
    e.preventDefault()
    //url da pesquisa 
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    // valor do input 
    let nome = document.getElementById("name")
    // concatena pra gerar a url
    urlForm = urlForm + nome.value
    // corrige caso tenha alguma letra maiscula
    urlForm = urlForm.toLocaleLowerCase()
    // Id content
    let resposta = document.getElementById("content")
    // ID imgPokemon
    let imagem = document.getElementById("imgPokemon")
    // Resposta HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            p_nome = "Nome: " + maiscula(data.name) + "<br>"
            p_tipo = "Tipo: " + maiscula(data.types[0].type.name) + "<br>"
            p_habilidade1 = "Habilidade 1: " + maiscula(data.abilities[0].ability.name) + "<br>"
            p_habilidade2 = "Habilidade 2: " + maiscula(data.abilities[1].ability.name) + "<br>"
            html = p_nome + p_tipo + p_habilidade1 + p_habilidade2
            
            resposta.innerHTML = html
            let img_frente = data.sprites.front_default
            let img_costas = data.sprites.back_default
            imagem.innerHTML = `<img src="${img_frente}"><img src="${img_costas}">`
        })
        .catch(function(err){
            console.log(err)
            if(err="unexpected character at line 1 column 1 of the JSON data"){
                html = "Pokémon não encontrado ;("
            } else {
                html = "Erro: " + err
            }
            resposta.innerHTML = html
        })


});

function maiscula(val){
    return val[0].toUpperCase() + val.substr(1)
}