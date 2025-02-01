class Product {
  protected _discount: number = 0;
  public readonly id: string;
  public readonly title: string;
  protected _price: number;
  protected _stock: number;
  constructor(id: string, title: string, _price: number, _stock: number) {
    this.id = id;
    this.title = title;
    this._price = _price;
    this._stock = _stock;
  }
}
