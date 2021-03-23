import './App.css';
import './components/components.css'
import * as FaIcons from 'react-icons/fa';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Sliders from './components/sliders.js';
import {SliderMarina, SliderSoleada, SliderMimosa} from './components/sliders.js'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="banner" style={{backgroundImage: `url(multimedia/banner.webp)`}}></div>
        
        
        <section>
          <div className="houses">
            <div className="soleada house">
              <div className="title">La Soleada</div><div className="img"><img src="multimedia/soleadafrente.jfif" alt="soleada"/></div>
              <div className="text">Hasta 8 personas, 3 dormitorios, 2 baños</div></div>
            <div className="mimosa house">
              <div className="title">La Mimosa</div>
              <div className="img"><img src="multimedia/mimosafrente.jfif" alt="mimosa"/></div>
              <div className="text">Hasta 7 personas, 2 dormitorios, 2 baños</div></div>
              <div className="marina house">
              <div className="title">La Marina</div>
              <div className="img"><img src="multimedia/marinafrente.jfif" alt="marina"/></div>
              <div className="text">Hasta 8 personas, 3 dormitorios, 2 baños</div></div>
          </div>
        </section>
        <div className="comodities">
          <div className="text">Todas las casas poseen <b>cochera cubierta, amplios living-comedores, parrilla cubierta, ducha exterior</b> (con agua fria y caliente), <b>jardín </b>y todas las comodidades que su familia necesita.</div>
          <div className="img"><img src="multimedia/wifi.png" alt="logo-wifi"/><img src="multimedia/alarma.png" alt="logo-alarma"/>
          <img src="multimedia/petfriendly.png" alt=""/></div>
        </div>
        <div className="showHouses" style={{backgroundImage: `url(multimedia/fondoShowHouses.jpg)`}}>
          <div>
            <b>La Soleada</b>
            <Sliders slides={SliderSoleada}/>
          </div>
          <div>
            <b>La Mimosa</b>
            <Sliders slides={SliderMimosa}/>
          </div>
          <div>
            <b>La Marina</b>
            <Sliders slides={SliderMarina}/>
          </div>
        </div>
      <section>
      <div className="mapContainer">
        <div className="info">
        <div className="title">Donde estamos</div>
        <div className="text">Ubicados en Fournier 191, Valeria del Mar, Provincia de Buenos Aires. A <b>solo 50 metros</b> de la playa y del balneario La Pergola. A la vuelta del hotel Alamos del Mar.</div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.4790375112116!2d-56.87792647016122!3d-37.14058293552005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9d61c606efb5%3A0x92e4fb724473c3d7!2sCaba%C3%B1as%20Valeria!5e0!3m2!1ses-419!2sar!4v1615912349498!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
      </section>
      
      <Footer/> 
    </div>
  );
}

export default App;
