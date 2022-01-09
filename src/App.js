import logo from './logo.svg';
import './App.scss';
import Reports from 'layouts/Reports';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';

const AppNavbar = <Navbar className="App__appNavbar">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
</Navbar>

const SideNavbar = <Nav className="App__sideNavbar">
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
    <div className="App">
      {AppNavbar}
      <div className="App__innerContainer">
        {SideNavbar}
        <Reports />
      </div>
    </div>
  );
}

export default App;
