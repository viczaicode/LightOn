import { Lampa } from "./Lampa.js";


export class JatekTer {
     #szam
     #allapotLista
     #meret
     #szuloElem;

     constructor(szuloElem) {
        this.#allapotLista = [];
        this.#meret = 3;
        this.#szam = 0;
        this.setAllapotLista();
        this.#szuloElem = szuloElem;
        this.megjelenit();
        window.addEventListener("lepes", (event)=>{
            let id = event.detail;
            this.lepes(id);
            this.#szuloElem.innerHTML = ``;
            this.megjelenit();
            this.szamlaloMegjelenit();
        });
        this.ujJatekGomb();
        this.szamlaloMegjelenit();
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

    szamlaloMegjelenit(){
        const infoElem = document.getElementById("szamlalo")
        infoElem.innerHTML = ``;
        this.#szam = 0;
        for (let index = 0; index < this.#allapotLista.length; index++) {
            if (this.#allapotLista[index] == false) {
                this.#szam++;
            }
        }
        let text = `
                <p>A lekapcsolt lámpák száma</p>
                <p>${this.#szam}</p>`
        infoElem.insertAdjacentHTML("beforeend", text)
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