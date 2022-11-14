import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Primera from './components/Primera';
import './Css/index.css';
import './Css/footer.css';
import './Css/cards.css';
import './Css/infojabones.css';
import './Css/inicio.css';
import './img/instrujabon.png';
import './img/Logo.png';
import './img/Onlylogo.png';

ReactDOM.createRoot(document.getElementById('rooti')).render(
    <React.StrictMode>
        <Primera />
    </React.StrictMode>
  )