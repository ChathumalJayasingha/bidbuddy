import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity,Image, View} from "react-native";
class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('HomePage');
            }}>
                <ImageBackground source={require('../assets/bidbuddy-splash-big.jpg')} resizeMode="cover" style={styles.image}>

                    <View style={styles.logoWrap}>
                        <Image style={styles.mainLogo} source={require('../assets/white-logo-bidbuddy.png')} resizeMode={'center'} />
                    </View>
                    <View style={styles.giftWrap}>
                        <Image style={styles.giftLogo} source={require('../assets/gift-icon-splash-screen.png')} resizeMode={'cover'} />
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
        flex: 1,
        width: "100%",
        height: "100%",
    },logoWrap:{
        flex:1.5,
        alignItems:'center'
    },giftWrap:{
        flex:1,

    },mainLogo:{
        aspectRatio:2,
        height: 150,
    },giftLogo:{
        aspectRatio:1,
        height: '100%',
        width: '100%',

    }
});


export default FirstPage;
