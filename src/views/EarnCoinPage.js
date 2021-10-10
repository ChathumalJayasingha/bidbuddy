import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View} from "react-native";
import FirstPackageTabScreen from "../navigations/EarnCoinsTab/FirstPackageTabScreen";
import SecondPackageTabScreen from "../navigations/EarnCoinsTab/SecondPackageTabScreen";
import ThirdPackageTabScreen from "../navigations/EarnCoinsTab/ThirdPackageTabScreen";

const FirstStack = createStackNavigator();
function FirstStackScreen() {
    return (
        <FirstStack.Navigator>
            <FirstStack.Screen name="First" component={FirstPackageTabScreen}  options={{ headerShown: false }}/>
        </FirstStack.Navigator>
    );
}

const SecondStack = createStackNavigator();
function SecondStackScreen() {
    return (
        <SecondStack.Navigator>
            <SecondStack.Screen name="Second" component={SecondPackageTabScreen} options={{ headerShown: false }}/>
        </SecondStack.Navigator>
    );
}

const ThirdStack = createStackNavigator();
function ThirdStackScreen() {
    return (
        <ThirdStack.Navigator>
            <ThirdStack.Screen name="Third"  component={ThirdPackageTabScreen} options={{ headerShown: false }}/>
        </ThirdStack.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function EarnCoinPage() {
    return (

        <Tab.Navigator
            initialRouteName='FirstTab'
            tabBarOptions={{
                showImages:true,
                activeTintColor: "white",
                inactiveTintColor: "black",
                labelStyle: {
                    fontSize:10,
                },
                // elevation: 100,
                style:{
                    backgroundColor:'#FD6500',
                    margin:10,borderRadius:10
                },
                showLabel:false,
                underlineColor: 'red',
                indicatorStyle:{
                    backgroundColor: 'white',
                }
            }}>

            <Tab.Screen name="FirstTab" component={FirstStackScreen}
                        options={{
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/tab-credit-car-white.png')
                                            : require('../assets/tab-credit-car-black.png')
                                    }
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: 1,
                                    }}

                                />
                            ),
                        }}
            />

            {/* <Tab.Screen name="SecondTab" component={SecondStackScreen}
                        options={{

                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/tab-phone-white.png')
                                            : require('../assets/tab-phone-black.png')
                                    }
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: 1,

                                    }}
                                />
                            ),
                        }}
            /> */}
            <Tab.Screen name="ThirdTab" component={ThirdStackScreen}
                        options={{

                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/tab-friends-white.png')
                                            : require('../assets/tab-friends-black.png')
                                    }
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: 1,

                                    }}
                                />
                            ),
                        }}
            />


        </Tab.Navigator>
    );
}


