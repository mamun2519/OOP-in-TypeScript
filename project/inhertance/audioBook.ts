import { Product } from "./product";

export class AudionBook extends Product {
  constructor(
    public id: string,
    public title: string,
    protected _price: number,
    protected _stock: number,
    public issueNumber: number,
    public publisher: string,
    public releaseDate: Date
  ) {
    super(id, title, _price, _stock);
  }
  override getDescription(): string {
    return `${this.title} | Issue: ${this.issueNumber} | Publisher: ${this.publisher} | Release Date: ${this.releaseDate} | Price: $${this.price} | Stock: ${this.stock}\n`;
  }
}
