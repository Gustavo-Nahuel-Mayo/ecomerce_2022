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
              pago="https://www.google.com.ar/"/>
    
          
          <Card
              img="https://content21.sabervivirtv.com/medio/2022/03/08/avena-guia-alimentos_c8b225af_1280x720.jpg"
              title="Exfoliante de Avena"
              description="Pieles grasas"
              price="45.00"/>

          <Card
              img="https://www.caracteristicas.co/wp-content/uploads/2017/05/azufre-8-e1569860188258.jpg"
              title="Jabon de Azufre"
              description="Psoriasis"
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

export default App
