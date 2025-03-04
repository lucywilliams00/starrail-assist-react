import './App.css';
import Characters from './Characters';
import Home from './Home';
import Profile from './Profile';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div id="app-div" className="app">
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <img id="app-brand" src="" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/characters">Characters</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/:code" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
