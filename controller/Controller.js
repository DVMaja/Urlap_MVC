import UrlapModell from "../modell/urlap/UrlapModell.js";
import DataService from "../modell/adat/DataService.js";
import UrlapView from "../view/urlap/UrlapView.js";
import AdatView from "../view/tablazat/AdatView.js";
import HibaView from "../view/tablazat/HibaView.js";
import KartyakView from "../view/publikus/KartyakView.js";

class Controller {

    constructor() {
        this.urlapModell = new UrlapModell();
        this.dataService = new DataService();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModell.leiro);
        
        //../modell/adat.json --eredeti elérés, ezzel működik
        //http://localhost:8000/forms
        this.dataService.getdata("api/forms", this.adatokMegj, this.hibaMegj);
        

        //ide kéne beírni azt a végpontot amit nem tudtunk előállítani
        //nem kell a gömbölyű zárójelk mert nem azonnal akarjuk megjeleníteni ez egy callback fügvény
        /* this.dataService.putData("api/forms/2", {            
        }) */

        $(window).on("validalas", (event) => {
            this.dataService.postData("api/forms", this.urlapView.getUrlapAdatok());
            //console.log("általam felvitt adatok: " + this.urlapView.getUrlapAdatok());
            this.urlapView.getUrlapAdatok();

            //innen küldi majd az adatbázisba
        })
        //console.log(this.urlapModell.getLeiro());
        //ugyanaz a kettő, csak a másodiknál nem fog kelleni a zárójel. 
        //mastantól a másodikat használjuk
        //console.log(this.urlapModell.leiro);
        //this.kartyakView = new KartyakView(lista, $(".kartyakTarolo"));
        this.dataService.getdata("api/forms", this.kartyakMegj, this.hibaMegj);
        
    }

    adatokMegj(lista) {
        //console.log(lista);        
        new AdatView(lista, $(".lista"));
    }

    hibaMegj(error) {
        new HibaView(error, $(".lista"));
    }

    kartyakMegj(lista) {        
        //console.log(lista);
        new KartyakView(lista, $(".kartyakTarolo"));
    }

}
export default Controller;