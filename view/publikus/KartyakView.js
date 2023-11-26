import EgyKartyaView from "./EgyKartyaView.js";
import { urlapleiro } from "../../modell/adatokLeiro.js";

class KartyakView {
    #list = {};

    constructor(list, szuloElem) {
        this.#list = list;
        //console.log(this.#list);
        szuloElem.append(`<div class="row">`);
        //console.log(szuloElem);
        this.kartyaElem = szuloElem.children(`div`);
        this.kartyakViewes();
    }

    kartyakViewes() {
        let txt = "";
        this.#list.forEach((elem) => {

            this.kartyaElem.append(txt);
            new EgyKartyaView(this.kartyaElem, elem);

        });
    }
}

export default KartyakView;