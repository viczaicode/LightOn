import { Lampa } from "./Lampa.js";

export class JatekTer {

     #allapotLista
     #meret
     #szuloElem;

     constructor(szuloElem) {
        this.#allapotLista = [];
        this.#meret = 3;
        this.setAllapotLista();
        this.#szuloElem = szuloElem;
        this.megjelenit();
        window.addEventListener("lepes", (event)=>{
            let id = event.detail;
            this.lepes(id);
            this.#szuloElem.innerHTML = ``;
            this.megjelenit();
        });
        this.ujJatekGomb();

     }

    setAllapotLista(){
        for(let i = 0; i<this.#meret*this.#meret; i++){
            if(Math.random() < .2){
                this.#allapotLista[i] = true
            }else{
                this.#allapotLista[i] = false
            }
        }
    }

    megjelenit() {
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const LAMPA = new Lampa(index, this.#allapotLista[index], document.getElementById("jatekter"));
            
            
        }
    }

    lepes(id) {
        if (this.#allapotLista[id] === false) {
            this.#allapotLista[id] = true;
        }
        
    }



    ujJatekGomb(){
        let gomb = document.querySelector(".ujJatek")
        gomb.addEventListener("click", () => this.ujJatek());
    }
    ujJatek(){
        this.#szuloElem.innerHTML = ``;
        this.setAllapotLista();
        this.megjelenit();
    }

}