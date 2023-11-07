import TablazatSorView from "./TablazatSorView.js";
import FejlecView from "./FejlecView.js";
import { urlapleiro } from "../../modell/adatokLeiro.js";

class TablazatView {
    #list = {};

    constructor(list, szuloElem) {        
        this.#list = list;

        szuloElem.append(`<table class="table table-striped table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.TablazatViewes();
    }

    TablazatViewes() {
        //let txt = "";
        new FejlecView(urlapleiro, this.tablaElem);
        //txt += "<tbody>";
        this.#list.forEach((elem, index) => {
            new TablazatSorView(elem, this.tablaElem, index);
        });
        //txt += "</tbody>";
        
    }

    #tablazatLetrehoz() {
        for (const key in this.#list) {
            switch (this.#list[key].type) {
                case "sor":
                    new TablazatSorView(elem, this.tablaElem);
                    break;
                case "fejlec":

                    break;
                default:
                // code block
            }
        }
        let txt = `<input type="submit" id="submit" value="OK">`;

        this.formElem.append(txt);
    }

}
export default TablazatView;