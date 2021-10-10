
import React, {Component} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {Image, ImageBackground,ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.imgTermsLogo} source={require('../assets/TermsAndCondition.jpg')}>

                </Image>
                <Text style={styles.txtLorem}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tincidunt tellus. Nulla facilisi. Curabitur in erat egestas, molestie lectus ac, aliquet lectus. Aenean in euismod erat. Donec sagittis felis sit amet dapibus condimentum. Aliquam dapibus volutpat nunc, sed ultricies urna hendrerit sed. Etiam lectus ipsum, porta sit amet sem ut, consectetur ornare diam. Ut dapibus sapien risus, a hendrerit erat aliquam ut. Etiam rutrum sagittis condimentum. Morbi eget libero et sem fringilla eleifend. Vestibulum neque purus, dapibus et placerat sed, varius eu erat.
                    Proin mollis sapien sit amet tellus vestibulum dictum. Aliquam finibus eros ante, in faucibus magna venenatis et. Etiam vestibulum neque nisi, vitae fermentum libero sodales sed. Aliquam feugiat vel diam eu pretium. Praesent laoreet aliquet urna non mattis. Donec auctor ornare nibh. Etiam rhoncus eros lorem, sed iaculis ex sagittis feugiat. In pulvinar scelerisque neque, et vestibulum orci consectetur quis. Pellentesque facilisis luctus tellus, id vestibulum est accumsan quis. Integer consectetur viverra ex. Donec ut auctor nulla. In odio ex, mollis et purus fermentum, vestibulum efficitur purus. Morbi pellentesque est sem, non mollis dolor ultrices a. Etiam id lacus at justo laoreet cursus non ut mauris. Phasellus tempus augue vitae nisl lacinia ultricies.
                    Quisque viverra eget neque quis condimentum. Maecenas condimentum ornare nibh eget rutrum. Nunc aliquam lacus nec magna gravida gravida. Sed euismod ante in lacus pulvinar, nec condimentum nibh blandit. Fusce feugiat porta elit, vitae euismod ex feugiat vitae. Sed sodales imperdiet est ut molestie. Curabitur tincidunt leo id urna aliquet laoreet. Maecenas non vulputate leo. Vestibulum augue felis, tristique in finibus id, pulvinar vitae urna. Donec in tellus ornare, sodales tortor eu, aliquam felis. Donec tempus lacus at scelerisque pulvinar. Vivamus gravida magna vitae tellus lacinia lacinia. Maecenas feugiat congue leo ac lacinia. Sed nec ornare diam, at placerat tortor.Curabitur vitae nunc faucibus quam dignissim luctus sit amet id tellus. Etiam vel elementum erat, non blandit massa. Proin ut mauris orci. Donec aliquet lacus et libero cursus cursus. Etiam sit amet tellus sed arcu blandit laoreet a a purus. Nam justo ante, hendrerit non facilisis id, accumsan ac orci. Cras sit amet dignissim magna. Proin volutpat tortor id cursus auctor. Duis volutpat finibus elit, ac consectetur mi laoreet non. Sed a mi eleifend, aliquet leo auctor, gravida diam.lectus et iaculis consectetur. Cras at pulvinar turpis, id fringilla urna. Donec rutrum nibh in erat convallis tempus. Proin imperdiet velit at condimentum semper. Proin consequat sed odio a luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi laoreet sem scelerisque, cursus tortor ac, ultricies turpis.
                </Text>
            </ScrollView>

        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    imgTermsLogo:{
        flex: 1,
        alignItems:'center',
        width:340,
        height:230,
        marginLeft:40,
        marginTop:40
    },txtLorem:{
        margin:20,
        fontSize:18,
        alignItems: 'center',
        color: '#9C9C9C',
        justifyContent:'center',
        letterSpacing:2,
        textAlign:'center'
    }

})


export default EditProfile;
