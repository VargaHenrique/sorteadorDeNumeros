function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = []; 
    let numero; 

    for(let i = 0; i<quantidade; i++){
     numero = obterNumeroAleatorio(de, ate);
     
     //Enquanto, Variavel Sorteados, você já tem incluido  esse número? Enquando der TRUE, entraremos no loop e
    //pedimos para ele fazer um novo, Pq se der verdadeiro,
    //significa que ele já tem esse número, e não pode ser incluido novamente.
    //.Includes vê se já tem o elemento no array e devolve um boolean TRUE ou FALSE.
     while(sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
     }
     
     sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//ÉFácil de entender o funcionamento da função, apenas parece complicado de fazer a mesma 
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
     botao.classList.remove('container__botao-desabilitado');
     botao.classList.add('container-botao')
    }else{
        botao.classList.remove('container-botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Função como o nome já diz: reinicia tudo esvaziando os inputs para inserir número e retornando a mensagem de "Números sorteados:  nenhum até agora".  
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}