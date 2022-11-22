import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";



function Navbarcomponente() {
  const { store, actions } = useContext(Context);

  function deleteFavorito(index) {
    actions.borrarFavoritos(index);

  }

  return (
    <>
      <Navbar style={{ background: "#888a8a", border: "#9b9b9b 5px solid" }}>
        <Container className='barra'>
          <Navbar.Brand href="#home">
            <img className='logo' src='https://www.pngfind.com/pngs/m/156-1563751_kawaii-stickers-cute-sticker-chibi-adorable-png-anime.png' />
          </Navbar.Brand>

          <h2 style={{ textshadow: "2px 2px 4px", color: "white" }}>Angélica Maliqueo</h2>

          < Link to="/InformacionPersonaje" >
            <Button variant="secondary" style={{ marginLeft: "140px" }}>Informanción</Button>{' '}
          </Link>

          < Link to="/Curriculum" >
          <Button variant="secondary" style={{ marginLeft: "140px" }}>Curriculum</Button>{' '}
          </Link>

          < Link to="/Proyectos" >
            <Button variant="secondary" style={{ marginLeft: "140px" }}>Poyectos</Button>{' '}
          </Link>

          < Link to="/Card">
            <Button variant="secondary" style={{ marginLeft: "140px" }}>Home</Button>{' '}
          </Link>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>

            </Navbar.Text>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbarcomponente;