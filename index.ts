import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
const app = new Application();

const users = [
  { id: 1, firstName: "John", lastName: "Wick", age: 41 },
  { id: 2, firstName: "Joe", lastName: "Doe", age: 35 },
  { id: 3, firstName: "Brad", lastName: "Pitt", age: 50 },
];

function getById(id: number): any {
  return users.filter((user) => user.id == id);
}

router.get("/", (context) => {
  context.response.body = "Welcome to Oak example with Deno!";
});

router.get("/users", (context) => {
  context.response.body = { users: users };
});

router.get("/users/:id", (context) => {
  const result = getById(Number(context.params.id));
  if (result.length > 0) {
    context.response.body = result[0];
  } else {
    context.response.status = 404;
    context.response.body = { error: `User ${context.params.id} not found` };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
console.log("start at 8080");
await app.listen({ port: 8080 });
