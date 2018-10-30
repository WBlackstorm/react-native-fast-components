import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

class ButtonLink extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={style.linkText}>{this.props.children}</Text>
            </TouchableOpacity>                        
        );
    }
}

const style = {
    linkText: {
        fontSize: 16,
        color: '#2E86FA',
    },
}

export { ButtonLink };