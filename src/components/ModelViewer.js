import React from 'react';
import "@google/model-viewer";
import "./ModelViewer.css";


class ModelViewer extends React.Component { 
    render() {
        return (
            <div>
                <div>
                    <model-viewer id="ModelViewer"
                        src="media/3D-files/DSW.gltf" poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" camera-controls>
                    </model-viewer>
                </div>
                <p id="instruction">Wische über den Stuhl um ihn von allen Seiten zu betrachten</p>

                <div>
                    <model-viewer id="ModelViewer"
                        ar src="media/3D-files/DSW.gltf" ios-src="media/3D-files/DSWMaterialFinal.usdz" poster="media/3D-files/DSW_Poster.png" alt="DSW Chair" background-color="#FFFFFF" camera-controls>
                    </model-viewer>
                </div>
                <p id="instruction">Tippe auf den Stuhl um ihn in deine Umgebung zu platzieren</p>
            </div>    
        )
    }
}



export default ModelViewer;
