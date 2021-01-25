import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./app.scss";

function App() {
  const [classMembers, setClassMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/class_members/1");
      setClassMembers(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.classSidebar}></div>
      <div className={styles.messageSection}></div>
      <div className={styles.classList}>
        <ul>
          {classMembers?.users?.length > 0 ? (
            classMembers?.users?.map((classMember) => (
              <li key={classMember.id}>{classMember.name}</li>
            ))
          ) : (
            <div>loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
