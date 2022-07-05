import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="divine" />
        </main>
        <footer className="App-footer">
          <small>Coded by Nazanin Naghavi</small>
        </footer>
      </div>
    </div>
  );
}
