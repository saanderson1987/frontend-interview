import React, { useState } from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();

  const [inEditMode, setInEditMode] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  return (
    <div>
      <h1>Profile</h1>
      {inEditMode ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInEditMode(false);
            setUserContext({ name, email });
          }}
        >
          <div>
            <label>
              <span>E-mail:</span>
              <input
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Name:</span>
              <input
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>E-mail: {user.email}</div>
          <div>Name: {user.name}</div>
          <button onClick={() => setInEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Profile;
