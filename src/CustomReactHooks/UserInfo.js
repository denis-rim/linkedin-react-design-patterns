// import { useCurrentUser } from "./useCurrentUser";
// import { useUser } from "./useUser";

import { useResource } from "./ueResource";

export const UserInfo = ({ userId }) => {
  // const user = useUser(userId);
  const user = useResource(`/users/${userId}`);
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
