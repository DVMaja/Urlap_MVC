import UrlapModell from "../modell/urlap/UrlapModell.js";
import DataService from "../modell/adat/DataService.js";
import UrlapView from "../view/urlap/UrlapView.js";

class UrlapController {

    constructor() {
        //console.log("Construktor");
        this.urlapModell = new UrlapModell();
        this.dataService = new DataService();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModell.leiro);
        console.log(this.urlapView.getUrlapAdatok());


        
       /*  $(window).on("validalas", (event)=> {
            console.log("esemény működik");//sajnos nem
            this.dataService.postData("http://localhost:8000/api/forms",{
                nev:" Manuális Jenő",
                szul: 1993,
            }   );
            //valamiért nem látja a  szül dátumot KERESD MEG HOL A HIBA
            //innen küldi majd az adatbázisba
        }) */

        //console.log(this.urlapModell.getLeiro());
        //ugyanaz a kettő, csak a másodiknál nem fog kelleni a zárójel. 
        //mastantól a másodikat használjuk
        //console.log(this.urlapModell.leiro);

    }
}
export default UrlapController;