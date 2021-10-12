import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer'
import React, {useState} from 'react'
import { View,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import { styles } from 'react-native-actions-sheet/src/styles'
import { Button,Drawer,Avatar,Title,Caption,Paragraph,Text,TouchableRipple,Switch } from 'react-native-paper'
import constants, { colors } from "../../configurations/constants";
import Icon from "react-native-vector-icons/RNIMigration";
const AuthContext = React.createContext();

export default function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={{flex:1,borderColor:'blue'}}>
                <View style={{padding:20,}}>
                    <View style={{flex:1,flexDirection:'row',borderColor:'red',marginTop:0,backgroundColor:colors.orange,borderRadius:10}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',
                        marginTop: 0,shadowColor:colors.orange,
                            }}>
                            <TouchableOpacity style={{flex:0.3,justifyContent:'center'}} onPress={()=>{
                                props.navigation.navigate('HomePage')
                            }}>
                            <Image style={{flex:.1,justifyContent:'center',alignItems:'center',}}  source={require('../../assets/back-icon.png')}/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center',}}>
                                <Text style={{flex:1,justifyContent:'center',fontWeight:'bold',fontSize:20,
                                textDecorationColor: "yellow",
                                color:colors.white,
                                textShadowColor: "red",
                                textShadowRadius: 1,
                                alignSelf:'center',textAlignVertical: 'center',}}>Menu</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: 0,}}>
                            <Image style={{flex:1,width:40,height:40,justifyContent:'center'}}
                                   source={require('../../assets/coin.gif')}/>
                            <TouchableOpacity  style={{flex:1,width:40,height:40,justifyContent:'center',
                                alignItems:'center'}}>
                                <Text>1235</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{flex:1,justifyContent:'center',
                                    alignItems:'center',}}
                                onPress={()=>{
                                props.navigation.navigate('EarnCoinPage')
                            }}>
                            <Image style={{width:20,height:20,justifyContent:'center'}}
                                   source={require('../../assets/plus-icon.png')}/>


                            </TouchableOpacity>

                        </View>

                    </View>


                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,marginTop:20,flexDirection:'row',
                //borderWidth:1,borderRadius:10,backgroundColor:'#F4AF81'
                }}>
                        <TouchableOpacity style={{flex:0.3,justifyContent:'center',}} onPress={()=>{
                            props.navigation.navigate('EditProfile')
                        }}>
                            <Image style={{flex:1,width:40,height:40}}  source={require('../../assets/DraweContent.png')}/>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{flex:1,alignSelf:'center',}}
                          onPress={()=>{
                            props.navigation.navigate('EditProfile')
                        }}>
                           <Text style={{fontWight:"bold",alignItem:'center',fontSize:15,
                           textDecorationColor: "yellow",
                           textShadowColor: "red",
                           textShadowRadius: 1,
                           color:colors.orange}}>Chamika Karunarathna</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                </View>

                <Drawer.Section >

                    <DrawerItem
                        label="Earn Coins"
                        onPress={() => {props.navigation.navigate('EarnCoinPage')}}

                 
     
                    />
                    <DrawerItem
                        label="History"
                        onPress={() => {props.navigation.navigate('History')}}
                    />
                    <DrawerItem
                        label="Help"
                        onPress={() => {props.navigation.navigate('Help')}}
                    />
                    <DrawerItem
                        label="Terms & Policies"
                        onPress={() => {props.navigation.navigate('Terms')}}
                    />
                    <DrawerItem
                        label="Logout"
                        onPress={() => {props.navigation.navigate('HomePage')}}
                    />
                   {/* <DrawerItem
                        label="Sign up"
                        onPress={() => {props.navigation.navigate('SignUp')}}
                    />
                    <DrawerItem
                        label="Login"
                        onPress={() => {props.navigation.navigate('SignIn')}}
                    />
               */}
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    </View>
    )
}
