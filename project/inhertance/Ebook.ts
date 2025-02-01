import { Product } from "./product";

export class Ebook extends Product {
  private totalDownloads: number;
  constructor(
    public id: string,
    title: string,
    public author: string,
    protected _price: number,
    private _downloadLink: number
  ) {
    super(id, title, _price, 1);
  }
  getDescription(): string {
    return `${this.title} by ${this.author} | Download Link: ${this._downloadLink} | Total Downloads: ${this.totalDownloads}`;
  }

  set price(price: number) {
    throw new Error("Cannot set price for Ebook");
  }

  download() {
    console.log("Download Ebook");
  }

  checkStock(_quantity: number): string {
    return "Available for download";
  }
}
