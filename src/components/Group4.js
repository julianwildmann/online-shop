import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ARAppButton from "./ARAppButton";

// AR App Button + static information

class Group31 extends React.Component { 
    render() {
        return (
            <div className="Group2">
            <Header />
            <Gallery />
            <ARAppButton/>
            <Description />
            </div>
        )
    }
}

export default Group31;
