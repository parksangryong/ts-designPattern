class IEGrimpan {
  private static instance: IEGrimpan;

  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas is not an instance of HTMLCanvasElement");
    }
  }

  initialize() {}
  initializeMenu() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(document.querySelector("#canvas"));
    }
    return this.instance;
  }
}

export default IEGrimpan;
