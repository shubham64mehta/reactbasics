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
            {CORE_CONCEPTS.map((item) => {
              return <Coreconcepts key={item.title} {...item} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Tabbutton
              isSelected={selectedComponents === "components"}
              onclicking={() => {
                clickHandler("components");
              }}
            >
              components
            </Tabbutton>
            <Tabbutton
              isSelected={selectedComponents === "jsx"}
              onclicking={() => {
                clickHandler("jsx");
              }}
            >
              jSX
            </Tabbutton>
            <Tabbutton
              isSelected={selectedComponents === "props"}
              onclicking={() => {
                clickHandler("props");
              }}
            >
              props
            </Tabbutton>
            <Tabbutton
              isSelected={selectedComponents === "state"}
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
