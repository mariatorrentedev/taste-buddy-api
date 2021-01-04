function makeUsersArr() {
  return [
    {
      email: "test1234@gmail.com",
      password: "P@ssword1234",
    },
    {
      email: "test4321@gmail.com",
      password: "P@ssword4321",
    },
    {
      email: "test2435@gmail.com",
      password: "P@ssword2435",
    },
  ];
}

function makeUsersArr2() {
  return [
    {
      id: 1,
      email: "test1234@gmail.com",
      password: "P@ssword1234",
    },
    {
      id: 2,
      email: "test4321@gmail.com",
      password: "P@ssword4321",
    },
    {
      id: 3,
      email: "test2435@gmail.com",
      password: "P@ssword2435",
    },
  ];
}

module.exports = { makeUsersArr, makeUsersArr2 };
