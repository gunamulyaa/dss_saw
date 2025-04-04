import { Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

function Sidebar() {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title font-size-20  mb-4 ">
        Sistem Pemilihan Asuransi Kesehatan
      </h4>
      <Nav className="flex-column">
        <Nav.Link href="/" className="sidebar-link">
          <HomeIcon /> Home
        </Nav.Link>
        <Nav.Link href="/about" className="sidebar-link">
          <InfoIcon /> About
        </Nav.Link>
        <Nav.Link href="/contact" className="sidebar-link">
          <MailIcon /> Contact
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
