# TASTEBUDDY API

## Created for [TasteBuddy Client](https://taste-buddy-client.vercel.app/)

### Full Stack Application using Express, Knex, NodeJS and REACT.

---

### API ENDPOINTS

```
/api/auth
-- POST - login user

/api/users
-- GET - get the user
-- POST - register a user

/api/tastings
-- GET - get all tastings using auth middleware to depend on the user session for the data.
-- POST - create a tasting by userId in tastings table.

/api/tastings/:id
-- DELETE - Delete the specific tasting depending on the userId relation.

-- PUT  - Edit the specific tasting by tastingId in user session.
```

This is the server-side of TasteBuddy App which uses Node/Express to build the API, and PostgreSQL/Knex for the database setup.
