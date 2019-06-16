import React from 'react';
import "@google/model-viewer"
import "./ModelViewer.css"

class ModelViewer extends React.Component { 
    render() {
        return (
            <div id="ModelViewer">
                 <model-viewer ar src="media/3D-files/BlenderFinal.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" camera-controls poster="DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" auto-rotate align-model="center"></model-viewer>
          </div>
        )
    }
}

export default ModelViewer;
