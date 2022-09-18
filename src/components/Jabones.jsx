import Instru1 from '../img/instrujabon.png';
import Instru2 from '../img/instrujabon.png';

function Jabones(){
    return(
        <div className="content_jabones">
            <div className="especialidad1">
                <div className="info">
                    <img id="instru1" src={Instru1} alt=""/>
                    <img id="instru2" src={Instru2} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default Jabones;