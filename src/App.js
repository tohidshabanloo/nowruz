import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>در حال راه اندازی</p>
        توسط
        <a
          className="App-link"
          href="https://www.tohidsh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          توحید شعبانلو
        </a>
      </header> */}
    </div>
  );
}

export default App;
