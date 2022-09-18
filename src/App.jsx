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



function App() {
  return (
    <div>
      <Navbar/>
      
      <div className="wrapper">
          <Card
              img="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PJFAUAH7WBG5HMSYVUJTQHPO3M.jpg"
              title="Humectante Naturaleza"
              description="Pieles secas"
              price="600.00"
              info="#instru1" 
              pago="https://www.google.com.ar/"/>
    
          
          <Card
              img="https://content21.sabervivirtv.com/medio/2022/03/08/avena-guia-alimentos_c8b225af_1280x720.jpg"
              title="Exfoliante de Avena"
              description="Pieles grasas"
              info="#instru2"
              price="45.00"/>

          <Card
              img="https://www.caracteristicas.co/wp-content/uploads/2017/05/azufre-8-e1569860188258.jpg"
              title="Jabon de Azufre"
              description="Psoriasis"
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

  var elemento1 = document.getElementById("navbarimg");
  
  var elemento3 = document.getElementById("cardid");
  
  elemento1.style.bottom = posicion * 0.3 + "px";
  
  elemento3.style.bottom = posicion * 0.3 + "px";

}


export default App
