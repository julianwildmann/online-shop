import React, { Component } from 'react';
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return (      
        <div>
            <Todos />
        </div>

        )

    }
};

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
