import React, {Component, useState} from 'react';
import {ImageBackground, StyleSheet, Button,Image,Text, TouchableOpacity, View} from "react-native";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View>
                
{/* 

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('EditProfile')
                }}>
                    <Text>Chamika Karunarathne</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Terms')}>
                    <Text>Terms & Policies</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Help')}>
                    <Text>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text>Log in</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },image:{
        resizeMode: 'stretch',
    }
});

export default Menu;
