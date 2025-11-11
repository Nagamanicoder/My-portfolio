import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';



function Navigationbar(){
    return (
    <>
      <div className='nav-bar'>
        <Navbar  fixed="top" data-bs-theme="dark" className="navbar-border">
          <Container>
            <Navbar.Brand href="#home" className='nav-text-heading'>
              My Portfolio
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='nav-text'>Home</Nav.Link>
              <Nav.Link href="#Skills" className='nav-text'>Skills</Nav.Link>
              <Nav.Link href="#Projects" className='nav-text'>Projects</Nav.Link>
              <Nav.Link href="#Contact" className='nav-text'>Contact</Nav.Link>
              <Nav.Link href="public/resume.pdf" target="_blank" rel="noreferrer" className='nav-text'>Resume</Nav.Link>
              {/* <Nav.Link href="#Blogs" className='nav-text'>Blogs</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navigationbar;