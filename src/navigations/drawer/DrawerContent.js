import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer'
import React, {useState} from 'react'
import { View,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import { styles } from 'react-native-actions-sheet/src/styles'
import { Button,Drawer,Avatar,Title,Caption,Paragraph,Text,TouchableRipple,Switch } from 'react-native-paper'
import constants from "../../configurations/constants";
import Icon from "react-native-vector-icons/RNIMigration";
const AuthContext = React.createContext();

export default function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={{flex:1,borderColor:'blue'}}>
                <View style={{padding:20,}}>
                    <View style={{flex:1,flexDirection:'row',}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: 25,
                            }}>
                            <TouchableOpacity style={{flex:0.3,justifyContent:'center'}} onPress={()=>{
                                props.navigation.navigate('HomePage')
                            }}>
                            <Image style={{flex:.1,justifyContent:'center',alignItems:'center',}}  source={require('../../assets/back-icon.png')}/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                                <Text style={{flex:1,justifyContent:'center',fontWeight:'bold',fontSize:25,alignSelf:'center',textAlignVertical: 'center',}}>Menu</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: 25}}>
                            <Image style={{flex:1,width:40,height:40,justifyContent:'center'}}
                                   source={require('../../assets/coin.gif')}/>
                            <TouchableOpacity  style={{flex:1,width:40,height:40,justifyContent:'center',
                                alignItems:'center'}}>
                                <Text>4634</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{flex:1,justifyContent:'center',
                                    alignItems:'center',}}
                                onPress={()=>{
                                props.navigation.navigate('EarnCoinPage')
                            }}>
                            <Image style={{width:20,height:20,justifyContent:'center'}}
                                   source={require('../../assets/plus.png')}/>


                            </TouchableOpacity>

                        </View>

                    </View>


                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,marginTop:20,flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:0.3,justifyContent:'center',}} onPress={()=>{
                            props.navigation.navigate('EditProfile')
                        }}>
                            <Image style={{flex:1,width:30,height:30}}  source={require('../../assets/DraweContent.png')}/>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{flex:1,alignSelf:'center',}}
                          onPress={()=>{
                            props.navigation.navigate('EditProfile')
                        }}>
                           <Text style={{fontWight:"bold",alignItem:'center',}}>Chamika Karunarathna</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                </View>

                <Drawer.Section >
                    <DrawerItem
                        label="Help"
                        onPress={() => {props.navigation.navigate('Help')}}
                    />
                    <DrawerItem
                        label="Terms & Policies"
                        onPress={() => {props.navigation.navigate('Terms')}}
                    />
                    <DrawerItem
                        label="Sign up"
                        onPress={() => {props.navigation.navigate('SignUp')}}
                    />
                    <DrawerItem
                        label="Login"
                        onPress={() => {props.navigation.navigate('SignIn')}}
                    />
                    <DrawerItem
                        label="Logout"
                        onPress={() => {props.navigation.navigate('HomePage')}}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    </View>
    )
}
