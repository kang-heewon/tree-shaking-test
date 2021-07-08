function usingSomething() {
  console.log("hello2");
  return something;
}

export function test() {
  console.log("hello1");
  return usingSomething();
}
