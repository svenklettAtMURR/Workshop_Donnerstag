import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IOL_Master from "./components/IOL_Master";


/* Get configured redux store */
const store = configureStore();

//Sample data (object) - will be removed later and read from server
//(No native “Dictionary” data type in js)
const iol_master = {
  tag: "example tag",
  macAddress: "0000",
  serialNumber: "----",
  productId: "----",
  vendorName: "----",
  productName: "----",
  hardwareRevision: "----",
  firmwareRevision: "----",
  productInstanceUri: "----"
};

ReactDOM.render(
  <React.StrictMode>
    <App>
      <IOL_Master iol_master_data={iol_master}></IOL_Master>
    </App>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();