import Weather from "./components/Weather";

function App() {

  return (
    <div className="app">
      <header className="header">
        
        <div className="container">
          <nav className="nav">
            <h2 className="logo">Weather App</h2>
          </nav>
        </div>

      </header>
      <Weather />
    </div>
  );
}

export default App;
