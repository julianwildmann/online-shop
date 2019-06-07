import React from 'react';

class Buttons extends React.Component { 
    render() {
        return (
            <div ClassName="Btns">    
            <a rel="ar" href="./media/DSWMaterialFinal.usdz" align-content="center">
              <img src="./media/ar-starten.png" alt="AR Label" width="40%" id="arBtn" />
            </a>

            <a href="./media/product-video.mp4" controls>
              <img src="./media/video-ansehen.png" alt="Video Label" width="40%" id="videoBtn" />
            </a>
          </div>
        )
    }
}

export default Buttons;
