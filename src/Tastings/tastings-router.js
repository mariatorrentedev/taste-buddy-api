const express = require("express");
const TastingsService = require("./tastings-service");
const xss = require("xss");
const { requireAuth } = require("../middleware/jwt-auth");

const tastingsRouter = express.Router();

tastingsRouter
  .route("/")
  .get(requireAuth, (req, res, next) => {
    console.log("called", req.user.id);
    TastingsService.getAllTastings(req.app.get("db"), req.user.id)
      .then((tastings) => res.json(tastings))
      .catch(next);
  })
  .post(requireAuth, (req, res, next) => {
    if (!req.body.winename) {
      res.status(400).json({ error: "Wine Name required" });
    }

    const newtasting = req.body;
    newtasting.userid = req.user.id;

    TastingsService.insertTasting(req.app.get("db"), newtasting)
      .then((tasting) => {
        res.status(201).location(`/tastings/${tasting.id}`).json(tasting);
      })
      .catch(next);
  });

// tastingsRouter
//   .route('/:id')
//   .all((req, res, next) => {
//     TastingsService.getById(
//       req.app.get('db'),
//       req.params.id
//     )
//       .then(tastings => {
//         if (!tasting) {
//           return res.status(404).json({
//             error: { message: `tasting doesn't exist` }
//           });
//         };
//         res.tastings = tastings;
//         next();
//       })
//       .catch(next);
//   })
//   .get((req, res, next) => {
//     res.json({
//       id: res.tastings.id,
//       style: res.tastings.style,
//       title: xss(res.tastings.title), // sanitize title
//       content: xss(res.tastings.content), // sanitize content
//       date_published: res.tastings.date_published,
//     });
//   }).put((req, res, next)=>{
//      const ={} req.body

//     })
//   .delete((req, res, next) => {
//     TastingsService.deletetastings(
//       req.app.get('db'),
//       req.params.id
//     )
//       .then(() => {
//         res.status(204).end();
//       })
//       .catch(next);
//   });

module.exports = tastingsRouter;
