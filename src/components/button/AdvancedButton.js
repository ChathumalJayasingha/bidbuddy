import React from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../../configurations/constants";
import LinearGradient from "react-native-linear-gradient";

const AdvancedButton = ({name, onPress, isDisable,width}) => {

  const buttonContent = (
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      style={[styles.button,{width: width ? width : dimensions.heightLevel7*2}]}
      colors={isDisable ? [colors.white,colors.blue] : [colors.darkBlue, colors.skyBlue, colors.skyBlue]}>
      <Text style={styles.text}>{name}</Text>
    </LinearGradient>
  );

  return (
    isDisable ?
      <TouchableWithoutFeedback>
        {buttonContent}
      </TouchableWithoutFeedback>
      :
      <TouchableOpacity onPress={onPress ? onPress : ()=>{}}>
        {buttonContent}
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: dimensions.heightLevel4,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: fontSizes.fontXXLarge,
    fontFamily: fontFamilies.nunitoBold,
    color: colors.darkBlue
  }
})

export default AdvancedButton;
