import "./App.css";
// import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import React from "react";
// import { UserLoader } from "./components/user-loader";
// import { ResourceLoader } from "./components/resource-loader";
import axios from "axios";
// import { UserLoader } from "./components/user-loader";
// import { BookInfo } from "./components/book-info";
import { DataResourceWithRender } from "./components/data-resource-with-render";
import { DataResource } from "./components/data-resource";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = async (key) => {
  return localStorage.getItem(key);
};

const Message = ({ message }) => {
  return <h1>{message}</h1>;
};

function App() {
  return (
    <>
      <DataResourceWithRender
        getData={() => getDataFromServer("/users/3")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataResource
        getData={() => getDataFromLocalStorage("message")}
        resourceName="message"
      >
        <Message message={null} />
      </DataResource>
    </>
  );
}

export default App;
