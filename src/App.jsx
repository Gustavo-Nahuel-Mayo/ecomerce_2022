import Card from "./components/Cards";
import Footer from "./components/Footer";
import Jabones from "./components/Jabones";
import Navbar from "./components/Navbar";
import Primera from "./components/Primera";
import Separation from "./components/Separation";
import './Css/index.css';
import './Css/footer.css';
import './Css/cards.css';
import './Css/infojabones.css';
import './Css/inicio.css';
import './Css/separation.css';
import "./Css/navbar.css";
import './img/instrujabon.png';
import './img/Logo.png';
import './img/Onlylogo.png';
import './Css/divisores.css';
import Miel from './img/Miel.png';
import Carbon from './img/Carbon.png';
import Cacao from './img/Cacao.png';
import Cajon from './img/Cajon.png';
import Cajon2 from './img/Cajon2.png';
import Infocards from "./components/Infocards";
import Barra from "./components/Barra";
import BurguerButton from "./components/BurguerButton";
import Division from "./components/Division";



function App() {
  return (
    <div>
      
      
      <Navbar/>
      <Barra>
        <BurguerButton/>
      </Barra>
    <Division/>
      <div className="wrapper">
          <Card
              img={Miel}
              title="Avena, Miel y Karité"
              description="Humectante"
              price="600"
              info="#instru1" 
              pago="https://www.google.com.ar/"/>
    
          
          <Card
              img={Carbon}
              title="Carbón, Arcilla y Karité"
              description="Exfoliante"
              info="#instru2"
              price="600"/>

          <Card
              img={Cacao}
              title="Caléndula, Miel y Cacao"
              description="Humectante y cicatrizante"
              info="#instru3"
              price="600"/>

          <Card
              img={Cajon}
              title="Combo Facial"
              description="Vincha, Esponjas, Jabones artesanales"
              info="#instru4"
              price="3.500"/>
      
          <Card
              img={Cajon2}
              title="Combo Ducha"
              description="Esponjas, Jabones y Piedra pomes"
              info="#instru5"
              price="3.500"/>
      </div>
        <Separation/>


      <Footer/>
    </div>
      
  
  

      
  )
  





}

window.onscroll = function() {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var rotacion = window.pageYOffset || document.documentElement.scrollWidth;


  var elemento1 = document.getElementById("navbarimg");
  var elemento3 = document.getElementById("cardid");
  
  elemento1.style.bottom = posicion * 0.3 + "px";
  elemento3.style.bottom = posicion * 0.3 + "px";

}


export default App
