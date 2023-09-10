import logo from "./logo.svg";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
function App() {
  const ex = [];
  for (let i = 0; i <= 10; i++) {
    ex.push("Example " + i);
  }
  return (
    <div className="App">
      {ex.map((item, key) => {
        return <ExampleComponent example={item} key={key} />;
      })}
    </div>
  );
}

export default App;
