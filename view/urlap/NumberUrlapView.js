class NumberUrlap {
    #key
    elemleiro = {};
    #valid = false
    #ertek = ""
    constructor(key, elemleiro, szuloelem) {
        this.#key = key
        this.elemleiro = elemleiro
        this.formelem = szuloelem
        this.#textElem()
        this.inputElem = $(`#${this.#key}`)

        this.validElem = this.formelem.children("div:last-child").children(".valid")

        this.invalidElem = this.formelem.children("div:last-child").children(".invalid")

        this.#valid = false

        this.inputElem.on("keyup", () => {
            this.#ertek = this.inputElem.val()
            let regex = this.elemleiro.regex
            let regReg = new RegExp(regex)
            console.log(regReg.test(this.#ertek))
            if (regReg.test(this.#ertek)) {
                this.#valid = true
                this.validElem.removeClass("lathato")
                this.invalidElem.addClass("lathato")
            }
            else {
                this.#valid = false
                this.invalidElem.removeClass("lathato")
                this.validElem.addClass("lathato")
            }

        })
    }
    get ertek() {
        return this.#ertek
    }
    get valid() {

        return this.#valid
    }
    get key() {

        return this.#key
    }
    #textElem() {
        let txt = ""

        txt += `
        <div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">${this.elemleiro.megj}</label>
        <input type="${this.elemleiro.type}" class="form-control" id="${this.#key}" 
        placeholder="${this.elemleiro.placeholder}" name="${this.#key}"
        value="${this.elemleiro.value}"
      pattern="${this.elemleiro.regex}"
        
        ">
        <div class="valid lathato">OK</div>
        <div class="invalid lathato">${this.elemleiro.valid}</div>
    
      </div>
        `
        this.formelem.append(txt)


    }
}
export default NumberUrlap;