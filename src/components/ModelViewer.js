import React from 'react';
import "@google/model-viewer"


class ModelViewer extends React.Component { 
    render() {
        return (
            <div className="ModelViewer">
                <div>
                    <model-viewer className="ModelViewer" style={{ width: "100%", height: "300px", marginLeft: "auto", marginRight: "auto"}} ar src="media/3D-files/DSW.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" camera-controls poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" auto-rotate ></model-viewer>
                </div>
                <div>
                    <model-viewer className="ModelViewer" style={{ width: "100%", height: "300px", marginLeft: "auto", marginRight: "auto"}} src="media/3D-files/DSW.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" camera-controls poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" auto-rotate ></model-viewer>
                </div>
            </div>    
        )
    }
}



export default ModelViewer;
