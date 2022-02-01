import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section index="0" />
      <Section index="1" />
      <Section index="2" />
      <Section index="3" />
      <Section index="4" />
      <Section index="5" />
    </div>
  );
}

export default App;
