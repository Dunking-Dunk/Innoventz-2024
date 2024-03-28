import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import logo from "../../assets/logo.png";
import instagramIcon from "../../assets/images/nav-icon1.svg";

const Footer1 = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
            <p style={{ fontSize: '1.5rem', opacity: 0.6 }}>Copyright 2024 Innoventz. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer1;
