const Tabs = ({ children, menuChildren }) => {
  return (
    <>
      <menu>{menuChildren}</menu>
      {children}
    </>
  );
};

export default Tabs;
