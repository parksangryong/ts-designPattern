import Grimpan from "./AbstractGrimpan";
// Chrome 의 구체적인 팩토리 구현체
class ChromeGrimpan extends Grimpan {
    static instance;
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector("#canvas"));
        }
        return this.instance;
    }
}
export default ChromeGrimpan;
