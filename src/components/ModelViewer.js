import React from 'react';
import "@google/model-viewer"
import "./ModelViewer.css"

class ModelViewer extends React.Component { 
    render() {
        return (
            <div id="ModelViewer" width="700px" height="400px">
                 <model-viewer width="750px" ar src="media/3D-files/DWS-images.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" camera-controls poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#555555" auto-rotate ></model-viewer>
          </div>
        )
    }
}

export default ModelViewer;
