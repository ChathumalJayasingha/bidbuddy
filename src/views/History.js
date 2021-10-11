import React, {useState,useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, ScrollView,TouchableOpacity, View,FlatList} from "react-native";
import constants, { colors } from '../configurations/constants'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default function History(){


    const tableHead= ['Date	', 'Value', 'Is Active	', 'Is Win'],
    tableData= [
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'yes', ''],
        ['Aug 23, 2021, 11:14:35 AM	', '1000', 'no', ''],
      ]

        return (
            <ScrollView style={styles.mainWrap}>
                <View style={styles.headerTextWrap}>
                    <Text style={styles.headerText}>(DRAW NO. 6) APPLE MacBook PRO Laptop - LKR 416000</Text>
                </View>                
                <View style={styles.contentWrap}>
                    <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 2, borderColor: colors.orange}}>
                            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={tableData} textStyle={styles.text}/>
                        </Table>
                    </View>
                </View>
            </ScrollView>
          

        );
    }


const styles = StyleSheet.create({
    mainWrap:{
        flex:1,borderWidth:3,borderColor:'orange',borderRadius:10, margin:10,
    },headerText:{
        flex:1,fontWeight:'bold',color:colors.orange
    },headerTextWrap:{
        flex:1,alignItems:'center',marginTop:10,marginBottom:10,
    },contentWrap:{
        flex:1,borderRadius:10, margin:10,
    },

     container: { flex: 1, padding: 1, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: colors.orange,color:colors.white },
    text: { margin: 6 }
});



