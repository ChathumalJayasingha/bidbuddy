
import React, {useState,useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, ScrollView,TouchableOpacity, View,FlatList} from "react-native";
import { Item } from 'react-native-paper/lib/typescript/components/List/List';





function NotificationTab(){

    const texts="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ";
    

    const items=(
        <TouchableOpacity style={styles.container}>
            <View style={styles.img} >
                <Image source={require('../../assets/dot-1.png')} />
            </View>
            <Text  style={styles.txt}>{texts}</Text>
        </TouchableOpacity>
    )
    
        return (

                <ScrollView style={styles.mainContainer}>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                    <View>{items}</View>
                </ScrollView>
               

        );
    }


const styles = StyleSheet.create({
    mainContainer: {
        
    },
    container: {
        flex:1,flexDirection:'row',
    },img:{
        flex:0.1,margin:10,alignItems: 'center',justifyContent:'center',
    },txt:{
        flex:1,margin:5,padding:5
    },
});


export default NotificationTab;
