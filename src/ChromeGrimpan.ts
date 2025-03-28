import Grimpan from "./AbstractGrimpan";

// Chrome 의 구체적인 팩토리 구현체
class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  override initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("#canvas"));
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
