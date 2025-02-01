import { Product } from "./product";

export class Book extends Product {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    protected _price: number,
    protected _stock: number,
    public isbn: string,
    public pages: number,
    public genre: string
  ) {
    super(id, title, _price, _price);
  }

  override getDescription(): string {
    return `${this.title} by ${this.author} | ISBN: ${this.isbn} | Pages: ${this.pages} | Genre: ${this.genre} | Price: $${this.price} | Stock: ${this.stock}\n`;
  }
  buy() {
    console.log("Purchase book");
  }
  checkStock(quantity: number): string {
    return this._stock >= quantity ? "In Stock" : "Out of Stock";
  }
}
