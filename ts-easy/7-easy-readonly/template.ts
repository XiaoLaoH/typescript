type MyReadonly<T> = {
  // 遍历接口 使用 keyof 将接口转换为 union 类型使用 in 遍历
  readonly [P in keyof T]: T[P]
}