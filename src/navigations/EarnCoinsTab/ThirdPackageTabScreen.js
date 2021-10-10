import React, { Component } from 'react'
import {ImageBackground, StyleSheet, Text, Image,TouchableOpacity, View} from "react-native";


export default class ThirdPackageTabScreen extends Component {
    render() {
        return (
            <View style={styles.mainWrap}>
                 <Text style={styles.mainText}>
                A values change to win more coins! Win 25 coins free by referring your friend.
                Click here to continue...
            </Text>
            
            <Text style={styles.footerText}>www.bidbuddy.lk/pages/ref/1882 </Text>
            
            <Image style={styles.footerImage} source={require('../../assets/clip-board.png')}/>
            <View  style={{
                flex:4
            }}></View>
            </View>
            
        )
    }
}


const styles=StyleSheet.create({
    mainWrap:{
        flex:1, textAlign: "center"
        
    },
    mainText:{
        flex:1,
        textAlign:'center',
        margin:20,
        padding:20,
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:1.5,
    },footerText:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'500',
        letterSpacing:1,
    },footerImage:{     
        width:40,
        height:40,marginLeft:200
    }
})