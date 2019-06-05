import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";


class App extends Component {
  render() {
    
  return (
    <div className="App">
      <div className="Container">
            <Header />
            <Gallery />
      </div>

      <div ClassName="Btns">    
        <a rel="ar" href="./media/DSWMaterialFinal.usdz" align-content="center">
          <img src="./media/ar-starten.png" alt="AR Label" width="40%" id="arBtn" />
        </a>
        <a href="./media/product-video.mp4" controls>
          <img src="./media/video-ansehen.png" alt="Video Label" width="40%" id="videoBtn" />
        </a>
      </div>

      <div className="Produktbeschreibung">
        <h3 align="left">Produktbeschreibung</h3>
        <p id="description-text">Beim Plastic Side Chair kombinierten Charles und Ray Eames die organische Sitzschale mit einem Vierbein-Holzuntergestell. Die Kombination von Kunststoff und Holz verleiht dem Klassiker eine gewisse Wärme, eine besonders wohnliche Note. Der Stuhl ist vielseitig einsetzbar und daher in vielen modernen Wohn- , Arbeits- oder Wartezimmern zu finden.</p>
        </div>

      <div className="Maße">
          <h3 align="left">Maße</h3>
      </div>

        <div className="Tabelle">
        <table align="left">
          <tr>
            <th>Breite</th>
            <th>Höhe</th>
            <th>Tiefe</th>
            <th>Sitzhöhe</th>
            <th>Sitztiefe</th>
          </tr>
          <tr>
            <td>465 mm</td>
            <td>830 mm</td>
            <td>550 mm</td>
            <td>430 mm</td>
            <td>465 mm</td>
          </tr>
        </table>
      </div>
      <br/>
    </div>
    );
  }
}
export default App;
