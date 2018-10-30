import React, { Component } from 'react';
import { View } from 'react-native';

class CardContainer extends Component {

    render() {

        return (
            <View style={style.container}>
                { this.props.children }
            </View>
        )

    }

}

const style = {
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderColor: '#CCC',
        borderWidth: 1,      
        borderRadius: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,  
        shadowRadius: 5,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5, 
    },
}

export { CardContainer };

