import { UserService } from "../service/user_service.ts";

const userService: UserService = new UserService();

export class UserController {
  index({ response }: { response: any }) {
    response.body = "Welcome to Oak BookStore with Deno!";
  }

  async getUsers({ response }: { response: any }) {
    console.log("users");
    let users = await userService.getUsers();
    response.body = users;
  }

  async getUser(
    { params, response }: { params: { id: string }; response: any },
  ) {
    let user = await userService.getUser(params.id);
    response.body = user;
  }

  removeUser({ params, response }: { params: { id: string }; response: any }) {
    let result = userService.removeUser(params.id);
    response.body = result;
  }
}
