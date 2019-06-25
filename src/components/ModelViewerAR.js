import React from 'react';
import "@google/model-viewer";
import "./Components.css";


class ModelViewerAR extends React.Component { 
    render() {
        return (
            <div id="ModelViewerContainer">
                <div>
                    <model-viewer id="ModelViewerAR"
                        src="media/3D-files/DSW.gltf" ios-src="media/3D-files/BlenderFinal1.usdz" poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" camera-controls>
                    </model-viewer>
                </div>
                <p id="instruction">Tippe auf das Symbol rechts, um ihn in deine Umgebung zu platzieren</p>
            </div>    
        )
    }
}

export default ModelViewerAR;
