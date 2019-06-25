import React from 'react';
import { Link } from "react-router-dom";

// Button that triggers 3D Model Viewer on seperate page

class ViewerButton extends React.Component { 
    render() {
        return (
          <div id="Button">
            <Link to="2dpighli3d">
              <img src="media/3D-button.jpg" alt="3D-Button" width="45%" height="auto"/>
            </Link>
          </div>
        )
    }
}
export default ViewerButton;