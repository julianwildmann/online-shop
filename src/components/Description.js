import React from 'react'
 
class Description extends React.Component {
    render () {
        return (
            <div className="Static Information" style={descriptionStyle}>
                <div className="Product Description">
                    <h3 align="left">Produktbeschreibung</h3>
                    <p id="description-text">Beim Dining Height Side Chair Wood Base (DSW) kombinierten Charles und Ray Eames die organische Sitzschale mit einem Vierbein-Holzuntergestell. Die Kombination von Kunststoff und Holz verleiht dem Klassiker eine gewisse Wärme, eine besonders wohnliche Note.</p>
                    <h3 align="left">Maße</h3>
                </div>
                
                <div className="Measurements" >
                    <table align="left">
                            <tr>
                                <th> </th>
                                <th>Breite</th>
                                <th>Höhe</th>
                                <th>Tiefe</th>
                                <th>Sitzhöhe</th>
                                <th>Sitztiefe</th>
                            </tr>
                            <tr>
                                <td>in mm</td>
                                <td>465</td>
                                <td>830</td>
                                <td>550</td>
                                <td>430</td>
                                <td>465</td>
                            </tr>
                    </table>
                </div>
            </div>
        )
    }
};

const descriptionStyle ={
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "10px",
    paddingRight: "0px",
}

export default Description;