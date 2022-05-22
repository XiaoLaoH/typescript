type MyParameters<T extends (...args: any) => any> = 
  T extends (...args: infer U) => any ? U : never;


type a = MyParameters<typeof a1>

const a1 = (a: string, b: number, c: boolean) => {}