import React, { Component } from 'react';

class ThreeDimensions extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '50%' }}>
                <embed style={{ width: '100%', height: '100%' }} src={'./three-dimensions.html'}/>
            </div>
        );
    }
}

export default ThreeDimensions;