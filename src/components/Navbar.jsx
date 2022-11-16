import React ,{useState , useEffect} from 'react'
import {Container ,Nav ,Navbar, NavDropdown} from 'react-bootstrap';

const Navbar1 = () => {
  const [activeLink , setActivateLink] = useState('home') ;
  const [scrolled , setScrolled] = useState(false) ;
  useEffect(()=>{
    const onScroll = () =>{
      if(window.screenY > 50){
        setScrolled(true) ; 
      }else {
        setScrolled(false)
      }
    } 
      window.addEventListener('scroll' , onScroll) ; 
      
      return () => window.removeEventListener("scroll" , onScroll) ;   
  },[])
  const onUpdateActivateLink = (link) => {
    setActivateLink(link) ;
  }
  return (
    <Navbar bg="dark" className={scrolled ? 'scrolled' : ''}>
      <Container>
          <Navbar.Brand href="#home">
            <img src={''} alt={'logo'} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActivateLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActivateLink('skills')}>projects</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActivateLink('projects')}>projects</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                  <a href="#"><img src={''} alt=""/></a>
                  <a href="#"><img src={''} alt=""/></a>
                  <a href="#"><img src={''} alt=""/></a>
                </div>
              <button className='vvd' onClick={()=>console.log('connect')}>
                <span>Let's Connect</span>
              </button>
              </span>
          </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Navbar1