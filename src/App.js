import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';

function App() {
  
  const onInsert = () => {
    console.log('😊😊😊');
  }

  return (
    <div className="App">
      <TodoForm onInsert={onInsert} />
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
    </div>
  );
}

export default App;
