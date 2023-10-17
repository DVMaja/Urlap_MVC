class TextUrlapElem {
    #key;
    #elemLeiro;

    constructor(key, elemLeiro, szuloElem) {
        this.#key = key;
        this.#elemLeiro = elemLeiro;        
        this.formElem = szuloElem;
        this.#textElem();

    }

    #textElem() {
        let txt = "";
        txt += `
        <div class="mb-3 mt-3">
            <label for="${this.#key}" class="form-label">${this.#elemLeiro.megj}</label>
            <input type="${this.#elemLeiro.type}" class="form-control" 
                id="${this.#key}" name="${this.#key}"
                placeholder="${this.#elemLeiro.placeholder}"
                value="${this.#elemLeiro.value}" 
                pattern="${this.#elemLeiro.regex}">

                <div class="valid lathatosag">OK</div>
                <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
        </div>`;
        this.formElem.append(txt);

    }
}
export default TextUrlapElem;