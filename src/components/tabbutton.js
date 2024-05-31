const Tabbutton = (props) => {
  return (
    <li>
      <button onClick={props.onclicking}>{props.children}</button>
    </li>
  );
};

export default Tabbutton;
