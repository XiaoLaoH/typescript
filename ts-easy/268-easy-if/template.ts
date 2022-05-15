type If<C extends boolean, T, F> = C extends true ? T : F

// null 在非严格模式下会兼容 never 以外的所有类型

// https://www.typescriptlang.org/docs/handbook/type-compatibility.html