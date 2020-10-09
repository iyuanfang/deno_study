import { Book, User } from "../model.ts";
import { Books, Users } from "./db.ts";

export class UserService {
  registUser(user: User) {
    Users.insertOne(user);
  }

  removeUser(id: string): string {
    let user = Users.findOne({ id: id });
    console.log(user);
    if (user == null) {
      return "User not found";
    } else {
      Users.deleteOne({ id: id });
      return "User with id:" + id + " is removed";
    }
  }

  getUser(id: string): any {
    return Users.findOne({ id: id });
  }

  getUsers(): any {
    return Users.find({});
  }

  borrowBook(user: User, book: Book) {
    user.borrowed.push(book);
    Users.updateOne({ id: user.id }, { $set: user });
  }

  returnBook(user: User, book: Book) {
    //不能直接indexof，对象地址不一样，需要先filter
    let b = user.borrowed.filter((bb) => {
      return bb.id == book.id;
    });

    console.log(user);
    const index = user.borrowed.indexOf(b[0], 0);
    if (index > -1) {
      user.borrowed.splice(index, 1);
    }
    console.log(user);
    Users.updateOne({ id: user.id }, { $set: user });
  }

  clear() {
    Users.deleteMany({});
    Books.deleteMany({});
  }
}
