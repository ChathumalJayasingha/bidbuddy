import React, {Component, useState} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {ImageBackground, StyleSheet,Image, Text, TouchableOpacity, View, KeyboardAvoidingView,ScrollView,CheckBox} from "react-native";
import constants, {colors} from '../configurations/constants';


function SignIn(props) {
    const [isSelected, setSelection] = useState(false);

        return (

            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.headerImageWrap}>
                            <Image style={styles.headerImage} source={require('../assets/BidBuddyIcon.jpg')}/>
                    </View>

                    
                    <View style={styles.txtFieldWrap}>  
                            <TextInput style={styles.txtMobileNumber}
                                    label="Mobile Number"
                                    selectionColor='#FB7014'
                                    underlineColor="#FB7014"
                                    outlineColor='#FB7014'
                                    maxLength={10}
                                    keyboardType={'numeric'}
                                    theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                            />
                            <TextInput style={styles.txtPassword}
                                label="Password"
                                selectionColor='#FB7014'
                                underlineColor="#FB7014"
                                outlineColor='#FB7014'
                                    maxLength={20}
                                theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                                secureTextEntry={true}
                            />
                </View>
                
                <TouchableOpacity style={styles.forgotPasswordWrap}  >
                 
                    <Text style={styles.rememberME} >Remember Me </Text >


                    <Text style={styles.forgotPassword} 
                     onPress={()=>{props.navigation.navigate('ForgotPassword')}} >Forgot Password ?
                    </Text >

                </TouchableOpacity>
{/*                 
                <TouchableOpacity style={styles.rememberMEWrap}>
          
                    
                    
                </TouchableOpacity> */}
                
            
                
                <Button style={styles.signInButton} mode={'contained'} 
                onPress={() => props.navigation.navigate('HomePage')}>
                    Sign In
                </Button>

                <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}} 
                style={styles.registerContainer}><Text style={styles.dontRegisterYet} >Don't register yet ? 
                 </Text ><Text style={styles.signUp} >Sign Up </Text >
                 </TouchableOpacity>

                </ScrollView>

            </KeyboardAvoidingView>

        );
    
}


const styles=StyleSheet.create({
    container:{flex: 1,margin:20,},
    headerImageWrap:{
        flex:1,justifyContent:'center',marginTop:50,marginBottom:30
    },headerImage:{
        flex:1,height:80,width:280,alignSelf:'center'
    },txtFieldWrap:{
        flex:1,
    },forgotPasswordWrap:{
        flex:1,margin:20,flexDirection:'row'
    },forgotPassword:{
        flex:1,color:colors.orange,textAlign:'right',right:0
    },
    // rememberMEWrap:{
    //     flex:1,margin:20,
    // },
    rememberME:{
        flex:1,color:colors.gray,fontWeight:'bold',textAlign:'left'
    },registerContainer:{
        flex:1,flexDirection:'row',marginTop:20,
    },dontRegisterYet:{
        flex:1,color:colors.gray,textAlign:'right',
    },signUp:{
       flex:1, color:colors.orange,fontWeight:'bold',textAlign:'left',
    },signInButton:{
        backgroundColor:colors.orange,marginTop:20,  padding: 6,borderRadius:10,
        
    }


})


export default SignIn;

