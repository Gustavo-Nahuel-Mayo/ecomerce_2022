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
import './img/instrujabon.png';
import './img/Logo.png';
import './img/Onlylogo.png';
import Miel from './img/Miel.png';
import Carbon from './img/Carbon.png';
import Cacao from './img/Cacao.png';



function App() {
  return (
    <div>
      <Navbar/>
      
      <div className="wrapper">
          <Card
              img={Miel}
              title="Avena, Miel y Karité"
              description="Humectante"
              price="600.00"
              info="#instru1" 
              pago="https://www.google.com.ar/"/>
    
          
          <Card
              img={Carbon}
              title="Carbón, Arcilla y Karité"
              description="Exfoliante"
              info="#instru2"
              price="45.00"/>

          <Card
              img={Cacao}
              title="Caléndula, Miel y Cacao"
              description="Humectante y cicatrizante"
              info="#instru3"
              price="45.00"/>
      </div>
        <Separation/>
      <div>
        <Jabones/>

      </div>

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
