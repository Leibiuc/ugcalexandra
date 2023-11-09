import spinner from "./assets/spin.png";
import aleAlbastru from "./assets/alealbastru.png";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.instagram.com/_alexandra_anca_/" target="_blank">
          <img src={aleAlbastru} className="logo" alt="React logo" />
        </a>

        <a href="https://www.instagram.com/_alexandra_anca_/" target="_blank">
          <img src={spinner} className="logo react" alt="Vite logo" />
        </a>
      </div>
      <h1>UGC ALEXANDRA</h1>
      <div className="card">
        <p>Welcome to my presentation site</p>
      </div>
    </>
  );
}

export default App;
