import React, { useState, useEffect } from "react";
import { useSetUserContext } from "../contexts/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [email, password]);

  const setUserContext = useSetUserContext();

  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={(e) => {
          setError(null);
          e.preventDefault();
          if (email && password && password.trim() === "password") {
            setUserContext({
              name: "Test User",
              email,
              password,
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <input
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
