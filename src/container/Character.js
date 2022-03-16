import React, { Component } from 'react';
import Form from '../components/Character/Form';
import Information from '../components/Character/Information';
import { getCharactareById } from '../api/character'

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = { character: {} };
        this.findCharacterHandler = this.findCharacterHandler.bind(this);
    }

    async findCharacterHandler(id) {
        const character = await getCharactareById(id);
        this.setState({ character });

    }


    render() {
        return (
            <div>
                <Form onFindCharacter={this.findCharacterHandler} >

                </Form>
                <Information name={this.state.character.name}
                    birth_year={this.state.character.birth_year}
                    homeworld={this.state.character.homeworld}>

                </Information>
            </div>
        );
    }
}

export default Character;