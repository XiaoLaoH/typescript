type Tt<T, L> = (<X>() => X extends T ? 1 : 2) extends (<X>() => X extends L ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer first, ...infer last]
  ? Tt<first, U> extends true
    ? true
    : Includes<last, U>
  : false;
