class HeaderView {

    #adat = {};

    constructor(szuloElem, adat) {
        this.#adat = adat;
        this.kartyaElem = szuloElem;
        //console.log(this.kartyaElem);
        //console.log(this.#adat);
        this.header();
    }

    header() {
        let txt = `<div class="card-header text-bg-success"><h2><span id="S${this.adat}"> ${this.#adat} </span></h2></div>`;
        //this.kartyaElem.append(txt);
        return txt;
    }
}

export default HeaderView;