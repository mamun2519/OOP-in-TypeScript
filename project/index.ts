import { user, studentInfo } from "./simple-object";
import { reactor } from "./encapsulation";
import { config } from "./static-class";
import { Product } from "./inhertance/product";
import { Book } from "./inhertance/book";

// console.log(user);
// console.log(user.getFullAddress());

// console.log(studentInfo);
// console.log(reactor);
// console.log(config);

const product = new Product("1", "Mango", 100, 20);
product.addStock(3);
product.removeStock(10);
console.log(product);

const books = new Book("2", "DSA", 2000, 100);
console.log(books);
