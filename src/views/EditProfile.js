import React, {Component} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {ImageBackground, StyleSheet,Image, Text, TouchableOpacity, ScrollView,View, KeyboardAvoidingView,CheckBox} from "react-native";

class EditProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <KeyboardAvoidingView  style={styles.mainContainer} >
                <ScrollView>


                    <Image style={styles.imgLogo} source={require('../assets/EditProfile.jpg')}/>

                        <TextInput style={styles.txtFirstName}
                                   label="First Name"
                                   selectionColor='#FB7014'
                                   underlineColor="#FB7014"
                                   outlineColor='#FB7014'
                                   placeholder='json'
                                   maxLength={20}
                                   theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                        /><TextInput style={styles.txtLastName}
                                     label="Last Name"
                                     selectionColor='#FB7014'
                                     underlineColor="#FB7014"
                                     outlineColor='#FB7014'
                                     placeholder='Durlo'
                                     maxLength={20}
                                     theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />




                    <TextInput style={styles.txtEmail}
                               label="Email"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               placeholder='email@domain.com'
                               maxLength={20}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <TextInput style={styles.txtMobile}
                               label="Mobile Number"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               placeholder='+12 423 535 51'
                               maxLength={10}
                               keyboardType={'numeric'}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <TextInput style={styles.txtAddress}
                               label="Address"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               placeholder='Thooththukodi,India'
                               maxLength={30}
                               minLength={10}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />

                    <Text style={styles.txtChangePassword}>Change Your Password</Text>
                    <TextInput style={styles.txtOldPassword}
                               label="Old Password"
                               selectionColor='#FB7014'
                               underlineColor="#FB7014"
                               outlineColor='#FB7014'
                               maxLength={20}
                               secureTextEntry={true}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <TextInput style={styles.txtFirstPassword}
                               label="New Password"
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
                               maxLength={20}
                               secureTextEntry={true}
                               theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                    />
                    <Button style={styles.signUpButton} mode={'contained'} onPress={() => this.props.navigation.navigate('HomePage')}>
                        Save
                    </Button>


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
        // borderColor:'red',
        borderRadius: 50,
        height:100,
        width:100,
        marginLeft:140,
        marginTop:30,
        marginBottom:20
    },txtFirstName:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtLastName:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtEmail:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtMobile:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtAddress:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtFirstPassword:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },txtOldPassword:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },
    txtConfirmPassword:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        backgroundColor: '#F2F2F2'
    },signUpButton:{
        backgroundColor:'#FB6400',
        padding: 6,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        marginTop:30,
    },btnSignIn:{
        flexDirection:'row',
        margin:30
    },txtAlreadyMember:{
        color: '#9C9C9C',
    },txtSignIn:{
        color:'#FB6400',
        fontWeight:'bold',

    },txtChangePassword:{
        marginLeft:40,
        fontWeight: 'bold',
        fontSize:18,
        marginTop:40
    }
})


export default EditProfile;
