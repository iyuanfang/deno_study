import { Book, User } from "../model.ts";
import { Books, Users } from "./db.ts";

export class BookService {
  buyBook(book: Book) {
    Books.insertOne(book);
  }

  getBooks(): any {
    return Books.find({});
  }

  getBook(id: string): any {
    return Books.findOne({ id: id });
  }

  removeBook(id: string): string {
    let book = Books.findOne({ id: id });
    console.log(book);
    if (book == null) {
      return "Book not found";
    } else {
      Books.deleteOne({ id: id });
      return "Book with id:" + id + " is removed";
    }
  }
}
