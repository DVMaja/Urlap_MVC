class TextUrlapElem {
    #key;
    #elemLeiro = {};
    #valid = false;
    #ertek = "";

    constructor(key, elemLeiro, szuloElem) {
        this.#key = key;
        this.#elemLeiro = elemLeiro;
        this.formElem = szuloElem;
        this.#textElem();
        this.inputElem = $(`#${this.#key}`);
        //console.log(this.inputElem);

        //a kettő megegyezik.
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        console.log(this.validElem);
        /* this.validElem = $(".valid:last");
        console.log(this.validElem); */
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        this.inputElem.on("keyup", () => {
            this.#esemenyTrigger("validalas");
            //a value-ját  át ezzel kérjük le
            this.#ertek = this.inputElem.val();
            let reg = this.#elemLeiro.regex; //szöveg jelenleg, regexet kell csinálni
            let regReg = new RegExp(reg);   //itt alakítjug regex-é 
            //console.log(regReg.test(this.#ertek));

            if (regReg.test(this.#ertek)) {
                this.#valid = true;
                this.validElem.removeClass("lathatosag");
                this.invalidElem.addClass("lathatosag");

            } else {
                this.invalidElem.removeClass("lathatosag");
                this.#valid = false;
                this.validElem.addClass("lathatosag");
            }
        })
    }
    get ertek() {
        return this.#ertek;
    }

    get valid() {
        return this.#valid;
    }

    get key() {
        return this.#key;
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
                >

                <div class="valid lathatosag">OK</div>
                <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
        </div>`;
        this.formElem.append(txt);
    }

    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent("validalas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default TextUrlapElem;