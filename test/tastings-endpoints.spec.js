// const { expect } = require("chai");
// const knex = require("knex");
// const supertest = require("supertest");
// const app = require("../src/app");
// const { maketastingsArray, makeMaliciousTasting } = require("./tastings.fixtures");

// describe("Tasting endpoints", () => {
//   let db;

//   before("make knex instance", () => {
//     db = knex({
//       client: "pg",
//       connection: process.env.TEST_DB_URL
//     });
//     app.set("db", db);
//   });

//   before("clean the table", () => db("tastings").truncate());

//   after("disconnect from db", () => db.destroy());

//   afterEach("cleanup", () => db("tastings").truncate());

//   describe("GET /tastings", () => {
//     context(`Given no tastings`, () => {
//       it(`responds with 200 and an empty list`, () => {
//         return supertest(app).get("/tastings").expect(200, []);
//       });
//     });

//     context("Given there are tastings in the database", () => {
//       const testtastings = maketastingsArray();

//       beforeEach("insert tastings", () => {
//         return db.into("tastings").insert(testtastings);
//       });

//       it("GET /tastings responds with 200 and all tastings", () => {
//         return supertest(app).get("/tastings").expect(200, testtastings);
//       });
//     });

//     context(`Given an XSS attack Tasting`, () => {
//       const maliciousTasting = makeMaliciousTasting();

//       beforeEach('insert malicious Tasting', () => {
//         return db
//           .into('tastings')
//           .insert([ maliciousTasting ]);
//       });

//       it('removes XSS attack content', () => {
//         return supertest(app)
//           .get(`/tastings`)
//           .expect(200)
//           .expect(res => {
//             expect(res.body[0].title).to.eql('Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;');
//             expect(res.body[0].content).to.eql(`Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`);
//           });
//       });
//     });
//   });

//   describe("POST /tastings", () => {
//     it("creates an tastings, responds with 201 and the new Tasting", function() {
//       this.retries(3);
//       const newTasting = {
//         title: "Test new Tasting",
//         style: "Listicle",
//         content: "Test new Tasting content..."
//       };
//       return supertest(app)
//         .post("/tastings")
//         .send(newTasting)
//         .expect(201)
//         .expect((res) => {
//           expect(res.body.title).to.eql(newTasting.title);
//           expect(res.body.style).to.eql(newTasting.style);
//           expect(res.body.content).to.eql(newTasting.content);
//           expect(res.body).to.have.property("id");
//           expect(res.headers.location).to.eql(`/tastings/${res.body.id}`);
//           const expected = new Date().toLocaleDateString();
//           const actual = new Date(res.body.date_published).toLocaleDateString();
//           expect(actual).to.eql(expected);
//         })
//         .then((postRes) =>
//           supertest(app)
//             .get(`/tastings/${postRes.body.id}`)
//             .expect(postRes.body)
//         );
//     });

//     const fields = ['title', 'style', 'content'];
//     fields.forEach(field => {
//       const newTasting = {
//         title: "Test new Tasting",
//         style: "Listicle",
//         content: "Test new Tasting content..."
//       };
//       it(`responds with 400 and an error message when ${field} field is missing`, () => {
//         delete newTasting[field];
//         return supertest(app)
//           .post('/tastings')
//           .send(newTasting)
//           .expect(400, {
//             error: {message: `Missing ${field} in request body`}
//           });
//       });
//     });

//     context(`When an XSS attack Tasting is put in, Tasting is sanitized right away`, () => {
//       const maliciousTasting = makeMaliciousTasting();

//       it('removes XSS attack content', () => {
//         return supertest(app)
//           .post(`/tastings`)
//           .send(maliciousTasting)
//           .expect(201)
//           .expect(res => {
//             expect(res.body.title).to.eql('Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;');
//             expect(res.body.content).to.eql(`Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`);
//           });
//       });
//     });
//   });

//   describe("GET /tastings/:id", () => {
//     context(`Given no tastings`, () => {
//       it(`responds with 404`, () => {
//         const TastingId = 123456;
//         return supertest(app)
//           .get(`/tastings/${TastingId}`)
//           .expect(404, { error: { message: `Tasting doesn't exist` } });
//       });
//     });

//     context("Given there are tastings in the database", () => {
//       const testtastings = maketastingsArray();

//       beforeEach("insert tastings", () => {
//         return db.into("tastings").insert(testtastings);
//       });

//       it("GET /tastings/:id responds with 200 and the specified Tasting", () => {
//         const TastingId = 3;
//         const expected = testtastings[TastingId - 1];
//         return supertest(app)
//           .get(`/tastings/${TastingId}`)
//           .expect(200, expected);
//       });
//     });

//     context(`Given an XSS attack Tasting`, () => {
//       const maliciousTasting = makeMaliciousTasting();

//       beforeEach('insert malicious Tasting', () => {
//         return db
//           .into('tastings')
//           .insert([ maliciousTasting ]);
//       });

//       it('removes XSS attack content', () => {
//         return supertest(app)
//           .get(`/tastings/${maliciousTasting.id}`)
//           .expect(200)
//           .expect(res => {
//             expect(res.body.title).to.eql('Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;');
//             expect(res.body.content).to.eql(`Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`);
//           });
//       });
//     });
//   });

//   describe.only(`DELETE /tastings/:Tasting_id`, () => {
//     context(`Given no tastings`, () => {
//       it(`responds with 404`, () => {
//         const TastingId = 123456;
//         return supertest(app)
//           .delete(`/tastings/${TastingId}`)
//           .expect(404, { error: { message: `Tasting doesn't exist` } });
//       });
//     });

//     context('Given there are tastings in the database', () => {
//       const testtastings = maketastingsArray();

//       beforeEach('insert tastings', () => {
//         return db
//           .into('tastings')
//           .insert(testtastings);
//       });

//       it('responds with 204 and removes the Tasting', () => {
//         const idToRemove = 2;
//         const expectedtastings = testtastings.filter(Tasting => Tasting.id !== idToRemove);
//         return supertest(app)
//           .delete(`/tastings/${idToRemove}`)
//           .expect(204)
//           .then(res =>
//             supertest(app)
//               .get(`/tastings`)
//               .expect(expectedtastings)
//           );
//       });
//     });
//   });
// });
