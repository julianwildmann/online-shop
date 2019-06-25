import React from 'react';
import { Link } from "react-router-dom";

class ARButton extends React.Component { 
    render() {
        return (
          <div className="3DButton">
            <Link to="ef0kij1par">
              <img src="/media/AR-starten.png" alt="3D-Button" />
            </Link>
          </div>
        )
    }
}

export default ARButton;