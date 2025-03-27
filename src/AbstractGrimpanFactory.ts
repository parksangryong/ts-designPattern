import Grimpan from "./AbstractGrimpan";

// 모든 그림판 객체를 생성하는 팩토리의 추상 클래스
abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현해야 합니다.");
  }
}

export default AbstractGrimpanFactory;
