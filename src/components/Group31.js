import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ARButton from "./ARButton";


class Group31 extends React.Component { 
    render() {
        return (
            <div className="Group2">
            <Header />
            <Gallery />
            <ARButton/>
            <Description />
            </div>
        )
    }
}

export default Group31;
