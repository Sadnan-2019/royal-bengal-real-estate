import './App.css';
import TopNav from './componentes/TopNav/TopNav';
import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
// import Home from './componentes/Home/Home';
 import Nav from './componentes/Navbar/Nav';
const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;
function App() {
  return (
    <div className=" ">
      
    <TopNav></TopNav>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    <TopNav></TopNav>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
