import NumberUrlap from "./NumberUrlapView.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
    #leiro = {};
    #urlapElemList = [];
    #valid = true;
    #urlapAdatok = {};
    #kimeno = {};

    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapAdatok;
        this.#kimeno = [];
        //this.#kimenoAdatok = this.#urlapAdatok;
        //console.log(this.formElem);

        this.#urlapLetrehoz();
        this.submitElem = $("#submitGomb");

        this.submitElem.on("click", (evet) => {
            console.log("submitGomb");
            evet.preventDefault();
            this.#valid = true;
            /**ha valid a form akkor adja vissza a form értékeit. */
            this.#urlapElemList.forEach((elem) => {
                //console.log(elem.valid);
                this.#valid = this.#valid && elem.valid;
                //console.log(this.#valid);
            })
            
            if (this.#valid) {
                console.log("Valid az űrlap!");
                /**Össze ell szedni az adatokat */
                this.#urlapElemList.forEach((elem) => {
                    let ertek = elem.ertek;
                    let kulcs = elem.key;

                    this.#urlapAdatok[kulcs] = ertek;
                    this.#kimeno = this.#urlapAdatok;                   

                    //console.log(this.#urlapAdatok);//itt vannak összeszedve
                    /**kontrollerben írja ki az adatokat */
                })
                    console.log(this.#kimeno);
                    this.#setUrlapAdatok(); 

            } else {
                console.log("Nem valid az űrlap!");
            }
            this.#esemenyTrigger("validalas");
        })  
         
    }
    #setUrlapAdatok(){        
        this.#urlapAdatok = this.#kimeno;
        console.log(this.#urlapAdatok);
    }

    getUrlapAdatok() { 
        //console.log(this.#urlapAdatok)   ;    
        return this.#urlapAdatok;
    }

    #urlapLetrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    //this.#textElem(key);
                    //console.log(this.#leiro[key]);
                    this.#urlapElemList.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                case "number":
                    //console.log(this.#leiro[key]);
                    //this.#numberElem(key);
                    this.#urlapElemList.push(new NumberUrlap(key, this.#leiro[key], this.formElem));
                    break;
                    case "id":                   
                    break;
                default:
                // code block
            }
        }
        let txt = `<input type="submit" id="submitGomb" value="OK">`;
        //console.log(txt);
        this.formElem.append(txt);
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemenyem)
      }

}
export default UrlapView;