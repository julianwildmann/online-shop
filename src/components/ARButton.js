import React from 'react';

class ARButton extends React.Component { 
    render() {
        return (
          <div className="ARButton">
            <a href="media/3D-files/BlenderFinal1.usdz" rel="ar">
              <img src="media/ar-starten.png" alt="AR-Button" width="40%" height="auto" />            
            </a>
          </div>
        )
    }
}

export default ARButton;