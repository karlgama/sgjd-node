export default abstract class Factory<T> {
  public makeMany(quantity: number): Array<T> {
    const many: Array<T> = [];
    for (let i = 1; i <= quantity; i++) {
      many.push(this.make());
    }
    return many;
  }

  public abstract make(): T;
}
