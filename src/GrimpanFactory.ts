import { Grimpan, ChromeGrimpan, IEGrimpan } from "./Grimpan.js";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory.js";

export abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanMenu(dom: HTMLElement, grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanHistory(grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
  static override createGrimpanMenu(dom: HTMLElement, grimpan: ChromeGrimpan) {
    return ChromeGrimpanMenu.getInstance(dom, grimpan);
  }
  static override createGrimpanHistory(grimpan: ChromeGrimpan) {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
  static override createGrimpanMenu(dom: HTMLElement, grimpan: IEGrimpan) {
    return IEGrimpanMenu.getInstance(dom, grimpan);
  }
  static override createGrimpanHistory(grimpan: IEGrimpan) {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
