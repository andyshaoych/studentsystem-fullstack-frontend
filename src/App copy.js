import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import ResponsiveAppBar from './components/ResAppbar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      This is Andy Codes.
      <ResponsiveAppBar/>
      
    </div>
  );
}

export default App;
