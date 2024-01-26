export type User = {
  firstName: string;
  lastName: string;
};

async function getUser() {
  console.log('fetching user', fetch);
  const response = await fetch('https://api.example.com/user');
  return (await response.json()) as User;
}

export async function User() {
  const user = await getUser();
  return (
    <>
      {user.firstName} {user.lastName}
    </>
  );
}

export default User;
