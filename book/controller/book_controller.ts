import { BookService } from "../service/book_service.ts";

const bookService: BookService = new BookService();

export class BookController {
  async getBooks({ response }: { response: any }) {
    console.log("Books");
    let users = await bookService.getBooks();
    response.body = users;
  }

  async getBook(
    { params, response }: { params: { id: string }; response: any },
  ) {
    let user = await bookService.getBook(params.id);
    response.body = user;
  }

  removeBook({ params, response }: { params: { id: string }; response: any }) {
    let result = bookService.removeBook(params.id);
    response.body = result;
  }
}
