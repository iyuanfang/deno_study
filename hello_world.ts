let world: string = "World";
let age: number = 20;
console.log("变量：");
console.log(world);
console.log(age);
console.log("-----------------");

function hello(name: string = "World"): string {
  return "Hello," + name + "!";
}

console.log("hello输出：");
console.log(hello());
console.log(hello("Yuanfang"));
console.log("-----------------");

console.log("循环数组：");
let names: string[] = ["John", "Hardy", "Henry"];
for (let nam in names) {
  console.log(hello(names[nam]));
}
console.log("-----------------");

console.log("循环tuple元组：");
let tup = ["hihi", 1];
tup.push(2);
tup[0] = "haha";
for (let i in tup) {
  console.log(tup[i]);
}
console.log("-----------------");

console.log("循环Map：");
// @ts-ignore
let map = new Map();
map.set("yuanfang", 28);
map.set("John", 20);
for (let e of map.entries()) {
  console.log(e[0], e[1]);
}

for (let key of map.keys()) {
  console.log(map.get(key));
}
console.log("-----------------");

