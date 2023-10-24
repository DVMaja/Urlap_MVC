class TablazatSorView {

  #adat = {};

  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.TablaElem = szuloElem;

    this.#sor();
    this.sorElem = this.TablaElem.children("tr:last-child");
  }

  #sor() {
    let txt = "";

    txt += "<tbody><tr>";

    for (const key in this.#adat) {
      const element = this.#adat[key];


      txt += `<td>${element}</td>`;

    }
    txt += `<td><span class="kesz">✔️</span>
                <span class="megse">❌</span>
                <span class="torol">🗑️</span></td>`;

    txt += "</tr></tbody>";
    this.TablaElem.append(txt);
  }

  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }

}

export default TablazatSorView;