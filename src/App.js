import logo from './logo.svg';
import './App.css';
import Translator from './components/Translator';

const TRANSLATIONS = new Map([
  ['ball', 'pelota'],
  ['house', 'casa'],
  ['dog', 'perro'],
  ['dogs', 'perros'],
  ['milk', 'leche'],
  ['orange', 'naranja'],
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Translator translations={TRANSLATIONS} />
      </header>
    </div>
  );
}

export default App;
