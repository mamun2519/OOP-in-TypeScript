import { Product } from "./product";

export class Ebook extends Product {
  private totalDownload: number;
  constructor(
    public id: string,
    title: string,
    public author: string,
    protected _price: number,
    private _totalDownload: number
  ) {
    super(id, title, _price, 1);
  }
  getDescription(): string {
    return `${this.title} by ${this.author} | Download Link: ${this._downloadLink} | Total Downloads: ${this.totalDownloads}`;
  }
}
