import reactImg from "../assets/react-core-concepts.png";

const Header = () => {
  return (
    <div>
      <header>
        <img alt="Stylized atom" src={reactImg}></img>
        <h1>React Essentials</h1>
        <p>
          Fundamental react concepts that you will be needing for building
          almost all the apps
        </p>
      </header>
      <main>
        <h2>Time to get started</h2>
      </main>
    </div>
  );
};

export default Header;
