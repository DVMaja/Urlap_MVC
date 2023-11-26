class HeaderView {

    #adat = {};

    constructor(szuloElem, adat) {
        this.#adat = adat;
        this.kartyaElem = szuloElem;
        //console.log(this.kartyaElem);
        //console.log(this.#adat);
        this.#header();
    }

    #header() {
        let txt = `<div class="card-footer"><span id="S${key}"> ${element} </span></div>`;
        this.kartyaElem.append(txt);
    }
}

export default HeaderView;