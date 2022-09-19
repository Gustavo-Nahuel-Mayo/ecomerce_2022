import Instru1 from '../img/instrujabon.png';
import Instru2 from '../img/instrujabon2.png';
import Instru3 from '../img/instrujabon3.png';

function Jabones(){
    return(
        <div className="content_jabones">
            <div className="especialidad1">
                <div className="info">
                    <img id="instru1" src={Instru1} alt=""/>
                    <img id="instru2" src={Instru2} alt=""/>
                    <img id="instru3" src={Instru3} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default Jabones;