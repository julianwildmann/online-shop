import React from 'react'
 
class Description extends React.Component {
    render () {
        return (
            <div className="Heading">
                <h1>Produktbeschreibung</h1>
                <p>Beim Dining Height Side Chair Wood Base (DSW) kombinierten Charles und Ray Eames die organische Sitzschale mit einem Vierbein-Holzuntergestell. Die Kombination von Kunststoff und Holz verleiht dem Klassiker eine gewisse Wärme, eine besonders wohnliche Note. Die Sitzschalen können mit Sitzpolstern oder einer kompletten Polsterung ausgestattet werden, deren Auswahl an Stofffarben eine Vielzahl von individuellen Konfigurationen ermöglicht.</p>
                <h3>Maße</h3>
                <p>
                    <table align="center">
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
                </p>
            </div>
        )
    }
};

export default Description;