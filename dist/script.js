window.onload = () => {
    new JogoDaVelha();
}
class JogoDaVelha {
    constructor() {
        this.iniciaElementos();
        this.init();


    }
    init() {

        this.turno = true;
        this.jogada = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.fim = false;
        this.vitoria[448, 56, 7, 292, 146, 73, 273, 84];
    }
    iniciaElementos() {
        this.jogadorX = document.querySelector('#jogador-x')

        this.jogadorO = document.querySelector('#jogador-o')

        this.limparlocal = document.querySelector('#limpar');
        this.limparlocal.addEventListener('click', this.limpaLocal.bind(this));

        this.salvarLocal = document.querySelector('#salva-local');
        this.salvarLocal.addEventListener('click', this.salvaLocal.bind(this));


        this.carregarLocal = document.querySelector('#carrega-local');
        this.carregarLocal.addEventListener('click', this.carregaLocal.bind(this));

        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click', (event) => {
            this.realizeJogada(event)
            this.render()
        });
    }
    carregaLocal() {
        const dados = JSON.parse(localStorage.getItem('jogo'));
        this.jogadorO.value = dados.jogadorO;
        this.jogadorX.value = dados.jogadorX;
        this.jogada = dados.jogada;
        this.render();

    }
    limpaLocal() {
        localStorage.removeItem('jogo');
        this.jogadorO.value = '';
        this.jogadorX.value = '';
        this.init();
        this.render();
    }
    salvaLocal() {

        const dados = {
            jogadorX: this.jogadorX.value,
            jogadorO: this.jogadorO.value,
            jogada: this.jogada,

        }
        localStorage.setItem('jogo', JSON.stringify(dados));
    }
    realizeJogada(event) {
        const id = event.target.dataset.id;
        if (this.fim) {
            alert('fim de jogo');
            return;
        }
        this.jogada[id] = this.turno ? 'X' : 'O';

        this.turno = !this.turno;
    }
    render() {
        const resultado = this.verificaVitoria();
        if (resultado == 'X' || resultado == 'O') {
            this.fim = true;
            alert('Jogador ' + resultado + ' venceu!');
        }
        const velhaElenment = document.querySelectorAll('[data-id]');
        for (let i = 0; i < 9; i++) {
            velhaElenment[i].innerHTML = this.jogada[i] == 0 ? "" : this.jogada[i];
        }
    }
    verificaVitoria(){
        
    }
}