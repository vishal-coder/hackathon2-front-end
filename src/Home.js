import React from "react";
import CreateUser from "./components/CreateUser";
import NavHeader from "./components/NavHeader";

function Home() {
  return (
    <div>
      <NavHeader />
      <CreateUser />
    </div>
  );
}

export default Home;
