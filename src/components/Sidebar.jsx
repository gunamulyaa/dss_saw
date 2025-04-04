import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

function Sidebar() {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Simple Additive Weighting</h4>
      <br />
      <Nav className="flex-column">
        <Nav.Link href="/" className="sidebar-link">
          <HomeIcon /> Home
        </Nav.Link>
        <Nav.Link href="/about" className="sidebar-link">
          <InfoIcon /> History
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
