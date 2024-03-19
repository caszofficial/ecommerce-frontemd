import { Link } from "react-router-dom";
import LogInButton from "../../Auth/LogInButton";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <LogInButton />
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
