import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [passsword, setPasssword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, passsword });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="username"
      />
      <input
        type="text"
        onChange={(e) => setPasssword(e.target.value)}
        value={passsword}
        placeholder="passsword"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
