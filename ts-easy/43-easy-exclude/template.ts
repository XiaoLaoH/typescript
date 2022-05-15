type MyExclude<T, U> = T extends U ? never : T;


// T <'a' | 'b' | 'c' | 'a'>
// U <'b' | 'c'>
type A1 = 'a' | 'b' | 'c' | 'a'
type A2 = 'a' | 'b'
const a: MyExclude<A1, A2> = 'c'