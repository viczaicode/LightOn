export class Lampa{
    #allapot
    #id
    #szuloElem
    constructor(id, allapot, szuloElem){
        this.#id = id
        this.#allapot = allapot
        this.#szuloElem = szuloElem
        this.megjelenit();
    }
    megjelenit(){
        let txt = ""
        if(this.#allapot === true){
            txt += `<div id="${this.#id}" class="gombok1"></div>`
        }else{
            txt += `<div id="${this.#id}" class="gombok0"></div>`
        }
        this.#szuloElem.append(txt)
        this.#szuloElem.find(`#${this.#id}`).on("click", () => this.kattintasTrigger());
    }
    setAllapot(){
        this.#allapot = true; 
        this.szinBeallit();
    }
    szinBeallit(){
        const elem = this.#szuloElem.find(`#${this.#id}`);
        if(this.#allapot){
            elem.removeClass("gombok0").addClass("gombok1");
        } else {
            elem.removeClass("gombok1").addClass("gombok0");
        }
    }
    kattintasTrigger(){
        if(!this.#allapot){ 
            this.setAllapot();
        }
    }
}