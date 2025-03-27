import { Lampa } from "./Lampa.js";

export class JatekTer {

     #allapotLista
     #meret

     constructor() {
        this.#allapotLista = [];
        this.#meret = 3;
        this.setAllapotLista();
        this.megjelenit();

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
            const Lampaa = new Lampa(this.#allapotLista[index], index, this.#allapotLista, document.getElementById("jatekter"));
            
            
        }
    }







}