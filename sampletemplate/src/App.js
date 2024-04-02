import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Service from './Service';
import About from './Component/About';
import {Component} from 'react'
import Menu from './Component/Menu';
import Reservation from './Component/Reservation';
import Team from './Component/Team';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';

class App extends Component{
  render(){
    return<>
      <Navbar/>
      <Service/>
      <About/>
      <Menu/>
      <Reservation/>
      <Team/>
      <Testimonial/>
      <Footer/>
      </>
  }
}

export default App;
