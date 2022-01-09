import Reports from 'layouts/Reports';
import { Nav, Navbar } from 'react-bootstrap';
import './App.scss';
import styles from './App.module.scss';

const AppNavbar = (
  <Navbar className={styles.App__appNavbar}>
    <Navbar.Brand href="#home" className={styles.App__appNavbar__mainIcon}>
      <img src="/img/app-icon-main.svg" alt="App icon main" />
    </Navbar.Brand>
    <Navbar.Text className={styles.App__appNavbar__secondaryIcon}>
      <img src="/img/app-icon-secondary.svg" alt="App icon secondary" />
    </Navbar.Text>
    <div className={styles.App__appNavbar__userAvatar}>JD</div>
    <div className={styles.App__appNavbar__userName}>John Doe</div>
  </Navbar>
);

const SideNavbar = (
  <Nav className={styles.App__sideNavbar}>
    <Nav.Link href="#" className={styles.App__sideNavbar__item}>
      <img src="/img/nav-item-1-icon.svg" alt="Nav icon 1" />
    </Nav.Link>
    <Nav.Link href="#" className={styles.App__sideNavbar__item}>
      <img src="/img/nav-item-2-icon.svg" alt="Nav icon 2" />
    </Nav.Link>
    <Nav.Link href="#" className={styles.App__sideNavbar__item}>
      <img src="/img/nav-item-3-icon.svg" alt="Nav icon 3" />
    </Nav.Link>
    <Nav.Link href="#reports" className={styles.App__sideNavbar__item}>
      <img src="/img/nav-item-reports-icon.svg" alt="Nav icon reports" />
    </Nav.Link>
    <Nav.Link href="#" className={styles.App__sideNavbar__item}>
      <img src="/img/nav-item-5-icon.svg" alt="Nav icon 5" />
    </Nav.Link>
  </Nav>
);

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
