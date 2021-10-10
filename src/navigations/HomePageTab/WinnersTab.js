import LinearGradient from 'react-native-linear-gradient';
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView} from "react-native";
import {TextInput} from "react-native-paper";
import {colors} from "../../configurations/constants";
class GiftTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName:'Dell Inspiron Laptop'
        };
    }

    render() {
        return (
            <ScrollView style={styles.container} >
                <View  style={styles.DellComputerContainer}>
                <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}>
                    <Text style={styles.txtHeaderDrawNumber}>DRAW NO : 4</Text>
                    <Text style={styles.txtHeaderDate}>June 5,2021 - July 5,2021</Text>
                    <View style={styles.imageWrapContainer}>
                        <Image style={styles.imgMain} source={require('../../assets/laptop-1.png')}  />
                        <Text style={styles.lblRight} >Online ඉගෙන ගන්න වැඩ වලට මං Laptop එකක් හොයද්දී තමයි BidBuddy එක මට හම්බුනේ.
                            ඇත්තටම මාරයි. අන්තිම මොහොතේ Lap එක මගේම උන එක Thank You BidBuddy
                        </Text>
                    </View>
                    <View style={styles.lblExtraDetails}>
                        <View style={styles.lblExtraDetailsLeft}>
                            <Text style={styles.itemName} >Dell G3 Laptop</Text>
                            <Text style={styles.itemPrice} >LKR 210000</Text>
                        </View>
                        <View style={styles.lblExtraDetailsRight}>
                            <Image source={require('../../assets/winner-1.png')} style={styles.winnerIcon} />
                            <Text style={styles.winnerName} >Akila Hansaka</Text>
                        </View>
                    </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },linearGradient:{
        borderRadius:10
    },DellComputerContainer:{
        flex:1,margin:20,backgroundColor:colors.orange,borderRadius:20
    },txtHeaderDrawNumber:{
        flex: 1, textAlign:'center',fontSize:30, letterSpacing:2,fontWeight:'bold'
    },txtHeaderDate:{
        flex: 1, textAlign:'center',fontSize: 20,
    },imageWrapContainer:{
        flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'flex-start',
    },imgMain:{
        flex: 1,width:20, height:130,
    },lblRight:{
        flex: 1,width:'auto', height:'auto', fontSize:17,color:colors.grayMixBlack,
    },lblExtraDetails:{
        flex:1,flexDirection: 'row'
    },lblExtraDetailsLeft:{
        flex:1,margin: 10
    },lblExtraDetailsRight:{
        flex:1,flexDirection:'row',margin:10,
    },winnerIcon:{
        flex:1,width:70,height:70
    },winnerName:{
        flex:1,fontSize:20,
    },itemName:{
        flex:1,fontSize:25 ,fontWeight:'bold',textAlign:'center',
    },itemPrice:{
        flex:1,fontSize:20,textAlign:'center',
    }
});

export default GiftTab;
