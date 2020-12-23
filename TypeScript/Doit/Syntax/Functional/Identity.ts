type MapFunc<T, R> = (T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

const numberIdentity: IdentityFunc<number> = (x: number) => x;
const stringIdentity: IdentityFunc<string> = (x: string) => x;

console.log(stringIdentity('안녕하세요'));