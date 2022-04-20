import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./App.css";
import toaster from "./services/toastService";
import logo from './logo.svg';
import './App.css';


/* Get configured redux store */
const store = configureStore();

function App({ children }) {
  return (
    <Provider store={store}>
      <div className="Header">
        <div className="Title">
          <h1>
            Port- Device- Configuration Tool <br></br>(PDCT)
          </h1>
        </div>
      </div>
      <div className="Main">
        <br></br>
        <React.Fragment>
          <toaster.Container />
          <div className="Container">{children}</div>
        </React.Fragment>
      </div>
    </Provider>
  );
}

export default App;