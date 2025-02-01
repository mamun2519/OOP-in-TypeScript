import { user, studentInfo } from "./simple-object";
import { reactor } from "./encapsulation";
import { config } from "./static-class";
import { Product } from "./inhertance/product";
import { Book } from "./inhertance/book";
import { Ebook } from "./inhertance/Ebook";
import { Magazine } from "./inhertance/Magazine";
import { AudionBook } from "./inhertance/audioBook";
import { InventoryManage } from "./inhertance/InventoryManager";

// console.log(user);
// console.log(user.getFullAddress());

// console.log(studentInfo);
// console.log(reactor);
// console.log(config);

const product = new Product("1", "Mango", 100, 20);
product.addStock(3);
product.removeStock(10);
console.log(product);

const books = new Book(
  "2",
  "DSA",
  "Mohammad Mamun",
  2000,
  100,
  "assss",
  100,
  "Faction"
);
// console.log(books.getDescription());

const ebooks = new Ebook(
  "id3",
  "Ebook title 1",
  "Test Author",
  500,
  "https://www.google.com"
);
// console.log(ebooks.getDescription());
// console.log(books);
// console.log(ebooks);
const magazine = new Magazine(
  "123",
  "Daily Start",
  150,
  50,
  1,
  "Test Publisher",
  new Date()
);
// console.log();
magazine.applyDiscount(0.4);
console.log(magazine.getDescription());
const audioBook = new AudionBook("3", "Been ten", 500, 120);
console.log(audioBook.getDescription());

const inventoryManager = new InventoryManage();
console.log(inventoryManager);
