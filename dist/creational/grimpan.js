class Grimpan {
    static instancesMap = {};
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas is not an instance of HTMLCanvasElement");
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance(canvasId) {
        if (!this.instancesMap[canvasId]) {
            const canvas = document.querySelector(`#${canvasId}`);
            this.instancesMap[canvasId] = new Grimpan(canvas);
        }
        return this.instancesMap[canvasId];
    }
}
export default Grimpan;
