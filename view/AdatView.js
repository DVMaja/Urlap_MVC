import TablazatView from "./tablazat/TablazatView.js";

class AdatView {
    #lista = {};

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        console.log(this.#lista);

        this.tablazatView = new TablazatView(this.#lista, this.szuloElem);
    }

}
export default AdatView;