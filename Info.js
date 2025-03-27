

export default class Info{
    #szuloElem

    constructor(szuloElem){
        this.#szuloElem = szuloElem
        this.megjelenit();
    }

    megjelenit(szam){
        this.#szuloElem = document.getElementsByClassName("szamlalo");
        let text = `
                <p>A lekapcsolt lámpák száma/p>
                <p>${szam}/p>`
        this.#szuloElem.innerHTML(text);
    }

}