// 모든 그림판의 기본 틀을 정의하는 추상 클래스
class Grimpan {
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트가 존재하지 않습니다.");
        }
    }
    static getInstance() { }
}
export default Grimpan;
