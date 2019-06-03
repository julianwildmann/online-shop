import React from 'react'
 
function Header () {
    return (
        <header style={headerStyle}>
        <h1 id="heading">Eames Plastic Side Chair</h1>
        <h4 id="subheading">Stühle und Tische</h4>
        </header>
    )
}

const headerStyle ={
    background: "#333",
    textAlign: "left",
    padding: "1px 10px",
    margin: "0px 0px",
}

export default Header;
