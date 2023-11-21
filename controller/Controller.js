import UrlapModell from "../modell/urlap/UrlapModell.js";
import DataService from "../modell/adat/DataService.js";
import UrlapView from "../view/urlap/UrlapView.js";
import AdatView from "../view/tablazat/AdatView.js";
import HibaView from "../view/tablazat/HibaView.js";

class Controller {

    constructor() {
        //console.log("Construktor");
        this.urlapModell = new UrlapModell();
        this.dataService = new DataService();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModell.leiro);
        console.log(this.urlapView.getUrlapAdatok());

        //../modell/adat.json --eredeti elérés, ezzel működik
        //http://localhost:8000/forms
        this.dataService.getdata("api/forms", this.adatokMegj, this.hibaMegj);   //ide kéne beírni azt a végpontot amit nem tudtunk előállítani
        //nem kell a gömbölyű zárójelk mert nem azonnal akarjuk megjeleníteni ez egy callback fügvény       


        $(window).on("validalas", (event) => {
            console.log("esemény működik");//sajnos nem
            this.dataService.postData("api/forms", this.urlapView.getUrlapAdatok());

            //valamiért nem látja a  szül dátumot KERESD MEG HOL A HIBA
            //innen küldi majd az adatbázisba
        })
        //console.log(this.urlapModell.getLeiro());
        //ugyanaz a kettő, csak a másodiknál nem fog kelleni a zárójel. 
        //mastantól a másodikat használjuk
        //console.log(this.urlapModell.leiro);
    }

    adatokMegj(lista) {
        //console.log(lista);
        new AdatView(lista, $(".lista"));
    }

    hibaMegj(error) {
        new HibaView(error, $(".lista"));
    }
}
export default Controller;