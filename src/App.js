import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__wrapper__content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.messagePage}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
