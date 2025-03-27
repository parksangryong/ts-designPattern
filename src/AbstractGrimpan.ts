// 모든 그림판의 기본 틀을 정의하는 추상 클래스
abstract class Grimpan {
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트가 존재하지 않습니다.");
    }
  }

  abstract initialize(): void;

  static getInstance() {}
}

export default Grimpan;
