import React, { Component } from 'react'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import moduleName, { colors } from '../../configurations/constants'



export default class SecondPackageTabScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.mainWrap}>


            <View style={styles.cardWrap}>
            <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}>
                <Text style={styles.headerTitle}>29 COIN PACKAGE</Text>
                <View  style={styles.middleImageWrap}>
                <Image  style={styles.middleImage} source={require('../../assets/pack29.jpeg')} />
                </View>
                
                <Text style={styles.price}>LKR.99</Text>
                <Text style={styles.footerText}>
                    You will receive 1050 coins form this package .Please not that there are no hidden charges included.
                </Text>
                <Button  mode="outlined" color='orange' style={styles.button}>BUY NOW</Button>
                </LinearGradient>
            </View>


            <View style={styles.cardWrap}>
            <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}>
                <Text style={styles.headerTitle}>49 COIN PACKAGE</Text>
                <View  style={styles.middleImageWrap}>
                <Image  style={styles.middleImage} source={require('../../assets/pack49.jpeg')} />
                </View>
                
                <Text style={styles.price}>LKR.249</Text>
                <Text style={styles.footerText}>
                    You will receive 1050 coins form this package .Please not that there are no hidden charges included.
                </Text>
                <Button  mode="outlined" color='orange' style={styles.button}>BUY NOW</Button>
                </LinearGradient>
            </View>



            <View style={styles.cardWrap}>
            <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}>
                <Text style={styles.headerTitle}>2450 COIN PACKAGE</Text>
                <View  style={styles.middleImageWrap}>
                <Image  style={styles.middleImage} source={require('../../assets/pack99.jpeg')} />
                </View>
                
                <Text style={styles.price}>LKR.399</Text>
                <Text style={styles.footerText}>
                    You will receive 1050 coins form this package .Please not that there are no hidden charges included.
                </Text>
                <Button  mode="outlined" color='orange' style={styles.button}>BUY NOW</Button>
                </LinearGradient>
            </View>
            </ScrollView>

        )
    }
}
var styles = StyleSheet.create({
    cardWrap:{
        flex:1,margin:20,
    },linearGradient:{
        borderRadius:20,
    },middleImageWrap:{
        flex:1,alignItems:'center',
    },middleImage:{
        flex:1,width:200,height:100,justifyContent:'center',
    },headerTitle:{
        textAlign:'center',letterSpacing:2,fontSize:20,fontWeight:'500',margin:10
    },price:{
        textAlign:'center',letterSpacing:2,fontSize:20,fontWeight:'bold',margin:10
    },footerText:{
       textAlign:'center',fontSize:15,fontWeight:'bold'
    },button:{
        backgroundColor:'white',margin:20,borderRadius:10,color:colors.orange,
    }

  });