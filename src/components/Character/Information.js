import React, { Component } from 'react';

class Information extends Component {
    render() {
        console.log(this.props);
        const { name, birth_year, homeworld } = this.props
        return (
            <div>
                <p>Name: {name}</p>
                <p>Birth_year:{birth_year}</p>
                <p>Homeworld:{homeworld}</p>
            </div>
        );
    }
}

export default Information;