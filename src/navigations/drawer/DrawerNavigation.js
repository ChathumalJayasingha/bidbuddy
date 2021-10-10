 import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EditProfile from "../../views/EditProfile";
import StackNavigation from "../stack/StackNavigation";
import Help from "../../views/Help";
import SignUp from "../../views/SignUp";
import SignIn from "../../views/SignIn";
import Terms from "../../views/Terms";
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer  >
      <Drawer.Navigator  drawerContent={DrawerContent}>  
      <Drawer.Screen name="StackNavigation" component={StackNavigation}  options={{headerShown:false,title:"",}} />
      {/* <Drawer.Screen name="DrawerDetails" component={DrawerDetails} options={{headerShown:true}} /> */}
          {/*<Drawer.Screen name="StackNavigation" component={StackNavigation}  options={{headerShown:false,title:"",}} />
           <Drawer.Screen name="EditProfile" component={EditProfile} options={{headerShown:true}} />
          <Drawer.Screen name="Terms" component={Terms} options={{headerShown:false}} />
          <Drawer.Screen name="Help" component={Help} options={{headerShown:true}} />
          <Drawer.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
          <Drawer.Screen name="SignIn" component={SignIn} options={{headerShown:false}} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


