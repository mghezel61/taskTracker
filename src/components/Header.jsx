import Button from "./Button";

const Header = ({ onClick, showAdd }) => {
  console.log({ showAdd });
  return (
    <>
      <header className="header">
        <h1>task Tracker</h1>
        <Button
          title={showAdd ? "Hide Add" : "Show Add"}
          color="white"
          bgColor={showAdd ? "red" : "green"}
          onClick={onClick}
        />
      </header>
    </>
  );
};

export default Header;
