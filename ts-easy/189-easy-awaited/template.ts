// infer 可以声明一个变量来指定未知的值

type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;
