class TablazatSorView {

  #adat = {};
  #index;

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#index = index;
    this.TablaElem = szuloElem;

    this.#sor();
    this.sorElem = this.TablaElem.children("tbody").children("tr:last-child");

    this.megseElem = this.sorElem.children("td").children(".megse");
    this.torolElem = this.sorElem.children("td").children(".torol");
    this.pipaElem = this.sorElem.children("td").children(".kesz");

    console.log(this.sorElem);

    //this.megseElem.css("display", "none");

    this.pipaElem.on("click", () => {
      this.sorElem.css('background-color', 'green');
      this.pipaElem.css("display", "none");
      this.megseElem.css("display", "inline");
    })

    this.megseElem.on("click", () => {
      this.sorElem.css('background-color', 'transparent');
      this.megseElem.css("display", "none");
      this.pipaElem.css("display", "inline");
    })

    this.torolElem.on("click", () => {
      this.sorElem.remove();
      this.sorElem.css('background-color', 'transparent');
      this.esemenyTrigger("torol");
    })
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

  #hatterszin(szin, keszElemAllapot, megseElemAllapot) {
    this.sorElem.css("background-color", szin);
    this.keszElem.css("display", keszElemAllapot);
    this.megseElem.css("display", megseElemAllapot);
  }

  esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }

}

export default TablazatSorView;