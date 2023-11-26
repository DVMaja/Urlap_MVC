import HeaderView from "./HeaderView.js";
import FooterView from "./FooterView.js";

class EgyKartyaView {

    #adat = {};

    constructor(szuloElem, adat) {
        this.#adat = adat;
        this.kartyaElem = szuloElem;
        //console.log(this.kartyaElem);
        //console.log(this.#adat);
        this.#kartya();

    }

    #kartya() {
        let txt = "";
        txt += `<div class="card  col-md-3">`;
        //console.log(this.#adat);
        for (const key in this.#adat) {
            const element = this.#adat[key];
            if (key == "id") {
                this.headerElem = new HeaderView(this.kartyaElem, element);
                //console.log(this.headerElem.header())
                txt += this.headerElem.header();
            } else {
                txt += `<div class="card-body"><p><span id="S${key}"> ${element} </span></p></div>`;
            }
        }
        txt += "</div>";
        this.kartyaElem.append(txt);
    }
}

export default EgyKartyaView;