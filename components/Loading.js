import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native'

class Loading extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FFF"/>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#000000',
        opacity: 0.8,
        top: 0,
        bottom: 0,
        left: 0, 
        right: 0, 
    },

    title: {
        color: '#FFF',
        fontSize: 17,
    }
};

export { Loading };