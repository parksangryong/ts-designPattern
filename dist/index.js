import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory.js";
// Chrome 그림판 팩토리
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
}
// IE 그림판 팩토리
class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
}
function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
}
main();
