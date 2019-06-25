import React from 'react';
import { Link } from "react-router-dom";

class Buttons extends React.Component { 
    render() {
        return (
          <div className="btns">
            <div className="3dBtn">
              <Link to="2dpighli3d">
                <img src="/media/3D-starten-icon.png" />
              </Link>
            </div>

            <div className="arBtn">
              <Link to="2dpighli3d">
                <img src="/media/AR-starten.png" />
              </Link>
            </div>
          </div>
        )
    }
}

export default Buttons;