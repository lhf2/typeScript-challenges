type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// 1. keyof 关键字
// keyof interface类型 => union types
/*
interface article{
    title: string
    description: string
    completed: boolean
}
type t = keyof article; // "title" | "description" | "completed"*/
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types

// 2. in 关键字
// in union type => 相当于遍历
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html


// 3. extends 条件约束
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

// 4. T[p] 取值
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
