import React from 'react';
import "@google/model-viewer"


class ModelViewer extends React.Component { 
    render() {
        return (
            <div className="ModelViewer">
                <div>
                    <model-viewer 
                        className="ModelViewer" ar src="media/3D-files/DSW.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" camera-controls poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" 
                        style={{ width: "100%", height: "300px", marginLeft: "auto", marginRight: "auto"}}>
                    </model-viewer>

                </div>
                <div>
                    <model-viewer 
                        className="ModelViewerNoAR" src="media/3D-files/DSW.gltf" camera-controls poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" 
                        style={{ width: "100%", height: "width"/2, marginLeft: "auto", marginRight: "auto"}}>
                    </model-viewer>
                </div>
            </div>    
        )
    }
}



export default ModelViewer;
