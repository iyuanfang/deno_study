// @ts-ignore
import {assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {BookService} from "../service/book_service.ts";
import {UserService} from "../service/user_service.ts";
import {Book, User} from "../model.ts";

let bookService: BookService = new BookService();
let userService: UserService=new UserService();
//先清空表便于测试
userService.clear();

let user: User = {name: "yuanfang", id: "1", borrowed: []};
let user2: User = {name: "yuanfang2", id: "2", borrowed: []};

let book: Book = {id: "1", title: "Study Deno"};
let book2: Book = {id: "2", title: "Study Deno2"};
let book3: Book = {id: "3", title: "Study Deno3"};

userService.registUser(user);

userService.registUser(user2);

let users = await userService.getUsers();

Deno.test("Insert user", () => {
    assertEquals(users.length, 2)
});

bookService.buyBook(book);
bookService.buyBook(book2);
bookService.buyBook(book3);

let books = await bookService.getBooks();

Deno.test("Insert Book", () => {
    assertEquals(books.length, 3)
});

userService.borrowBook(user, book);
userService.borrowBook(user, book2);
user = await userService.getUser(user.id);
console.log("borrow",user);
Deno.test("Borrow Book", () => {
    assertEquals(user.borrowed.length, 2)
});

//要新new一个对象
let userr=await userService.getUser(user.id);
await userService.returnBook(userr, book);
userr = await userService.getUser(user.id);
Deno.test("Return Book", () => {
    assertEquals(userr.borrowed.length, 1)
});



// bookService.buyBook(book);

//TODO 这里要用await，后续我搞明白为什么
// user=await bookService.getUser("2");

// bookService.borrowBook(user,book);
