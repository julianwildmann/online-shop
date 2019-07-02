import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ViewerButton from './ViewerButton';


class Group2 extends React.Component { 
    render() {
        return (
            <div className="Group2">
            <Header />
            <Gallery />
            <ViewerButton />
            <Description />
            </div>
        )
    }
}

export default Group2;
