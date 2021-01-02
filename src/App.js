import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app__wrapper">
      <Header/>
      <Navbar />
      <div className='app__wrapper__content'>
        <Dialogs/>
        <Profile/>
      </div>
      {/* <Profile/> */}
     
    </div>
  );
};

export default App;
