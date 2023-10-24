import NumberUrlap from "./NumberUrlapView.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
    #leiro = {};
    #urlapElemList = [];
    #valid = true;
    #urlapAdatok = {};

    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        console.log(this.formElem);

        this.#urlapLetrehoz();
        this.submitElem = $("#submit");
        this.submitElem.on("click", (evet) => { 
            evet.preventDefault();
            this.#valid = true;
            /**ha valid a form akkor adja vissza a form értékeit. */
            this.#urlapElemList.forEach((elem) => {
                console.log(elem.valid);
                this.#valid = this.#valid && elem.valid;
                console.log(this.#valid);

            })
            if (this.#valid) {
                console.log("Valid az űrlap!");
                /**Össze ell szedni az adatokat */
                this.#urlapElemList.forEach((elem) => {
                    let ertek = elem.ertek;
                    let kulcs = elem.key;

                    this.#urlapAdatok[kulcs] = ertek;

                    console.log(this.#urlapAdatok);
                    /**kontrollerben írja ki az adatokat */
                })

            } else {
                console.log("Nem valid az űrlap!");
            }
        })
    }

    #urlapLetrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    //this.#textElem(key);
                    this.#urlapElemList.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                case "number":
                    //this.#numberElem(key);
                    new NumberUrlap(key, this.#leiro[key], this.formElem);
                    break;
                default:
                // code block
            }
        }
        let txt = `<input type="submit" id="submit" value="OK">`;
        //console.log(txt);
        this.formElem.append(txt);
    }

}
export default UrlapView;