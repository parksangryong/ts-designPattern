import singleton from "./singleton1";
import multiton from "./singleton2";

interface Grimpan {
  type: "singleton";
}
interface GrimpanOption {
  type: "multiton";
  option: string;
}

function GrimpanFactory(params: Grimpan | GrimpanOption) {
  if (params.type == "singleton") {
    return singleton.getInstance();
  } else if (params.type == "multiton") {
    return multiton.getInstance(params.option);
  } else {
    throw new Error("일치하는 type이 없습니다.");
  }
}

export default GrimpanFactory;
