import React, { useState } from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserContext({ name, email });
        }}
      >
        <input
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
