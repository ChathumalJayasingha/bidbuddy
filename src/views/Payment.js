import React, { Component } from 'react'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView, Touchable} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import {constants} from '../configurations/constants'




export default function Payment(props){
    
        return (
            <ScrollView style={styles.mainWrap}>


            <View style={styles.cardWrap}>
            {/* <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}> */}


                <Text style={styles.headerTitle}>BORNZE PACKAGE</Text>
                <View  style={styles.middleImageWrap}>
                <Image  style={styles.middleImage} source={require('../assets/bronze.png')} />
                </View>
                
                <Text style={styles.price}>LKR.99</Text>
                <Text style={styles.footerText}>
                    You will receive 1050 coins form this package .Please not that there are no hidden charges included.
                </Text>
                {/* <Button  mode="outlined" color='orange' style={styles.button}>BUY NOW</Button> */}
                {/* </LinearGradient> */}
                <View style={styles.lastContent}>
                    <View style={styles.lastContentTextWrap}>
                    <Text style={styles.lastContentText}>No hidden charges</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.lastContentImageWrap} onPress={
                        ()=>props.navigation.navigate('HomePage')
                    }>
                    <Image  style={styles.lastContentImage} source={require('../assets/payment.jpg')} />
                    </TouchableOpacity>
                    
                </View>
            </View>



            </ScrollView>

        )
    
}
const styles = StyleSheet.create({
    cardWrap:{
        flex:1,margin:20,
    },linearGradient:{
        borderRadius:20,
    },middleImageWrap:{
        flex:1,alignItems:'center',
    },middleImage:{
        flex:1,width:200,height:100,justifyContent:'center',
    },headerTitle:{
        textAlign:'center',letterSpacing:2,fontSize:20,fontWeight:'500',margin:10,color:'orange'
    },price:{
        textAlign:'center',letterSpacing:2,fontSize:20,fontWeight:'bold',margin:10
    },footerText:{
       textAlign:'center',fontSize:15,fontWeight:'bold'
    },button:{
        backgroundColor:'white',margin:20,borderRadius:10,color:'orange',
    },lastContent:{
        flex:1,
    },lastContentImageWrap:{
        flex:1,alignItems:'center',
    },lastContentImage:{
        flex:1,width:200,height:100,justifyContent:'center',borderRadius:10,shadowColor:'red'
    },lastContentText:{
        flex:1,margin:30,fontSize:20,color:'red'
    },lastContentTextWrap:{
       flex:1,alignItems:'center',
    }

  });