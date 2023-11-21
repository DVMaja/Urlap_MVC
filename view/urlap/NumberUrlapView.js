class NumberUrlap {
    #key
    elemleiro = {};
    #valid;
    #ertek;
    constructor(key, elemleiro, szuloelem) {
        //console.log('Látható vagyok NUmberUrlap');
        this.#valid;
        this.#key = key;
        this.elemleiro = elemleiro;
        this.formelem = szuloelem;
        this.#textElem();
       
        this.inputElem = $(`#${this.#key}`);
        this.#ertek = this.inputElem.val();
        //console.log("this.#ertek "+ this.#ertek)
        this.validElem = this.formelem.children("div:last-child").children(".valid");
        this.invalidElem = this.formelem.children("div:last-child").children(".invalid");        

        this.inputElem.on("keyup", () => {
            this.#esemenyTrigger("validalas");
            this.#ertek = this.inputElem.val();
            console.log("this.#ertek "+ this.#ertek)
            //console.log("elemleiro" + elemleiro)
            let reg = this.elemleiro.regex;
            //console.log("reg "+reg);
            let regReg = new RegExp(reg);
            //console.log("regReg: " + regReg);

            console.log(regReg.test(this.#ertek));
            if (regReg.test(this.#ertek)) {
                this.#valid = true;
                this.validElem.removeClass("lathatosag");
                this.invalidElem.addClass("lathatosag");
            }
            else {
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
        <label for="${this.#key}" class="form-label">${this.elemleiro.megj}</label>
        <input type="${this.elemleiro.type}" class="form-control" id="${this.#key}" 
        placeholder="${this.elemleiro.placeholder}" name="${this.#key}"
        value="${this.elemleiro.value}"
      pattern="${this.elemleiro.regex}"        
        ">
        <div class="valid lathatosag">OK</div>
        <div class="invalid lathatosag">${this.elemleiro.valid}</div>    
      </div>
        `;
        this.formelem.append(txt);
    }

    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent("validalas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default NumberUrlap;