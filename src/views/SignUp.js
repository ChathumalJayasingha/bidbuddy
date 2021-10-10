import React, {Component} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {ImageBackground, StyleSheet,Image, Text, TouchableOpacity, ScrollView,View, KeyboardAvoidingView,CheckBox} from "react-native";
import constants, {colors} from '../configurations/constants';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <KeyboardAvoidingView  style={styles.mainContainer} >
                <ScrollView>

                    <Image style={styles.imgLogo} source={require('../assets/BidBuddyIcon.jpg')}/>
                    <View style={styles.txtNames} >
                        <TextInput style={styles.txtFirstName}
                                   label="First Number"
                                   selectionColor='#FB7014'
                                   underlineColor="#FB7014"
                                   outlineColor='#FB7014'
                                   maxLength={20}
                                   theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                        /><TextInput style={styles.txtLastName}
                                     label="Last Number"
                                     selectionColor='#FB7014'
                                     underlineColor="#FB7014"
                                     outlineColor='#FB7014'
                                     maxLength={20}
                                     theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />


                    </View>

                    <TextInput style={styles.txtEmail}
                               label="Email"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               maxLength={30}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <TextInput style={styles.txtMobile}
                               label="Mobile Number"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               maxLength={10}
                               keyboardType={'numeric'}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <TextInput style={styles.txtAddress}
                               label="Address"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               maxLength={30}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                   <TextInput style={styles.txtFirstPassword}
                                 label="Password"
                                 selectionColor='#FB7014'
                                 underlineColor="#FB7014"
                                 outlineColor='#FB7014'
                                 maxLength={20}
                                 secureTextEntry={true}
                                 theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                />
                    <TextInput style={styles.txtConfirmPassword}
                               label="Confirm Password"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               secureTextEntry={true}
                               maxLength={20}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <Button style={styles.signUpButton} mode={'contained'} onPress={() => this.props.navigation.navigate('HomePage')}>
                        Sign Up
                    </Button>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}} style={styles.btnSignIn}><Text style={styles.txtAlreadyMember} > already member ?  </Text ><Text style={styles.txtSignIn} >Sign in </Text ></TouchableOpacity>

                </ScrollView>

            </KeyboardAvoidingView>

        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
    },imgLogo:{
        height:80,
        width:280,
        marginLeft:60,
        marginTop:70,
        marginBottom:20
    },input:{
        flex: 1,
        flexDirection:'column',
    },txtNames:{
        flex: 1,
        flexDirection: 'row',
        marginLeft:30,
        marginRight:30,

    },txtFirstName:{
        flex:1,
        marginRight:10,
        backgroundColor: colors.whiteMixGray
    },txtLastName:{
        flex:1,
        backgroundColor: colors.whiteMixGray
    },txtEmail:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.whiteMixGray
    },txtMobile:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.whiteMixGray
    },txtAddress:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.whiteMixGray
    },txtFirstPassword:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.whiteMixGray
    },txtConfirmPassword:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.whiteMixGray
    },signUpButton:{
        backgroundColor:colors.orange,
        padding: 6,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        marginTop:30,
    },btnSignIn:{
        flexDirection:'row',
        margin:30
    },txtAlreadyMember:{
        color: colors.gray,
    },txtSignIn:{
        color:colors.orange,
        fontWeight:'bold'
    }
})


export default SignIn;
