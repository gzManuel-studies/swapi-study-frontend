import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;