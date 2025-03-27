import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

function GrimpanFactory(type: string) {
  if (type == "ie") {
    return IEGrimpan.getInstance();
  } else if (type == "chrome") {
    return ChromeGrimpan.getInstance();
  } else {
    throw new Error("일치하는 type이 없습니다.");
  }
}

function main() {
  const grimpan = GrimpanFactory("chrome");
  grimpan.initialize();
  grimpan.initializeMenu();
}

main();
