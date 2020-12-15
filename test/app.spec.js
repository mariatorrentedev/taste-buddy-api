const supertest = require("supertest");
const app = require("../src/app");
const returnSomething = require("./tastings.fixtures");

describe("App", () => {
  it('GET / responds with 200 containing "Hello, TasteBuddy API!"', () => {
    const expected = returnSomething();
    return supertest(app).get("/api").expect(200, expected);
  });
});
