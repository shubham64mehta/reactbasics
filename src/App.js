import { useState } from "react";
import "./App.css";
import Coreconcepts from "./components/coreconcept";
import Header from "./components/header";
import Tabbutton from "./components/tabbutton";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data";

function App() {
  const [selectedComponents, setSelectedComponents] = useState();

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
              components
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("jsx");
              }}
            >
              jSX
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("props");
              }}
            >
              props
            </Tabbutton>
            <Tabbutton
              onclicking={() => {
                clickHandler("state");
              }}
            >
              state
            </Tabbutton>
          </menu>
          {/* this is for rendiering data conditionally */}
          {!selectedComponents && <p>Please select the topic</p>}
          {selectedComponents && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedComponents].title}</h3>
              <p>{EXAMPLES[selectedComponents].description}</p>
              <pre>
                <code>{EXAMPLES[selectedComponents].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
