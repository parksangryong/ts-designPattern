import Grimpan from "./AbstractGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import { GrimpanMenuBtn, GrimpanMenuInput } from "./GrimpanMenuBtn.js";

export abstract class GrimpanMenu {
  dom: HTMLElement;
  grimpan: Grimpan;

  protected constructor(dom: HTMLElement, grimpan: Grimpan) {
    this.grimpan = grimpan;
    this.dom = dom;
  }

  abstract initialize(types: BtnType[]): void;

  static getInstance(dom: HTMLElement, grimpan: Grimpan) {}
}

type BtnType =
  | "back"
  | "forward"
  | "color"
  | "pipette"
  | "pen"
  | "circle"
  | "rectangle"
  | "eraser"
  | "save";

export class IEGrimpanMenu extends GrimpanMenu {
  private static instance: IEGrimpanMenu;

  override initialize(types: BtnType[]) {}

  static override getInstance(dom: HTMLElement, grimpan: IEGrimpan) {
    if (!this.instance) {
      this.instance = new IEGrimpanMenu(dom, grimpan);
    }
    return this.instance;
  }
}

abstract class Command {
  abstract execute(): void;
}

class BackCommand extends Command {
  name = "back";
  override execute() {
    console.log("뒤로가기 작업");
  }
}

export class ChromeGrimpanMenu extends GrimpanMenu {
  private static instance: ChromeGrimpanMenu;

  override initialize(types: BtnType[]) {
    types.forEach(this.drawButtonByType.bind(this));
  }

  executeCommand(command: BackCommand) {
    command.execute();
  }

  onClickBack() {
    this.executeCommand(new BackCommand());
  }

  drawButtonByType(type: BtnType) {
    switch (type) {
      case "back": {
        const btn = new GrimpanMenuBtn.Builder(this, "뒤로")
          .setOnClick(() => {
            this.onClickBack();
          })
          .build();
        btn.draw();
        return btn;
      }
      case "forward": {
        const btn = new GrimpanMenuBtn.Builder(this, "앞으로")
          .setOnClick(() => {
            console.log("앞으로 가기 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "color": {
        const btn = new GrimpanMenuInput.Builder(this, "컬러")
          .setOnChange(() => {
            console.log("색상 변경 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "pipette": {
        const btn = new GrimpanMenuBtn.Builder(this, "스포이드")
          .setOnClick(() => {
            console.log("스포이드 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "eraser": {
        const btn = new GrimpanMenuBtn.Builder(this, "지우개")
          .setOnClick(() => {
            console.log("지우개 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "pen": {
        const btn = new GrimpanMenuBtn.Builder(this, "펜")
          .setOnClick(() => {
            console.log("펜 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "circle": {
        const btn = new GrimpanMenuBtn.Builder(this, "원")
          .setOnClick(() => {
            console.log("원 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "rectangle": {
        const btn = new GrimpanMenuBtn.Builder(this, "사각형")
          .setOnClick(() => {
            console.log("사각형 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "save": {
        const btn = new GrimpanMenuBtn.Builder(this, "저장")
          .setOnClick(() => {
            console.log("저장 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      default:
        throw new Error(`알 수 없는 타입 ${type}`);
    }
  }

  static override getInstance(dom: HTMLElement, grimpan: ChromeGrimpan) {
    if (!this.instance) {
      this.instance = new ChromeGrimpanMenu(dom, grimpan);
    }
    return this.instance;
  }
}
