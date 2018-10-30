import React, { Component } from 'react';
import {
    TextInput,
} from 'react-native';

class InputText extends Component {

    render() {
        return (
            <TextInput 
                style={style.input} 
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.secure}
                autoCorrect={false}
                autoCapitalize='none'
                maxLength={this.props.length || 40}
                multiline={this.props.multiline || false}
                height={this.props.height || 50}
                value={this.props.value}
                onChangeText={ this.props.onChangeText }
            />            
        );
    }
}

const style = {
    input: {
        height: 50,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 10,        
        alignSelf: 'stretch',
        borderRadius: 5,
        padding: 10,
    },
}

export { InputText };