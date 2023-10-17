import { urlapleiro } from "./adat.js";

class UrlapModell {

    #leiro;

    constructor() {
        this.#leiro = urlapleiro;
    }

    getLeiro() {
        return this.#leiro;
    }

    //mostantól ezt használjuk.
    get leiro() {
        return this.#leiro;
    }
}
export default UrlapModell;