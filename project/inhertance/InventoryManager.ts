import { Book } from "./book";
import { Ebook } from "./Ebook";
import { Magazine } from "./Magazine";
import { Product } from "./product";

export class InventoryManage {
  private products: Map<string, Product> = new Map();
  private salesHistory: Array<{
    productId: string;
    date: Date;
    quantity: number;
    revenue: number;
  }> = [];

  addProduct(product: Product): void {
    this.products.set(product.id, product);
  }

  removeProduct(productId: string): boolean {
    return this.products.delete(productId);
  }

  getProduct(productId: string): Product | undefined {
    return this.products.get(productId);
  }

  getAllProducts(): Product[] {
    return Array.from(this.products.values());
  }

  recordSale(productId: string, quantity: number): boolean {
    const product = this.products.get(productId);
    if (product && product.removeStock(quantity)) {
      const revenue = product.price * quantity;
      this.salesHistory.push({
        date: new Date(),
        productId,
        quantity,
        revenue,
      });
      return true;
    }
    return false;
  }

  getTotalInventoryValue(): number {
    return Array.from(this.products.values()).reduce((total, product) => {
      const value = product.price * product.stock;
      return isFinite(value) ? total + value : total;
    }, 0);
  }

  getBooks(): Book[] {
    return Array.from(this.products.values()).filter(
      (product) => product instanceof Book
    ) as Book[];
  }

  getMagazines(): Magazine[] {
    return Array.from(this.products.values()).filter(
      (product) => product instanceof Magazine
    ) as Magazine[];
  }

  getEBooks(): Ebook[] {
    return Array.from(this.products.values()).filter(
      (product) => product instanceof Ebook
    ) as Ebook[];
  }
}
