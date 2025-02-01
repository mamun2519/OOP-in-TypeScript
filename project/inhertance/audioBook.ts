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
  ) {}
}
