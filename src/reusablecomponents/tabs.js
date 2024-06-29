const Tabs = ({ children, menuChildren, ButtonContainer }) => {
  return (
    <>
      <ButtonContainer>{menuChildren}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
