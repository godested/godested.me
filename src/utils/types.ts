export type Primitive = number | string | boolean;

export type Recursive<T> =
  // value of T itself
  | T
  // array of T (and readonly array)
  | Recursive<T>[]
  | readonly Recursive<T>[]
  // nested object with recursive values (undefined to avoid unsafe string indexing)
  | { [key: string]: Recursive<T> | undefined };

export type IfOptional<T, Then = T> = T extends undefined | null ? Then : never;

export type OptionalKeys<T> = keyof T &
  { [K in keyof T]: IfOptional<T[K], K> }[keyof T];
