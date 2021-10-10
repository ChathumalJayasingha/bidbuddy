import constants, {colors} from '../../configurations/constants';
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView} from "react-native";
import {Button, TextInput} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';


class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName:'Dell Inspiron Laptop'
        };
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container} >
            <LinearGradient
                 colors={['#FFB200', '#FF9100', '#F55A00']}
                    style={styles.linearGradient}>
                <View style={styles.lblHeader}>
                    <Text style={styles.lblHeaderInnerText}>GRAND PRIZE OF THE WEEK</Text>
                </View>

                <View style={styles.imgWrapContainer}>
                    <TouchableOpacity style={styles.imgLeft} >
                        <Image source={require('../../assets/back-icon.png')} />
                    </TouchableOpacity>
                    <Image style={styles.imgMain} source={require('../../assets/laptop-3.jpg')}  />
                    <TouchableOpacity style={styles.imgRight} >
                        <Image source={require('../../assets/back-icon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lblItemDetails}>
                    <Text style={styles.lblItemName}>Dell Inspiron Laptop</Text>
                    <Text style={styles.lblItemPrice}>LKR.110000</Text>
                    <Text style={styles.lblDrawNumber}>(Draw number : <Text>5</Text> ) </Text>
                </View>
                <View style={styles.underContainer} >
                    <Text style={styles.lblProcessor}>Processor : 10th Generation intel core i3</Text>
                    <Text style={styles.lblMemory}>Memory & Storage : 4GB RAM Single channel DDR4 2666 MHz | 1TB 5400 RPM 2.5</Text>
                    <Text style={styles.lblDisplay}>Display : 15.6-inch FHD (1920 * 1080) Anti Glare LED-Backlit Display</Text>
                </View>
                </LinearGradient>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,backgroundColor:colors.orange,margin:20,borderRadius:20,
    },linearGradient:{
        borderRadius:20,
    },
    lblHeader: {
        flex: 1,width:'auto', height:50, alignItems:'center', justifyContent:'center',
    },lblHeaderInnerText:{
        fontSize:25,color:colors.white,
    },imgWrapContainer:{
        flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'flex-start',
    },imgLeft:{
        flex: 0.1,  width:20, height:20, marginLeft:20, marginRight: 10,
    },imgRight:{
        flex: 0.1,  width:20, height:20, alignItems:'center', transform: [{ rotate: '180deg' }], marginRight:20,
        marginLeft:10,
    },imgMain:{
        flex: 1,width:'auto', height:250,borderRadius: 5,
    },lblItemDetails:{
        flex:1, alignItems:'center',margin:20
    },lblItemName:{
        flex:1,fontSize:17,color:colors.white,
    },lblItemPrice:{
        flex:1,fontSize:17,color:colors.white,
    },lblDrawNumber:{
        flex:1,fontSize:17,color:colors.white,
    },underContainer:{
        flex:1,
    },lblProcessor:{
        flex:1,fontSize:17,color:colors.white,margin: 10,
    },lblDisplay:{
        flex:1,fontSize:17,color:colors.white,margin: 10,
    },lblMemory:{
        flex:1,fontSize:17,color:colors.white,margin: 10,
    }

});


export default HomeTab;




















































// import LinearGradient from 'react-native-linear-gradient';
// import React, {Component} from 'react';
// import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View,ScrollView} from "react-native";
// import {TextInput} from "react-native-paper";
// class GiftTab extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             itemName:'Dell Inspiron Laptop'
//         };
//     }
//
//     render() {
//         return (
//             <ScrollView style={styles.container} >
//                 <View  style={styles.DellComputerContainer}>
//                     <Text style={styles.txtHeader}>Price of the week</Text>
//                     <View style={styles.imageWrapContainer}>
//                         <TouchableOpacity>
//                             <Image style={styles.imgLeft} source={require('../../assets/back-icon.png')} />
//                         </TouchableOpacity>
//                         <Image style={styles.imgMain} source={require('../../assets/laptop.png')}  />
//                         <TouchableOpacity>
//                             <Image style={styles.imgRight} source={require('../../assets/back-icon.png')} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.lblItemDetails}>
//                         <Text style={styles.txtItemName}>Dell Inspiron Laptop</Text>
//                         <Text style={styles.txtItemPrice}>LKR.110000</Text>
//                         <Text>Draw number:<Text style={styles.txtDrawNumber}>5</Text> </Text>
//                     </View>
//                     <View style={styles.lblExtraDetails}>
//                         <Text style={styles.txtItemName}>Processor : 10th Generation intel core i3</Text>
//                         <Text style={styles.txtItemPrice}>Memory & Storage : 4GB RAM Single channel DDR4 2666 MHz | 1TB 5400 RPM 2.5</Text>
//                         <Text style={styles.txtDrawNumber}>Display : 15.6-inch FHD (1920 * 1080) Anti Glare LED-Backlit Display</Text>
//                     </View>
//
//                 </View>
//
//
//                 <View  style={styles.DellComputerContainer}>
//                     <Text style={styles.txtHeader}>Price of the week</Text>
//                     <View style={styles.imageWrapContainer}>
//                         <TouchableOpacity>
//                             <Image style={styles.imgLeft} source={require('../../assets/back-icon.png')} />
//                         </TouchableOpacity>
//                         <Image style={styles.imgMain} source={require('../../assets/laptop.png')}  />
//                         <TouchableOpacity>
//                             <Image style={styles.imgRight} source={require('../../assets/back-icon.png')} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.lblItemDetails}>
//                         <Text style={styles.txtItemName}>Dell Inspiron Laptop</Text>
//                         <Text style={styles.txtItemPrice}>LKR.110000</Text>
//                         <Text>Draw number:<Text style={styles.txtDrawNumber}>5</Text> </Text>
//                     </View>
//                     <View style={styles.lblExtraDetails}>
//                         <Text style={styles.txtItemName}>Processor : 10th Generation intel core i3</Text>
//                         <Text style={styles.txtItemPrice}>Memory & Storage : 4GB RAM Single channel DDR4 2666 MHz | 1TB 5400 RPM 2.5</Text>
//                         <Text style={styles.txtDrawNumber}>Display : 15.6-inch FHD (1920 * 1080) Anti Glare LED-Backlit Display</Text>
//                     </View>
//                 </View>
//
//
//
//             </ScrollView>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1, backgroundColor:'#02c95b',
//     },
//     txtHeader: {
//         flex: 1, backgroundColor:'#ffbf1e', width:'auto', height:50, alignItems:'center', justifyContent:'flex-start',
//     },imageWrapContainer:{
//         flex: 1, flexDirection:'row', alignItems:'center',
//         justifyContent:'flex-start', borderWidth: 5,borderColor:'red'
//     },imgLeft:{
//         flex: 1, backgroundColor:'rgba(255,255,255,0.6)', width:20, height:20, marginLeft:20,
//         marginRight: 10,borderWidth: 1,borderColor:'blue'
//     },imgRight:{
//         flex: 1, backgroundColor:'rgba(255,255,255,0.6)', width:20, height:20, alignItems:'center',
//         transform: [{ rotate: '180deg' }], marginRight:20,
//         marginLeft:10,borderWidth: 1,borderColor:'blue'
//     },imgMain:{
//         flex: 1,width:20, height:200, backgroundColor:'rgba(255,255,255,0.6)',borderWidth: 1,borderColor:'blue'
//     },txtItemName:{
//         flex:1,
//     },lblItemDetails:{
//
//     },txtItemPrice:{
//
//     },txtDrawNumber:{
//
//     },DellComputerContainer:{
//         borderWidth: 1,borderColor:'blue',margin:20
//     },lblExtraDetails:{
//
//     },
// });
//
//
// export default GiftTab;
