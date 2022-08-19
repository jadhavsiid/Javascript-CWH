// Js Console Object
console.log("log");
console.info("info");
console.warn("warn");
console.assert("err" != false);
console.assert("err" == false);

console.time("FL");
for (let i = 0; i < 5; i++) {
  console.log(233);
}
console.timeEnd("FL");

console.time("wL");
let i = 0;
while (i < 5) {
  console.log(233);
  i++;
}
console.timeEnd("wL");
