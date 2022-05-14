type TupleToObject<T extends readonly string[] | number[] | symbol[]> = {
  // 遍历数组 使用 <泛型>[number] 来表示该泛型是一个数组 
  [P in T[number]]: P
}
