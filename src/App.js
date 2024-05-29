import "./App.css";
import Coreconcepts from "./components/coreconcept";
import Header from "./components/header";
import Tabbutton from "./components/tabbutton";
import { CORE_CONCEPTS } from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core</h2>
          <ul>
            <Coreconcepts {...CORE_CONCEPTS[0]} />
            <Coreconcepts {...CORE_CONCEPTS[1]} />
            <Coreconcepts {...CORE_CONCEPTS[2]} />
            <Coreconcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <main>
            <Tabbutton>Components</Tabbutton>
            <Tabbutton>JSX</Tabbutton>
            <Tabbutton>Props</Tabbutton>
            <Tabbutton>State</Tabbutton>
          </main>
        </section>
      </main>
    </div>
  );
}

export default App;
