const users = [
  {
    email: "atapas@email.com",
    password: "password"
  },
  {
    email: "alex@email.com",
    password: "password"
  },
  {
    email: "bob@email.com",
    password: "password"
  },
  {
    email: "test@test.com",
    password: "Test@123"
  }
]

export const getUserByEmail = (email) => {
  const found = users.find(user => user.email === email);
  return found;
}