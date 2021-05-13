import Button from "./Button";

const Header = ({ onClick }) => {
  return (
    <>
      <header className="header">
        <h1>task Tracker</h1>
        <Button title="Hide" color="white" bgColor="red" onClick={onClick} />
      </header>
    </>
  );
};

export default Header;
