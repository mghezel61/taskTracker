import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onClick, showAdd }) => {
  return (
    <>
      <header className="header">
        <h1>task Tracker</h1>
        {useLocation().pathname === "/" && (
          <Button
            title={showAdd ? "Hide Add" : "Show Add"}
            color="white"
            bgColor={showAdd ? "red" : "green"}
            onClick={onClick}
          />
        )}
      </header>
    </>
  );
};

export default Header;
