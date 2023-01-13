import './App.css';
import Component from './components/Component';



function App() {
  return (
    <div className="App">
      <Component type={"data"} />
      <Component type={"loading"} />
      <Component type={"error"} />
    </div>
  );
}

export default App;
