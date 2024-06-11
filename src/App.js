import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project-details" element={
            <>
            <NavBar/>
            <ProjectDetails />
            </>
            } />

          <Route path="/login" element={
            <>
              <NavBar/>
              <Login/>
            </>
          }/>
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
