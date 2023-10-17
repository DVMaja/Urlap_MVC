import UrlapModell from "../modell/UrlapModell.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController {

    constructor() {
        console.log("Construktor");       
        this.urlapModell = new UrlapModell();
        //console.log(this.urlapModell.getLeiro());
        //ugyanaz a kettő, csak a másodiknál nem fog kelleni a zárójel. 
        //mastantól a másodikat használjuk
        console.log(this.urlapModell.leiro);

        //Írd ki s konzolra
        //nev mezőhöz tartozó szöveg
        console.log(this.urlapModell.leiro.nev.megj);
        //szul kulcshoz tartozó placeholder
        console.log(this.urlapModell.leiro.szul.placeholder);
        //szul kulcshoz tartozó min érték
        console.log(this.urlapModell.leiro.szul.regex.min);
        //a nev kulcshoz tartozó tipus
        console.log(this.urlapModell.leiro.nev.type);


    }
}
export default UrlapController;