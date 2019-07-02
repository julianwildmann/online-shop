import React from 'react';
import "@google/model-viewer";
import "./Components.css";


class ModelViewer extends React.Component { 
    render() {
        return (
            <div id="ModelViewerContainer">
                <div>
                    <model-viewer id="ModelViewer"
                        src="media/3D-files/BlenderglTF.gltf" poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" camera-controls auto-rotate>
                    </model-viewer>
                </div>
                <p id="instruction">Wische über den Stuhl um ihn von allen Seiten zu betrachten</p>
            </div>    
        )
    }
}

export default ModelViewer;
