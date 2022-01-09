import logo from './logo.svg';
import Reports from 'layouts/Reports';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import './App.scss';
import styles from './App.module.scss';

const AppNavbar = <Navbar className={styles.App__appNavbar}>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
</Navbar>

const SideNavbar = <Nav className={styles.App__sideNavbar}>
  <Nav.Link href="#">
    one
  </Nav.Link>
  <Nav.Link href="#">
    one
  </Nav.Link>
  <Nav.Link href="#">
    one
  </Nav.Link>
  <Nav.Link href="#">
    one
  </Nav.Link>
  <Nav.Link href="#">
    one
  </Nav.Link>
</Nav>

function App() {
  return (
    <div className={styles.App}>
      {AppNavbar}
      <div className={styles.App__innerContainer}>
        {SideNavbar}
        <Reports />
      </div>
    </div>
  );
}

export default App;
