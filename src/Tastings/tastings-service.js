// const TastingsService = {
//   getAllTastings(db) {
//     return db
//       .select('*')
//       .from('tastings');
//   },
//   insertTasting(db, newTasting) {
//     return db
//       .insert(newTasting)
//       .into('tastings')
//       .returning('*')
//       .then(rows => {
//         return rows[0];
//       });
//   },
//   getById(db, id) {
//     return db
//       .select('*')
//       .from('tastings')
//       .where({ id: id })
//       .first();
//   },
//   deleteTasting(db, id) {
//     return db
//       .from('tastings')
//       .where({ id })
//       .delete();
//   },
//   updateTasting(db, id, newData) {
//     return db
//       .from('tastings')
//       .where({ id })
//       .update(newData);
//   }
// };

// module.exports = TastingsService;
