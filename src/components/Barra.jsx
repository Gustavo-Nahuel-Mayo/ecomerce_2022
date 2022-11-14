import React, {useState} from "react"; 
import BurguerButton from "./BurguerButton";

function Barra() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return(
        <>
            <div id="barra">
                <h2>Navbar</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                   <a className="a" href="/">Home</a>
                   <a className="a" href="/">Carta</a>
                   <a className="a" href="/">Conocenos</a>
                   <a className="a" href="/">Excursiones</a>
                   <a className="a" href="/">Chacra abierta</a>
                </div>
                <div className="burguer">
                    <BurguerButton clicked={clicked}  handleClick={handleClick}/>
                </div>
                
            </div>

        </>
    )
}

export default Barra;



