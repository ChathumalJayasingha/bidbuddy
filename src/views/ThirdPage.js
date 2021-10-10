import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
class ThirdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('FourthPage');
            }}>
                <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.headerText}>3rd Header Text</Text>
                    <Text style={styles.footerText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width:'100%',
        height:'100%',
        alignItems:'center',
    },headerText:{
        flex:2.5,
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        marginTop:20,

    },footerText:{
        flex:1,
        textAlign:'center',
        fontSize:20,
    }
});


export default ThirdPage;
