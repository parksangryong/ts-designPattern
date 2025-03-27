// 싱글톤 패턴을 사용하여 여러 인스턴스를 생성할 수 있도록 함
// 멀티톤 패턴
class Grimpan {
    // 여러 인스턴스를 생성할 수 있도록 함
    static instancesMap = {};
    // 생성자를 private으로 선언하여 외부에서 인스턴스를 생성할 수 없도록 함
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas is not an instance of HTMLCanvasElement");
        }
    }
    initialize() { }
    initializeMenu() { }
    // 인스턴스를 반환하는 메서드
    static getInstance(canvasId) {
        if (!this.instancesMap[canvasId]) {
            const canvas = document.querySelector(`#${canvasId}`);
            this.instancesMap[canvasId] = new Grimpan(canvas);
        }
        return this.instancesMap[canvasId];
    }
}
export default Grimpan;
