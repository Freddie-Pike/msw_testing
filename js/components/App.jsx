import { useQuery } from "@apollo/client";
import axios from "axios";
import { gql, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";

const GET_USER_INFO = gql`
  query GetUserInfo {
    user {
      id
      name
    }
  }
`;

function App() {
  const { data } = useQuery(GET_USER_INFO);
  console.log(`data: ${data}`);

  return (
    <ul>
      <li key={data?.user.id}>{data?.user.name}</li>
    </ul>
  );
}

export default App;
