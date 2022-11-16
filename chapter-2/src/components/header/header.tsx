import Link from '../link/link';
import { Link as RouterLink } from 'react-router-dom';
import './header.css';
type PropsType = {
  logo: string;
};
function Header({ logo }: PropsType) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My portifolio</h1>
      <nav>
        <RouterLink to="/" className="App-link">
          About me
        </RouterLink>
        <RouterLink to="/projects" className="App-link">
          Projects
        </RouterLink>
      </nav>
    </header>
  );
}
export default Header;
