let listaDeNumerosSorteados = [];
let numeroLimite = '10';
let NumeroSecreto = gerarNumeroAleatório();
let Tentativas = 1;
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});
}
exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10');

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == NumeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = Tentativas > 1 ? 'tentativas': 'tentativa';
        let mensageTentativas = `voce descobriu o numero secreto com ${Tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensageTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > NumeroSecreto) {
            exibirTextoNaTela('p','o numero secreto é menor');
            }else{
                    exibirTextoNaTela('p','o numero secreto é maior');
                } 
                Tentativas++;
                limparCampo();
            }
        };
        function limparCampo() {
            chute = document.querySelector ('input');
            chute.value = '';
        }
function gerarNumeroAleatório() {
   let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatório();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    }
function reiniciarJogo(){
    NumeroSecreto = gerarNumeroAleatório();
    limparCampo();
    Tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
    };