import React, { useEffect, useState } from "react";
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import EmptyView from "./EmptyView";
import { icons } from "../configurations/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Alert = ({ isVisible, onBackdropPress, icon, iconColor, title, description, onYesPress, onNoPress,isSingleOption}) => {

  return (
    <Modal
      style={{justifyContent: 'center',alignItems: 'center'}}
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <FontAwesomeIcon color={iconColor ? iconColor : colors.blue} size={dimensions.heightLevel5/2} icon={icon ? icon : icons.INFO} />
          <EmptyView style={{width: '10%'}} />
          <Text style={{fontFamily: fontFamilies.nunitoBold,fontSize: fontSizes.fontXXLarge}}>{title}</Text>
        </View>

        <View style={{marginTop: '10%'}}>
            <Text style={styles.description}>{description}</Text>
        </View>

        {
          isSingleOption ?
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={onBackdropPress}
                style={styles.buttonContainer}>
                <Text style={{fontSize: fontSizes.fontMediumPlus,fontFamily: fontFamilies.nunitoBold,color: colors.blue}}>OK</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={onNoPress}
                style={[styles.buttonContainer,{marginLeft: '20%'}]}>
                <Text style={{fontSize: fontSizes.fontMediumPlus,fontFamily: fontFamilies.nunitoBold,color: colors.darkGray}}>NO</Text>
              </TouchableOpacity>

              <View style={{width: '20%',justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.divider}></View>
              </View>

              <TouchableOpacity
                onPress={()=>{
                  onYesPress();
                  onBackdropPress();
                }}
                style={[styles.buttonContainer,{marginRight: '20%'}]}>
                <Text style={{fontSize: fontSizes.fontMediumPlus,fontFamily: fontFamilies.nunitoBold,color: colors.blue}}>YES</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: colors.white,
    padding: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: fontSizes.fontMediumPlus,
    fontFamily: fontFamilies.nunitoRegular
  },
  footer: {
    marginTop: '15%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: .5,
    width: '100%',
    borderBottomColor: colors.blue
  },
  divider: {
    backgroundColor: colors.lightGray,
    height: dimensions.heightLevel7/2,
    width: '1%'
  },
  buttonContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    textAlign: 'right'
  }
})

export default Alert;
