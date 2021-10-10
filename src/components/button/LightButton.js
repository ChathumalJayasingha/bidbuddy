import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../configurations/constants";

const LightButton = ({name,onPress,isDisable}) => {

  const content = (
    <View style={isDisable ? styles.inActiveButton : styles.activeButton}>
      <Text style={[styles.text,{paddingLeft: isDisable ? '2%' : 0,paddingRight: isDisable ? '2%' : 0}]}>{name}</Text>
    </View>
  )
  return (
    isDisable ?
      <TouchableWithoutFeedback onPress={onPress ? onPress : ()=>{}}>
        {content}
      </TouchableWithoutFeedback>
      :
      <TouchableOpacity onPress={onPress ? onPress : ()=>{}}>
        {content}
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: '#56BAF8',
    padding: '5%',
    borderRadius: 5,
    alignItems:'center'
  },
  inActiveButton: {
    backgroundColor: colors.lightGray,
    padding: '3%',
    borderRadius: 5,
    alignItems:'center'
  },
  text: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontMediumPlus,
    color: colors.white
  }
})

export default LightButton;
