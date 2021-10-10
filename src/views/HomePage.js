import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GiftTab from '../navigations/HomePageTab/GiftTab';
import HomeTab from '../navigations/HomePageTab/HomeTab';
import MenuTab from '../navigations/HomePageTab/MenuTab';
import NotificationTab from '../navigations/HomePageTab/NotificationTab';
import WinnersTab from '../navigations/HomePageTab/WinnersTab';
import Menu from '../views/Menu';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, Image,View} from "react-native";
import Icon from "react-native-vector-icons/RNIMigration";
import TabBar from "react-native-underline-tabbar";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeTab}  options={{ headerShown: false }}/>
        </HomeStack.Navigator>
    );
}




const MenuStack = createStackNavigator();
function MenuStackScreen() {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
        </MenuStack.Navigator>
    );
}


const GiftStack = createStackNavigator();
function GiftStackScreen() {
    return (
        <GiftStack.Navigator>
            <GiftStack.Screen name="Gift" component={GiftTab} options={{ headerShown: false }}/>
        </GiftStack.Navigator>
    );
}

const NotificationStack = createStackNavigator();
function NotificationStackScreen() {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="Notification" component={NotificationTab} options={{ headerShown: false }}/>
            {/*<NotificationStack.Screen name="Details" component={NotificationTab} />*/}
        </NotificationStack.Navigator>
    );
}

const WinnerStack = createStackNavigator();
function WinnerStackScreen() {
    return (
        <WinnerStack.Navigator>
            <WinnerStack.Screen name="Winner"  component={WinnersTab} options={{ headerShown: false }}/>
        </WinnerStack.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function HomePage() {
    return (

        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                showImages:true,
                activeTintColor: "white",
                inactiveTintColor: "black",
                labelStyle: {fontSize:10,},
                // elevation: 100,
                style:{backgroundColor:'#FD6500',
                    // margin:4,borderRadius:10
                },
                showLabel:false,
                underlineColor: 'red',
                tabBarPressColor: 'blue',
                indicatorStyle:{
                    backgroundColor: 'white',
                },
                swipeEnabled:false,
                tabBarOptions: {
                scrollEnabled:false,
                },

            }}
            >
            <Tab.Screen name="Home" component={HomeStackScreen}
            
                        options={{
                            swipeEnabled:false,
                            tabBarOptions: {
                            scrollEnabled:false,
                            },
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/BarIcon/Home_White.png')
                                            : require('../assets/BarIcon/Home_Black.png')
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

            <Tab.Screen name="Gift" component={GiftStackScreen}
                        options={{
                            swipeEnabled:false,
                            tabBarOptions: {
                            scrollEnabled:false,
                            },
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/BarIcon/Gift_White.jpg')
                                            : require('../assets/BarIcon/Gift_Black.jpg')
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
            <Tab.Screen name="Winner" component={WinnerStackScreen}
                        options={{
                            swipeEnabled:false,
                            tabBarOptions: {
                            scrollEnabled:false,
                            },
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/BarIcon/Winner_White.jpg')
                                            : require('../assets/BarIcon/Winner_Black.jpg')
                                    }
                                    style={{
                                        width: 27,
                                        height: 27,
                                        borderRadius: 1,

                                    }}
                                />
                            ),
                        }}
            />
            <Tab.Screen name="Notification" component={NotificationStackScreen}
                        options={{
                            swipeEnabled:false,
                            tabBarOptions: {
                            scrollEnabled:false,
                            },
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/BarIcon/Notification_White.jpg')
                                            : require('../assets/BarIcon/Notification_Black.jpg')
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

            {/*<Tab.Screen name="Menu" component={MenuStackScreen} />*/}
            <Tab.Screen name="Menu" component={MenuStackScreen} 
            
                        listeners={({navigation}) => ({
                            tabPress: event => {
                                console.log("hi")
                                event.preventDefault();     //preventing dafault.
                                navigation.openDrawer();   //calling custom
                            },
                        })}

                        options={{
                            swipeEnabled:false,
                            tabBarOptions: {
                            scrollEnabled:false,
                            },
                            tabBarIcon: ({focused, color, size}) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../assets/BarIcon/Menu_White.png')
                                            : require('../assets/BarIcon/Menu_Black.png')
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


