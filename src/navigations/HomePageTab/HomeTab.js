import React, {Component,createRef,useEffect,useState} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView} from "react-native";
import {Button, TextInput} from "react-native-paper";
import constants, {colors} from '../../configurations/constants';
import ActionSheet from "react-native-actions-sheet";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import BackgroundTimer from 'react-native-background-timer'; 

const actionSheetRef = createRef();

function HomeTab(props){
 

    // const [secondsLeft, setsecondsLeft] = useState(3601);
    // const [timerOn, settimerOn] = useState(false);

    // useEffect(() => {
    //     if(timerOn) startTimer();
    //      else BackgroundTimer.stopBackgroundTimer();

    //     return()=>{
    //         BackgroundTimer.stopBackgroundTimer();
    //     }
    // },[timerOn])



    // useEffect(()=>{
    //     if(secondsLeft===0){
    //         BackgroundTimer.stopBackgroundTimer();

    //     }
    // },[secondsLeft])
 
    // const startTimer=()=>{
    //     BackgroundTimer.runBackgroundTimer(() => { 
    //         setsecondsLeft((secs)=>{
    //             if(secs>0)return secs-1;
    //             else return 0;
    //         })
    //         }, 
    //         1000);
           
    // }

    // const clockify=()=>{
        
    //     let days=Math.floor(secondsLeft/60)
    //     let hours=Math.floor(secondsLeft/60/60)
    //     let mins=Math.floor(secondsLeft/60%60)
    //     let seconds=Math.floor(secondsLeft%60)

    //     let displayDays=days<10? `0${days}`:days;
    //     let displayHours=hours<10? `0${hours}`:hours;
    //     let displayMins=mins<10? `0${mins}`:mins;
    //     let displaySecs=seconds<10? `0${seconds}`:seconds;
        
        
    //     return{
    //         displayDays,displayHours,displayMins,displaySecs,
    //     };
    // }



    const [secondsLeft, setsecondsLeft] = useState(980);
    const [timerOn, settimerOn] = useState(false);

    useEffect(() => {
        if(timerOn) startTimer();
         else BackgroundTimer.stopBackgroundTimer();

        return()=>{
            BackgroundTimer.stopBackgroundTimer();
        }
    },[timerOn])



    useEffect(()=>{
        if(secondsLeft===0){
            BackgroundTimer.stopBackgroundTimer();

        }
    },[secondsLeft])
 
    const startTimer=()=>{
        BackgroundTimer.runBackgroundTimer(() => { 
            setsecondsLeft((secs)=>{
                if(secs>0)return secs-1;
                else return 0;
            })
            }, 
            1000);
           
    }

    const clockify=()=>{

    
        
        let days=Math.floor(secondsLeft)
        let hours=Math.floor(secondsLeft/60/60)
        let mins=Math.floor(secondsLeft/60%60)
        let seconds=Math.floor(secondsLeft%60)

        let displayDays=days<10? `0${days}`:days;
        let displayHours=hours<10? `0${hours}`:hours;
        let displayMins=mins<10? `0${mins}`:mins;
        let displaySecs=seconds<10? `0${seconds}`:seconds;
        
        
        return{
            displayDays,displayHours,displayMins,displaySecs,
           
        };
    }




        return (
            <ScrollView style={styles.container} >

                       
                <View style={styles.lblHeader}>
                    <Text style={styles.lblHeaderInnerText}>PRIZE OF THE WEEK</Text>
                </View>
                <View style={styles.imgWrapContainer}>
                    <TouchableOpacity style={styles.imgLeft} >
                        <Image source={require('../../assets/back-icon.png')} />
                    </TouchableOpacity>
                    <Image style={styles.imgMain} source={require('../../assets/laptop.png')}  />
                    <TouchableOpacity style={styles.imgRight} >
                        <Image source={require('../../assets/back-icon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lblItemDetails}>
                    <Text style={styles.lblItemName}>Dell Inspiron Laptop</Text>
                    <Text style={styles.lblItemPrice}>LKR.110000</Text>
                    <Text style={styles.lblDrawNumber}>(Draw number : <Text>5</Text> ) </Text>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>සුපිරි පරිත්‍යාගයට ඇත්තේ තව </Text>
                </View>

                <View>

                    <View style={styles.dateContainer}>
                        
                        <Text style={styles.txtHours}>{clockify().displayDays}</Text>
                        <Text style={styles.txtHours}>{clockify().displayHours}</Text>
                        <Text style={styles.txtMinutes}>{clockify().displayMins}</Text>
                        <Text style={styles.txtSeconds}>{clockify().displaySecs}</Text>

                    </View>
                    <Text style={{flex:1,fontWeight:'bold',margin:10,color:'#FC6500',textAlign:'center'}}>ලක්ශයකට අධික Dell Inspiron Laptop  එක ඔබේම කරගන්න 0 හැර ඔබ කැමති අඩුම අගය ඇතුලත් කරන්න.</Text>

                </View>


                <View style={styles.underContainer} >
                 <View style={styles.underContainerButtonWrap}>
                     {/*<Button mode='outlined' color='black' style={styles.underContainerLeftButton}>Type your lowest number</Button>*/}
                     <Button mode='outlined' color='black'
                        onPress={()=>{
                            settimerOn((current)=> !current)
                        }}
                     style={styles.underContainerLeftButton}>Type low number</Button>
                     <Button mode='contained'
                        onPress={()=>{
                            props.navigation.navigate('EarnCoinPage');
                        }}
                     style={styles.underContainerRightButton}>Play</Button>
                 </View>
                    <View style={styles.underContainerFooterContent}>
                        <View style={styles.leftContent}>
                            <Text style={styles.leftContentText}>
                                හොඳම තරඟකරුවාගේ අඩුම අගය දැන් රැඳී ඇත්තේ 1-1000 ත් අතරයි. ඉක්මනින් ඔබත් ඒ අතර අගයක් ඇතුලත් කර ඉදිරියටම පැමිණෙන්න.
                            </Text>
                            {/* <View style={styles.leftContentImages} >
                                    <Image style={styles.leftGirlImage} source={require('../../assets/girl.jpg')} />
                                <Image style={styles.rightBoyImage} source={require('../../assets/boy.jpg')} />
                            </View> */}

                        </View>
                        {/* <View style={styles.rightContent}>
                            <Text  style={styles.rightContentText}>
                                අලුත්ම වෙනසක් සමගින් දින 3ට වරක් හොඳම තෑගි දිනාගන්න. ඔබ කැමතිම අඩුම අගයන් 10 වතාවක් ඇතුලත් කර ත්‍යාගය ඔබේම කරගන්න. මේ මොහොතේ ත්‍යාගය
                            </Text>
                            <View style={styles.rightContentWrap} >
                                <Text  style={styles.rightContentWrapText}>
                                    WireLess Bluetooth Headset
                                </Text>
                                <Image style={styles.rightContentWrapImage} source={require('../../assets/headset.png')} />
                            </View>
                            <View style={styles.rightContentFooter}>
                                <Text style={styles.rightContentFooterText}>1 d : 11h : 40m : 60s</Text>
                            </View>
                        </View> */}
                    </View>
                </View>


                
                        
            </ScrollView>

        );
    

}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor:colors.white,
    },
    lblHeader: {
        flex: 1,  width:'auto', height:50, alignItems:'center',
        justifyContent:'center',
    },lblHeaderInnerText:{
        fontSize:30,color:colors.orange
    },imgWrapContainer:{
        flex: 1, flexDirection:'row', alignItems:'center',
        justifyContent:'flex-start',
    },imgLeft:{
        flex: 0.1, width:20, height:20, marginLeft:20,
        marginRight: 10,
    },imgRight:{
        flex: 0.1,  width:20, height:20, alignItems:'center',
        transform: [{ rotate: '180deg' }], marginRight:20,
        marginLeft:10,
    },imgMain:{
        flex: 1,width:'auto', height:200,
    },lblItemDetails:{
        flex:1, alignItems:'center',
    },lblItemName:{
        flex:1,fontSize:25,color:colors.orange,fontWeight:'bold',
    },lblItemPrice:{
        flex:1,fontSize:25,color:colors.orange,
    },lblDrawNumber:{
        flex:1,fontSize:20,color:colors.orange,
    },dateContainer:{
        flex:1,width:'auto',height:80,flexDirection:'row', alignItems:'center',justifyContent:'space-evenly'
    },txtDays:{
        padding:10,backgroundColor:colors.orange,borderRadius:10,fontWeight:'bold', fontSize:40
    },txtHours:{
        padding:10,backgroundColor:colors.orange,borderRadius:10,fontWeight:'bold', fontSize:40
    },txtMinutes:{
        padding:10,backgroundColor:colors.orange,borderRadius:10,fontWeight:'bold', fontSize:40
    },txtSeconds:{
        padding:10,backgroundColor:colors.orange,borderRadius:10,fontWeight:'bold', fontSize:40
    },underContainer:{
        flex:1,
    },underContainerButtonWrap:{
        flex:1,flexDirection:'row',padding:7,
    },underContainerLeftButton:{
        flex:5.5,margin:5, color:colors.white,
    },underContainerRightButton:{
        flex:4.5,margin:5,  backgroundColor:colors.orange,
        borderRadius:10,
    },underContainerFooterContent:{
        flex:1,flexDirection:'row',
    },leftContent:{
        flex:1,
    },rightContent:{
        flex:1,
    },leftContentText:{
        flex:1,color:colors.orange,fontWeight:'bold',textAlign:'center',margin:10,
    },rightContentText:{
        flex:1,color:colors.grayMixBlack,fontWeight:'bold',textAlign:'center',margin:10,
    },leftContentImages:{
        flex:1,flexDirection:'row',marginTop:30,
    },leftGirlImage:{
        flex:1,width:50,height:100,borderRadius:100,
    },rightBoyImage:{
        flex:1,width:50,height:100, borderRadius:100,
    },rightContentWrap:{
        flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',
    },rightContentWrapText:{
        flex:5,color:colors.orange,fontWeight:'bold',fontSize:20,textAlign:'center',
    },rightContentWrapImage:{
        flex:4,width:'auto',height:120,
    },rightContentFooter:{
        flex:1,
    },rightContentFooterText:{
        flex:1,textAlign:'center',color:colors.orange,fontWeight:'bold',fontSize:20
    },
    // rightContentFooterProgress:{
    //     flex:1,textAlign:'center',margin:20
    // }
    actionSheetWrapper:{
        backgroundColor:colors.orange,borderTopLeftRadius:20,borderTopRightRadius:20
    },actionSheetHeader:{
        flex:1,flexDirection:'row',margin:20
    },actionSheetHeaderImage:{
        flex:1,width:50,height:50,
    },actionSheetheaderTitle:{
        flex:1, fontSize:20,color:'white'
    },actionSheetHeaderImageWrapper:{
        flex:.3,
    }

});


export default HomeTab;









//import React, { useState,useEffect } from 'react';
// import { View,Text,Button, TouchableOpacity,StyleSheet,DeviceEventEmitter,NativeAppEventEmitter,Platform,} from 'react-native'; 
//import RootNavigation from "./src/navigations/RootNavigation"; 
//import BackgroundTimer from 'react-native-background-timer'; 


//function App() { const [secondsLeft, setsecondsLeft] = useState(3601); const [timerOn, settimerOn] = useState(false); useEffect(() => { if(timerOn) startTimer(); else BackgroundTimer.stopBackgroundTimer(); return()=>{ BackgroundTimer.stopBackgroundTimer(); } },[timerOn]) useEffect(()=>{ if(secondsLeft===0){ BackgroundTimer.stopBackgroundTimer(); } },[secondsLeft]) const startTimer=()=>{ BackgroundTimer.runBackgroundTimer(() => { setsecondsLeft((secs)=>{ if(secs>0)return secs-1; else return 0; }) }, 1000); //BackgroundTimer.stopBackgroundTimer(); } const clockify=()=>{ let hours=Math.floor(secondsLeft/60/60) let mins=Math.floor(secondsLeft/60%60) let seconds=Math.floor(secondsLeft%60) let displayHours=hours<10? `0${hours}`:hours; let displayMins=mins<10? `0${mins}`:mins; let displaySecs=seconds<10? `0${seconds}`:seconds; return{ displayHours,displayMins,displaySecs, }; } return ( <View> <Text>{clockify().displayHours} hours : {clockify().displayMins} mins : {clockify().displaySecs} sec   </Text> <Button onPress={()=>{ settimerOn((current)=> !current) }} title="Stop/Start"></Button> </View> ); } export default App;