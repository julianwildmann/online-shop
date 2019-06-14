import React from 'react';
import "@google/model-viewer"

class ModelViewer extends React.Component { 
    render() {
        return (
            <div className="ModelViewer">
                 <model-viewer src="media/3D-files/BlenderFinal.gltf" ar camera-controls alt="DSW Chair" camera-controls background-color="#FFFFFF" ios-src="media/3D-Files/DSWMaterialFinal.usdz" position="center" background-color="#455A64"></model-viewer>
          </div>
        )
    }
}

export default ModelViewer;
