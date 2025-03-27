class Grimpan {
  private static instance: Grimpan;

  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas is not an instance of HTMLCanvasElement");
    }
  }

  initialize() {}
  initializeMenu() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("#canvas"));
    }
    return this.instance;
  }
}

export default Grimpan;
