type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// 1. as const 会变为 readonly
// const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// readonly ["tesla", "model 3", "model X", "model Y"]

// 2. 遍历一个数组 T[number]
