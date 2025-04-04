import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h4 className="title">DSS SAW</h4>
      <Nav className="nav-links">
        <Nav.Link href="/" className="text-white">Home</Nav.Link>
        <Nav.Link href="/about" className="text-white">About</Nav.Link>
        <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
