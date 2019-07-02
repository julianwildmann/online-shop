import React from 'react';
import { Link } from "react-router-dom";

// Links for reference to experimental groups

class Links extends React.Component { 
    render() {
        return (
            <div>
                <p>Mit folgenden Links kann auf die Experimentalgruppen zugegriffen werden:</p>
                <Link to="/z0rxa7k9p1">
                    <li>AFT</li>
                </Link>
                <Link to="/toswg95b31">
                    <li>AFT extended</li>
                </Link>
                <Link to="/gnwsusz0v2">
                    <li>3D embedded</li>
                </Link>
                <Link to="/01w5b1lxb2">
                    <li>3D button</li>
                </Link>
                <Link to="/h25d921we4">
                    <li>AR button</li>
                </Link>
                <Link to="/au8r3nxxb3">
                    <li>3D+AR embedeed</li>
                </Link>
                <Link to="/t1kl07iwz3">
                    <li>3D+AR button</li>
                </Link>
            </div>
        )
    }
}

export default Links;




