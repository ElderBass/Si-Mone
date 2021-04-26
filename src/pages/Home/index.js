import React from "react";
import Header from "../../components/Header";
import Whispers from "../../components/AlbumContainers/Whispers";
import AllThings from "../../components/AlbumContainers/AllThings";


import './style.css'

const HomePage = (props) => {
  return (
    <div className="homePage">
      <Header />
      <Whispers />
      <AllThings/>
    </div>
  );
};

export default HomePage;
