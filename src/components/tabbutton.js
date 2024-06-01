const Tabbutton = (props) => {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onclicking}
      >
        {props.children}
      </button>
    </li>
  );
};

export default Tabbutton;
