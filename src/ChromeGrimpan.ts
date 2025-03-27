class ChromeGrimpan {
  private static instance: ChromeGrimpan;

  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas is not an instance of HTMLCanvasElement");
    }
  }

  initialize() {}
  initializeMenu() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("#canvas"));
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
