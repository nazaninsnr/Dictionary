import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunshine" />
        </main>
        <footer className="Footer">
          <a
            href="https://github.com/nazaninsnr/Dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open source code{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://linkedin.com/in/nazaninnaghavi"
            target="_blank"
            rel="noreferrer"
          >
            Nazanin Naghavi
          </a>
        </footer>
      </div>
    </div>
  );
}
