class UrlapView {
    #leiro;
    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        console.log(this.formElem);

        this.#urlapLetrehoz();

    }

    #urlapLetrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    this.#textElem(key);
                    break;
                case "number":
                    this.#numberElem(key);
                    break;
                default:
                // code block
            }
        }
        let txt = `<input type="submit" id="submit" value="OK">`;
        console.log(txt);
        this.formElem.append(txt);
    }

    #textElem(key) {
        let txt = "";
        txt += `
        <div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
            <input type="${this.#leiro[key].type}" class="form-control" 
                id="${key}" name="${key}"
                placeholder="${this.#leiro[key].placeholder}"
                value="${this.#leiro[key].value}" 
                pattern="${this.#leiro[key].regex}">

                <div class="valid lathatosag">OK</div>
                <div class="invalid lathatosag">${this.#leiro[key].valid}</div>
        </div>`;
        this.formElem.append(txt);

    }
    #numberElem(key) {
        let txt = "";
        txt += `
        <div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
            <input type="${this.#leiro[key].type}" class="form-control" 
                id="${key}" name="${key}"
                placeholder="${this.#leiro[key].placeholder}"
                value="${this.#leiro[key].value}" 
                min="${this.#leiro[key].regex.min}"
                max="${this.#leiro[key].regex.max}">
        </div>`;
        this.formElem.append(txt);
    }

}
export default UrlapView;