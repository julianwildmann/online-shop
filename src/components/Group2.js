import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import ModelViewer from "./ModelViewer";
import Description from "./Description";

// Embedded 3D viewer static information

class Group2 extends React.Component { 
    render() {
        return (
            <div className="Group2">
            <Header />
            <Gallery />
            <ModelViewer />
            <Description />
            </div>
        )
    }
}

export default Group2;
