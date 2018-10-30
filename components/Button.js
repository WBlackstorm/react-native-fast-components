import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

class Button extends Component {

    render() {
        return (

            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={style.buttonText}>{this.props.children}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const style = {
    buttonContainer: {
        marginBottom: 20,
        borderWidth: 1,        
        borderRadius: 5,
        borderColor: '#CCC',
        backgroundColor: '#2E86FA',   
        alignSelf: 'stretch',               
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
        padding: 20,          
        alignSelf: 'center',    
    },
}

export { Button };