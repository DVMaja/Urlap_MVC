class FejlecView {

    #adat = {};

    constructor(adat, szuloElem) {
        this.#adat = adat;
        console.log(adat);
        this.TablaElem = szuloElem;
        this.#sor();
        this.FejlecElem = this.TablaElem.children("tr:last-child");
    }

    #sor() {
        let txt = "";
        txt += "<thead><tr>";

        for (const key in this.#adat) {
            const element = this.#adat[key];
            console.log(element);

            txt += `<th>${element.megj}</th>`;

        }
        txt += "</tr></thead>";
        this.TablaElem.append(txt);
    }


}

export default FejlecView;