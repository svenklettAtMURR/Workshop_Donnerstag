import logo from './logo.svg';
import './App.css';


export default function App({ children }) {
  return (
    <div>
      <div className="Header">
        <div className="Title">
          <h1>
            Port- Device- Configuration Tool <br></br>(PDCT)
          </h1>
        </div>
      </div>
      <div className="Main">
        <br></br>
        <div className="Container">{children}</div>
      </div>
    </div>
  );
}