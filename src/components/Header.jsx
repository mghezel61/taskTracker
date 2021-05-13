import Button from "./Button";

const Header = () => {
  const onClick = (e) => console.log(e.target);
  return (
    <>
      <header className="header">
        <h1>task Tracker</h1>
        <Button title="Add" color="white" bgColor="Green" onClick={onClick} />
      </header>
    </>
  );
};

export default Header;
