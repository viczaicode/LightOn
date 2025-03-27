import Info from "./Info.js";

export class Lampa{
    #allapot
    #id
    #szuloElem
    #elem
    constructor(id, allapot, szuloElem){
        this.#id = id
        this.#allapot = allapot
        this.#szuloElem = szuloElem
        this.megjelenit();
        this.#elem = document.querySelector(".gombl:last-child")
        console.log(this.#elem);
        this.#elem.addEventListener("click", ()=> {
            console.log(this.#allapot);
            if (this.#allapot === false) {
                this.kattintasTrigger("lepes")
            }
        });
    }
    megjelenit(){
        let txt = ""
        if(this.#allapot === true){
            txt += `<div id="${this.#id}" class="gombl gombok1"></div>`
        }else{
            txt += `<div id="${this.#id}" class="gombl gombok0"></div>`
        }
        this.#szuloElem.insertAdjacentHTML("beforeend", txt)
    }

    kattintasTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        const f = new CustomEvent(esemenyNev, {detail:this.#id-1})
        const g = new CustomEvent(esemenyNev, {detail:this.#id+1})
        const h = new CustomEvent(esemenyNev, {detail:this.#id+3})
        const i = new CustomEvent(esemenyNev, {detail:this.#id-3})
        window.dispatchEvent(e);
        window.dispatchEvent(f);
        window.dispatchEvent(g);
        window.dispatchEvent(h);
        window.dispatchEvent(i);

    }
}