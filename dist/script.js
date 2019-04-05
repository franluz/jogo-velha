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
    }
    iniciaElementos() {
        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click',(event)=>{
            this.realizeJogada(event)
            this.render()
        });
    }
    realizeJogada(event) {
        // event.target.innerHTML=this.turno?'X':'O';
        const id = event.target.dataset.id;
        this.jogada[id] = this.turno ? 'X' : 'O';

        this.turno = !this.turno;
    }
    render() {
        const velhaElenment= document.querySelectorAll('[data-id]');
        for(let i=0;i<9;i++){
            velhaElenment[i].innerHTML = this.jogada[i] == 0 ? "" : this.jogada[i];
        }
    }
}