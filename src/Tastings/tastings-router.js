const express = require("express");
const TastingsService = require("./tastings-service");
const xss = require("xss");

// const tastingsRouter = express.Router();

// tastingsRouter
//   .route("/")
//   .get((req, res, next) => {
//     TastingsService.getAllTastings(req.app.get('db'))
//       .then((tastings) => {
//         if (tastings.length !== 0) {
//           tastings = tastings.map(tastings => {
//             return {
//               id: tastings.id,
//               wineName: tastings.wineName,
//               producer: xss(tastings.producer), // sanitize producer
//               varietal: xss(tastings.varietal), // sanitize varietal
//               region: tastings.region,
//             };
//           });
//         }
//         return tastings;
//       })
//       .then(tastings => res.json(tastings))
//       .catch(next);
//   })
//   .post((req, res, next) => {
//     const { wineName,producer,varietal,vintage,region,condition,concentration,colorRed, colorWhite, colorRose, rim,extract,tearing,
//      gas,
//      conditionNose,
//      intensity,
//      ageAssessment,
//      fruitRed,
//      fruitWhite,
//      fruitRose,
//      sweetness,
//      fruitFRed,
//      fruitFWhite,
//      fruitFRose,
//      nonFruit,
//      earth,
//      mineral,
//      tannins,
//      acidity,
//      alcohol,
//      complexity,
//      length,
//      body,
//      texture,
//      woodAge,
//      woodSize,
//      woodOrigin,
//      comments,
//      score } = req.body;
//     let newtasting = {
//       title, content, style
//     };

//     for (const [key, value] of Object.entries(newtastings)) {
//       if(value == null) {
//         return res.status(400).json({
//           error: { message: `Missing ${key} in request body` }
//         });
//       }
//     }

//     newTasting = {
//       title: xss(title),
//       content: xss(content),
//       style
//     };

//     TastingsService.inserttastings(
//       req.app.get('db'),
//       newtastings
//     )
//       .then(tastings => {
//         res
//           .status(201)
//           .location(`/tastings/${tastings.id}`)
//           .json(tastings);
//       })
//       .catch(next);
//   });

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
//   })
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

// module.exports = tastingsRouter;
