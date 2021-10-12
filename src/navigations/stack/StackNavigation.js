import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, TouchableOpacity,Text, View, Image, Button} from "react-native";
import FirstPage from "../../views/FirstPage";
import SecondPage from "../../views/SecondPage";
import ThirdPage from "../../views/ThirdPage";
import FourthPage from "../../views/FourthPage";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FifthPage from "../../views/FifthPage";
import HomePage from "../../views/HomePage";
import Menu from "../../views/Menu";
import EditProfile from "../../views/EditProfile";
import SignIn from "../../views/SignIn";
import ForgotPassword from "../../views/ForgotPassword";
import SignUp from "../../views/SignUp";
import Terms from "../../views/Terms";
import {colors} from "../../configurations/constants";
import {createDrawerNavigator} from "@react-navigation/drawer";
import MenuTab from "../HomePageTab/MenuTab";
import EarnCoinPage from "../../views/EarnCoinPage";
import Help from "../../views/Help";
import Drawer from '../drawer/DrawerNavigation'
import Payment from "../../views/Payment";
import History from "../../views/History";



const Stack = createStackNavigator();

export default class StackNavigation extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
    return (
        
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: colors.orange
                },
                // headerTitle:'Chaqthu',
                // cardStyle: {
                //     backgroundColor: 'red',
                //     opacity: 1,
                // }

            }}>

                <Stack.Screen name="HomePage" component={HomePage}
                              options={{
                                  headerShown: true,
                                  title: '',
                                  presentation: 'card',
                                  headerTitleAlign: 'center',
                                  headerRight: () => (
                                          
                                    <View style={{flex: 1, flexDirection: 'row',}}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                        }}
                                      onPress={()=>{
                                        this.props.navigation.navigate('EarnCoinPage')
                                    }}
                                    >
                                            <Image
                                                style={{
                                                    flex: 1,
                                                    //width: '100%',
                                                    resizeMode: 'contain',
                                                    //height: '100%',
                                                    aspectRatio: 1.4,
                                                }}
                                                source={require('../../assets/coin.gif')}
                                            />
                                    </TouchableOpacity>




                                    <TouchableOpacity  
                                      onPress={()=>{
                                        this.props.navigation.navigate('EarnCoinPage')
                                    }} 
                                    style={{
                                            flex: 2,
                                        }}> 
                                                <Text
                                                    style={{
                                                        flex: 1,
                                                        fontSize: 25,
                                                        textAlign: 'center',
                                                        fontWeight: 'light',
                                                        //borderWidth:2,
                                                        justifyContent:'center',
                                                        alignItems:'center',
                                                        color:'white',
                                                        textAlignVertical: "center",
                                                    }}
                                                >332</Text>
                                    </TouchableOpacity>




                                  <TouchableOpacity 
                                      onPress={()=>{
                                          this.props.navigation.navigate('EarnCoinPage')
                                      }}
                                       style={{
                                          flex: 1,
                                          padding:3,
                                        }}
                                  >
                                          <Image
                                                style={{
                                                flex: 1,
                                                resizeMode: 'contain',
                                                justifyContent: 'center',
                                                //  borderWidth:2,
                                                width:'50%',
                                                }}
                                       
                                          source={require('../../assets/plus-icon.png')}
                                          />

                                  </TouchableOpacity>
                                                                        
                                </View>
                                        

                                  ),
                                  headerLeft: () => (
                                          <Image
                                              style={{
                                                 position:'absolute',borderWidth:2,
                                                 width:'50%',height:'83%',marginLeft:7,
                                              }}
                                              source={require('../../assets/logo-5.png')    }
                                          />
                                      

                                  ),
                              }}
                              
                />

                <Stack.Screen options={{headerShown: false}} name="FirstPage" component={FirstPage}/>
                <Stack.Screen options={{headerShown: false}} name="SecondPage" component={SecondPage}/>
                <Stack.Screen options={{headerShown: false}} name="ThirdPage" component={ThirdPage}/>
                <Stack.Screen options={{headerShown: false}} name="FourthPage" component={FourthPage}/>
                <Stack.Screen options={{headerShown: false}} name="FifthPage" component={FifthPage}/>


                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    title: 'Payment',
                }} name="Payment" component={Payment}/>


                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    title: 'Sign in',
                }} name="SignIn" component={SignIn}/>

                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    title: 'History',
                }} name="History" component={History}/>




                {/*<Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} />*/}
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'Help',
                    headerTintColor:'white',
                    }} name="Help" component={Help}/>

                <Stack.Screen  name="EarnCoinPage" component={EarnCoinPage}
                
                         options={{
                             headerShown: true,
                            headerTitleAlign: 'center',
                            title: 'Earn Coins',
                            headerTintColor:'white',
                        }}
                />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}
                              options={{
                                  headerShown: true,
                                  headerTitleAlign: 'center',
                                  headerTintColor: 'white',
                                  title: 'Forgot Password',
                              }}
                />
                <Stack.Screen name="SignUp" component={SignUp}
                              options={{
                                  headerShown: true,
                                  headerTitleAlign: 'center',
                                  headerTintColor: 'white',
                                  title: 'Sign up',
                                  
                              }}
                />
                <Stack.Screen name="Terms" component={Terms}
                              options={{
                                  headerShown: true,
                                  headerTitleAlign: 'center',
                                  title: 'Terms & Policies',
                                  headerTintColor: 'white',
                              }}
                />
                    <Stack.Screen name="EditProfile" component={EditProfile}
                              options={{
                                  headerShown: true,
                                  headerTitleAlign: 'center',
                                  headerTintColor: 'white',
                                  title: 'Manage Profile',
                              }}
                />


            </Stack.Navigator>


    );
}
}







