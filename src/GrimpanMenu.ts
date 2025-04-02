import { Grimpan, GrimpanMode, IEGrimpan, ChromeGrimpan } from "./Grimpan.js";
import { GrimpanMenuBtn, GrimpanMenuInput } from "./GrimpanMenuBtn.js";
import {
  BackCommand,
  CircleSelectCommand,
  Command,
  EraserSelectCommand,
  PenSelectCommand,
  PipetteSelectCommand,
  RectangleSelectCommand,
} from "./commands/index.js";
import { Mode } from "./modes/index.js";
export abstract class GrimpanMenu {
  dom: HTMLElement;
  grimpan: Grimpan;
  colorBtn!: HTMLInputElement;

  protected constructor(dom: HTMLElement, grimpan: Grimpan) {
    this.grimpan = grimpan;
    this.dom = dom;
  }

  setActiveBtn(type: GrimpanMode) {
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(`#${type}-btn`)?.classList.add("active");
  }

  executeCommand(command: Command) {
    command.execute();
  }

  abstract initialize(types: BtnType[]): void;

  static getInstance(dom: HTMLElement, grimpan: Grimpan) {}
}

export type BtnType =
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

export class ChromeGrimpanMenu extends GrimpanMenu {
  private static instance: ChromeGrimpanMenu;

  override initialize(types: BtnType[]) {
    types.forEach(this.drawButtonByType.bind(this));
    this.setActiveBtn("pen");
  }

  onClickBack() {
    this.executeCommand(new BackCommand(this.grimpan.history));
  }

  onClickPen() {
    const command = new PenSelectCommand(this.grimpan);
    this.executeCommand(command);
    this.grimpan.history.stack.push(command);
  }

  onClickEraser() {
    this.executeCommand(new EraserSelectCommand(this.grimpan));
  }

  onClickCircle() {
    this.executeCommand(new CircleSelectCommand(this.grimpan));
  }

  onClickRectangle() {
    this.executeCommand(new RectangleSelectCommand(this.grimpan));
  }

  onClickPipette() {
    this.executeCommand(new PipetteSelectCommand(this.grimpan));
  }

  drawButtonByType(type: BtnType) {
    switch (type) {
      case "back": {
        const btn = new GrimpanMenuBtn.Builder(this, "뒤로", type)
          .setOnClick(this.onClickBack.bind(this))
          .build();
        btn.draw();
        return btn;
      }
      case "forward": {
        const btn = new GrimpanMenuBtn.Builder(this, "앞으로", type)
          .setOnClick(() => {
            console.log("앞으로 가기 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "color": {
        const btn = new GrimpanMenuInput.Builder(this, "컬러", type)
          .setOnChange((e: Event) => {
            if (e.target) {
              this.grimpan.setColor((e.target as HTMLInputElement).value);
            }
          })
          .build();
        btn.draw();
        return btn;
      }
      case "pipette": {
        const btn = new GrimpanMenuBtn.Builder(this, "스포이드", type)
          .setOnClick(() => {
            console.log("스포이드 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "eraser": {
        const btn = new GrimpanMenuBtn.Builder(this, "지우개", type)
          .setOnClick(() => {
            console.log("지우개 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "pen": {
        const btn = new GrimpanMenuBtn.Builder(this, "펜", type)
          .setOnClick(() => {
            console.log("펜 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "circle": {
        const btn = new GrimpanMenuBtn.Builder(this, "원", type)
          .setOnClick(() => {
            console.log("원 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "rectangle": {
        const btn = new GrimpanMenuBtn.Builder(this, "사각형", type)
          .setOnClick(() => {
            console.log("사각형 작업");
          })
          .build();
        btn.draw();
        return btn;
      }
      case "save": {
        const btn = new GrimpanMenuBtn.Builder(this, "저장", type)
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
