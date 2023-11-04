import './App.css'
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import About from './components/About/about.jsx';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import ContactMe from './components/ContacMe/contactMe';

//Toastify lib
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <ToastContainer  role="alert" position="bottom-right" theme="dark" newestOnTop={true} limit={3} transition={Flip}/>
    </>
  )
}

export default App
