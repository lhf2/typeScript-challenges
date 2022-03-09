type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}

// 1. readonly
// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// 2. keyof
// 3. in