import React, {Component} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {ImageBackground, StyleSheet,Image, Text, TouchableOpacity, ScrollView,View, KeyboardAvoidingView,CheckBox} from "react-native";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <View behavior='padding' style={styles.mainContainer} >
                <ScrollView>

                    <Text style={styles.headLine}>Send verification code to your registered mobile number ?</Text>
                    <Button style={styles.btnSend} mode={'contained'} onPress={() => this.props.navigation.navigate('HomePage')}>
                        Send
                    </Button>
                    {/*<Image style={styles.imgLogo} source={require('../assets/BidBuddyIcon.jpg')}/>*/}
                    <View style={styles.txtContainer} >
                        <TextInput style={styles.txtFirstNumber}
                                   selectionColor='#FB7014'
                                   underlineColor="#FB7014"
                                   outlineColor='#FB7014'
                                   maxLength={1}
                                   theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                                   keyboardType="numeric"
                        /><TextInput style={styles.txtSecondNumber}
                                     selectionColor='#FB7014'
                                     underlineColor="#FB7014"
                                     outlineColor='#FB7014'
                                     maxLength={1}
                                     theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                                     keyboardType="numeric"
                    />
                        <TextInput style={styles.txtThirdNumber}
                                   selectionColor='#FB7014'
                                   underlineColor="#FB7014"
                                   outlineColor='#FB7014'
                                   maxLength={1}
                                   theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                                   keyboardType="numeric"
                        /><TextInput style={styles.txtFourthNumber}
                                     selectionColor='#FB7014'
                                     underlineColor="#FB7014"
                                     outlineColor='#FB7014'
                                     maxLength={1}
                                     theme={{ colors: { primary: '#FB7014',underlineColor:'transparent',}}}
                                     keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.verificationCode} >Enter your verification code here</Text>
                    <Button style={styles.btnProcessed} mode={'contained'} onPress={() => this.props.navigation.navigate('HomePage')}>
                        Processed
                    </Button>
                </ScrollView>


            </View>

        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
    },headLine:{
        color: '#9C9C9C',
        fontSize:20,
        margin:30,
        letterSpacing:2
    },btnSend:{
        backgroundColor:'#FB6400',
        padding: 6,
        marginLeft:30,
        borderRadius:10,
        marginTop:5,
        width:100
    },txtContainer:{
        flex: 1,
        flexDirection: 'row',
        marginLeft:30,
        marginRight:30,

    },txtFirstNumber:{
        flex:1,
        marginRight:10,
        backgroundColor: '#F2F2F2'
    },txtSecondNumber:{
        flex:1,
        backgroundColor: '#F2F2F2',
        marginRight:10,
    },txtThirdNumber:{
        flex:1,
        backgroundColor: '#F2F2F2',
        marginRight:10,
    },txtFourthNumber:{
        flex:1,
        backgroundColor: '#F2F2F2',
        marginRight:10,
    },verificationCode:{
        color: '#9C9C9C',
        fontSize:20,
        margin:30,
        letterSpacing:2
    },btnProcessed:{
        backgroundColor:'#FB6400',
        padding: 6,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        marginTop:30,
    }
})


export default SignIn;
