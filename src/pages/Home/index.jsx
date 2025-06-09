import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./style.css";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <img src="./backgound-image.png" alt="backgound-image" />
      </div>
    </>
  );
}

export default Home;
