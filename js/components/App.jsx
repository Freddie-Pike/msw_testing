import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/users/1");
      setUser(response.data.user);
    };

    fetchData();
  }, []);

  return (
    <ul>
      <li key={user?.id}>{user?.name}</li>
    </ul>
  );
}

export default App;
