// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 1. 判断一个数组是否是空数组的几种方式
// 2. infer 推断的使用：当成数组解构去理解