import UrlapModell from "../modell/urlap/UrlapModell.js";
import UrlapView from "../view/urlap/UrlapView.js";

class UrlapController {

    constructor() {
        //console.log("Construktor");
        this.urlapModell = new UrlapModell();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModell.leiro);

        
        $(window).on("validalas", (event)=> {
            console.log("esemény működik");//sajnos nem
        })

        //console.log(this.urlapModell.getLeiro());
        //ugyanaz a kettő, csak a másodiknál nem fog kelleni a zárójel. 
        //mastantól a másodikat használjuk
        //console.log(this.urlapModell.leiro);

    }
}
export default UrlapController;