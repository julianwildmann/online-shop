import React from 'react'
 
class Description extends React.Component {
    render () {
        return (
            <div className="Prooduktbeschreibung">
                <h2 align="left">Produktbeschreibung</h2>
                <p id="description-text">Beim Dining Height Side Chair Wood Base (DSW) kombinierten Charles und Ray Eames die organische Sitzschale mit einem Vierbein-Holzuntergestell. Die Kombination von Kunststoff und Holz verleiht dem Klassiker eine gewisse Wärme, eine besonders wohnliche Note.</p>
                <h4 align="left">Maße</h4>
                
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
        )
    }
};

export default Description;