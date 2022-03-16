import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '' };
        this.idChangeHandler = this.idChangeHandler.bind(this);
    }

    idChangeHandler(event) {
        this.setState({ id: event.target.value });
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.onFindCharacter(this.state.id);
            }} >
                <label >Id of character</label>
                <input onChange={this.idChangeHandler} type={'search'} value={this.state.id} /><br />
                <input type={'submit'} value='Find character' />
            </form>
        );
    }
}

export default Form;