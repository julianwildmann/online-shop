import React from 'react';
import "@google/model-viewer"
import "./ModelViewer.css"

class ModelViewer extends React.Component { 
    render() {
        return (
            <div id="ModelViewer">
                 <model-viewer src="media/3D-files/BlenderFinal.gltf" ar ios-src="media/3D-Files/DSWMaterialFinal.usdz" controls poster="DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF"  position="center" background-color="#455A64"></model-viewer>
          </div>
        )
    }
}

export default ModelViewer;
