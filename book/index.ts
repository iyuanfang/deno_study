import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { UserController } from "./controller/user_controller.ts";
import { BookController } from "./controller/book_controller.ts";

const router: Router = bindRouter();
await startServe();

function bindRouter(): Router {
  const router = new Router();

  bindUserRouter(router);

  bindBookRouter(router);

  return router;
}

function bindUserRouter(router: Router) {
  const userController: UserController = new UserController();
  router.get("/", userController.index);
  router.get("/users", userController.getUsers);
  router.get("/users/:id", userController.getUser);
  router.delete("/users/:id", userController.removeUser);
}

function bindBookRouter(router: Router) {
  const bookController: BookController = new BookController();
  router.get("/books", bookController.getBooks);
  router.get("/books/:id", bookController.getBook);
  router.delete("/books/:id", bookController.removeBook);
}

async function startServe(): Promise<any> {
  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());
  console.log("start at 8080");
  await app.listen({ port: 8080 });
}
