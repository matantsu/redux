// this is a typesafe immutable list of type T
export class List<T>{
  constructor(private readonly _data: T[]) {}

  set(index: number, t: T) {
    return new List<T>([...this._data.slice(0, index), t, ...this._data.slice(index + 1, this._data.length)]);
  }

  get(index: number): T {
    return this._data[index];
  }

  size(): number {
    return this._data.length;
  }

  push(t: T): List<T> {
    return new List<T>([...this._data, t]);
  }

  filter(pred: (t: T) => boolean): List<T> {
    return new List<T>(this._data.filter(pred));
  }

  map<Q>(proc: (t: T) => Q): List<Q> {
    return new List<Q>(this._data.map(proc));
  }
}
