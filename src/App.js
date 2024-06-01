import { useState } from "react";
import "./App.css";
import Coreconcepts from "./components/coreconcept";
import Header from "./components/header";
import Tabbutton from "./components/tabbutton";
import { CORE_CONCEPTS } from "./data/data";

function App() {
  const [selectedComponents, setSelectedComponents] = useState("Please click");

  function clickHandler(selectedComponents) {
    setSelectedComponents(selectedComponents);
  }
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
          <menu>
            <Tabbutton
              onclicking={() => {
                clickHandler("components");
              }}
            >
              Components
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("JSX");
              }}
            >
              JSX
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("Props");
              }}
            >
              Props
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("State");
              }}
            >
              {" "}
              State
            </Tabbutton>
          </menu>
          {selectedComponents}
        </section>
      </main>
    </div>
  );
}

export default App;
