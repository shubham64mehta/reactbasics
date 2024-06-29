import { useState } from "react";
import "./App.css";
import Coreconcepts from "./components/coreconcept";
import Header from "./components/header";
import Tabbutton from "./components/tabbutton";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data";
import Section from "./reusablecomponents/section";
import Tabs from "./reusablecomponents/tabs";

function App() {
  const [selectedComponents, setSelectedComponents] = useState();

  const tabMenuElements = (
    <>
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
    </>
  );

  function clickHandler(selectedComponents) {
    setSelectedComponents(selectedComponents);
  }
  return (
    <div>
      <Header />
      <main>
        <Section title="Core" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <Coreconcepts key={item.title} {...item} />;
            })}
          </ul>
        </Section>
        <Section id="examples" title="Examples">
          <Tabs menuChildren={tabMenuElements}>
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
          </Tabs>
        </Section>
      </main>
    </div>
  );
}

export default App;
