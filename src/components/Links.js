import React from 'react';
import { Link } from "react-router-dom";


class Links extends React.Component { 
    render() {
        return (
            <div>
                <p>Mit folgenden Links kann auf die Experimentalgruppen zugegriffen werden:</p>
                <Link to="/z0rxa7k9p1">
                    <li>Group 1</li>
                </Link>
                <Link to="/gnwsusz0v2">
                    <li>Group 2</li>
                </Link>
                <Link to="/au8r3nxxb3">
                    <li>Group 3</li>
                </Link>
            </div>
        )
    }
}

export default Links;




