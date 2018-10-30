import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class ButtonPhoto extends Component {

    render() {
        return (                      
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.view }>
                <View style={styles.buttonContainer}>
                    <Image 
                        style={ styles.image }
                        source={ this.props.image || require('../assets/images/placeholder-image.png') } />
                    <Text style={ styles.imageText }>Toque para inserir uma foto</Text>
                </View>
            </TouchableOpacity>
        )}

}

const styles = {

    view: {
        height: 200,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderWidth: 1,        
        borderRadius: 2,
        borderColor: '#CCC',  
    },

    imageText: {
        position: 'absolute',
        fontSize: 16,
        color: '#FFF',        
        alignSelf: 'center',
        paddingBottom: 20,         
    },

    image: {
        width: null,
        height: 200,
    },

}

export { ButtonPhoto };