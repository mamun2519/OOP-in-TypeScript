export class Product {
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

  get price() {
    return this._price;
  }
  set price(newPrice: number) {
    this._price = newPrice;
  }

  addStock(quantity: number) {
    if (quantity > 0) {
      this._stock += quantity;
    }
  }

  removeStock(quantity: number) {
    if (quantity > 0 && quantity <= this._stock) {
      this._stock -= quantity;
      return true;
    }
    return false;
  }

  applyDiscount(discount: number) {
    if (discount >= 0 && discount <= 1) {
      this._discount = discount;
    }
  }
  description() {
    return `The Product Name is ${this.title} and price is ${this._price} and product stock available is ${this._stock}`;
  }
}
