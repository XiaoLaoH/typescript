// typescript 中也提供了 ... 运算符, 只有数组能使用

type Concat<T extends any[], U extends any[]> = [...T, ...U];
