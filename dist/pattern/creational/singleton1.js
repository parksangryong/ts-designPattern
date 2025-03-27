// 일반적인 싱글톤 패턴
class Grimpan {
    // 단 한개의 인스턴스만 생성할 수 있도록 함
    static instance;
    // 생성자를 private으로 선언하여 외부에서 인스턴스를 생성할 수 없도록 함
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas is not an instance of HTMLCanvasElement");
        }
    }
    initialize() { }
    initializeMenu() { }
    // 인스턴스를 반환하는 메서드
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector("#canvas"));
        }
        return this.instance;
    }
}
export default Grimpan;
