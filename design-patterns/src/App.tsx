import "./App.css";
import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import React from "react";

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo user={null} />
    </CurrentUserLoader>
  );
}

export default App;
