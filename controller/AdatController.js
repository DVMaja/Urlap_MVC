import AdatModell from "../modell/adat/AdatModell.js";
import AdatView from "../view/tablazat/AdatView.js";
import DataService from "../modell/adat/DataService.js";
import HibaView from "../view/tablazat/HibaView.js";

class AdatController {

    constructor() {
        //console.log("Controller Const");
        this.dataService = new DataService();
        this.dataService.getdata("../modell/adat.json", this.adatokMegj, this.hibaMegj);   //ide kéne beírni azt a végpontot amit nem tudtunk előállítani
        //nem kell a gömbölyű zárójelk mert nem azonnal akarjuk megjeleníteni ez egy callback fgvény
        //new  AdatModell();
        //new AdatView();      

    }

    adatokMegj(lista) {
        //console.log(lista);
        new AdatView(lista, $(".lista"));

    }

    hibaMegj(error) {
        new HibaView(error, $(".lista"));
    }
}
export default AdatController;