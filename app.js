function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document. createElement('article');
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao_conteudo">
                    <h3>CATEGORIA</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>PERGUNTA - escrever a pergunta</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        RESPOSTA - escrever e reposta
                    </div>

                </div>
}