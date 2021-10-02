import Weather from "./components/Weather";

function App() {

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h2 className="logo">Weather App</h2>
        </nav>
      </header>
      <Weather />
    </div>
  );
}

export default App;
