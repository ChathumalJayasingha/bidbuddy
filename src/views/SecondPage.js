import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('ThirdPage');
            }}>
                <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
                    <View  style={styles.topWrap}>
                        <Text style={styles.headerText}>2rd Page Header Text</Text>
                    </View>
                    <View  style={styles.bottomWrap}>
                        <Text style={styles.footerText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>



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
        // flex: 1,
        // width:'100%',
        // height:'100%'
        flex: 1,
        justifyContent: "center",
        width: "190%",
        height: 920,

    },topWrap:{
        flex:2.5,
        textAlign:'center',

    },bottomWrap:{
        flex:1,
        textAlign:'center',
        justifyContent: 'center'
    },headerText:{
        justifyContent:'center',
        fontSize:40,
        fontWeight:'bold',
        marginTop:20,


    },footerText:{
        justifyContent:'center',
        fontSize:20,
    }
});


export default SecondPage;
