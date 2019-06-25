import React from 'react';

class ARButton extends React.Component { 
    render() {
        return (
          <div id="ARButton">
            <a href="media/3D-files/BlenderFinal1.usdz" rel="ar">
              <img src="media/ar-button.jpg" alt="AR-Button" width="45%" height="auto" />            
            </a>
          </div>
        )
    }
}

export default ARButton;