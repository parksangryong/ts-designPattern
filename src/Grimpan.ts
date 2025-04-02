import { BackCommand, ForwardCommand } from "./commands/index.js";
import {
  AbstractGrimpanFactory,
  ChromeGrimpanFactory,
  IEGrimpanFactory,
} from "./GrimpanFactory.js";
import { ChromeGrimpanHistory, GrimpanHistory } from "./GrimpanHistory.js";
import { BtnType, ChromeGrimpanMenu, GrimpanMenu } from "./GrimpanMenu.js";
import {
  CircleMode,
  EraserMode,
  Mode,
  PenMode,
  PipetteMode,
  RectangleMode,
} from "./modes/index.js";

export interface GrimpanOption {
  menu: BtnType[];
}
export type GrimpanMode = "pen" | "eraser" | "pipette" | "circle" | "rectangle";

export abstract class Grimpan {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  history!: GrimpanHistory;
  menu!: GrimpanMenu;
  mode!: Mode;
  color: string;
  active: boolean;

  protected constructor(
    canvas: HTMLElement | null,
    factory: typeof AbstractGrimpanFactory
  ) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
    this.color = "#000";
    this.active = false;
  }

  setMode(mode: GrimpanMode) {
    console.log("mode change", mode);
    switch (mode) {
      case "pen":
        this.mode = new PenMode(this);
        break;
      case "eraser":
        this.mode = new EraserMode(this);
        break;
      case "pipette":
        this.mode = new PipetteMode(this);
        break;
      case "circle":
        this.mode = new CircleMode(this);
        break;
      case "rectangle":
        this.mode = new RectangleMode(this);
        break;
    }
  }

  setColor(color: string) {
    this.color = color;
  }

  changeColor(color: string) {
    this.setColor(color);
    if (this.menu.colorBtn) {
      this.menu.colorBtn.value = color;
    }
  }

  abstract initialize(option: GrimpanOption): void;
  abstract onMouseDown(e: MouseEvent): void;
  abstract onMouseMove(e: MouseEvent): void;
  abstract onMouseUp(e: MouseEvent): void;

  static getInstance() {}
}

export class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;
  override menu: ChromeGrimpanMenu;
  override history: ChromeGrimpanHistory;

  private constructor(
    canvas: HTMLElement | null,
    factory: typeof ChromeGrimpanFactory
  ) {
    super(canvas, factory);
    this.menu = factory.createGrimpanMenu(
      document.querySelector("#menu")!,
      this
    );
    this.history = factory.createGrimpanHistory(this);
  }

  initialize(option: GrimpanOption) {
    this.menu.initialize(option.menu);
    this.history.initialize();
    window.addEventListener("keyup", (e: KeyboardEvent) => {
      console.log(e);
      if (e.code === "KeyZ" && e.ctrlKey && e.shiftKey) {
        this.menu.executeCommand(new ForwardCommand(this.history));
        return;
      }
      if (e.code === "KeyZ" && e.ctrlKey) {
        this.menu.executeCommand(new BackCommand(this.history));
        return;
      }
    });
    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.canvas.addEventListener("mouseleave", this.onMouseUp.bind(this));
  }

  override onMouseDown(e: MouseEvent) {
    this.mode.mousedown(e);
  }

  override onMouseMove(e: MouseEvent) {
    this.mode.mousemove(e);
  }

  override onMouseUp(e: MouseEvent) {
    this.mode.mouseup(e);
  }

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(
        document.querySelector("canvas"),
        ChromeGrimpanFactory
      );
    }
    return this.instance;
  }
}

export class IEGrimpan extends Grimpan {
  private static instance: IEGrimpan;

  initialize() {}

  override onMouseDown(e: MouseEvent) {}

  override onMouseMove(e: MouseEvent) {}

  override onMouseUp(e: MouseEvent) {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(
        document.querySelector("canvas"),
        IEGrimpanFactory
      );
    }
    return this.instance;
  }
}
