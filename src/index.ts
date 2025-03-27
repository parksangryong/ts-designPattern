import grimpan from "./pattern/creational/singleton1.js";
import multiGrimpan from "./pattern/creational/singleton2.js";

console.log(grimpan.getInstance() === grimpan.getInstance());
console.log(
  multiGrimpan.getInstance("canvas1") === multiGrimpan.getInstance("canvas2")
);
