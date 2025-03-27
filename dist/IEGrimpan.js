import Grimpan from "./AbstractGrimpan";
// IE 의 구체적인 팩토리 구현체
class IEGrimpan extends Grimpan {
    static instance;
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IEGrimpan(document.querySelector("#canvas"));
        }
        return this.instance;
    }
}
export default IEGrimpan;
