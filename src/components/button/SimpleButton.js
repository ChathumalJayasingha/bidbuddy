  import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../../configurations/constants";

const SimpleButton = ({name,onPress,width,isDisable}) => {
  return (
    isDisable ?
      <TouchableWithoutFeedback>
        <View style={[styles.inActiveButton,{width: width ? width : dimensions.widthLevel10}]}>
          <Text style={[styles.name,{color: colors.darkGray}]}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
      :
      <TouchableOpacity
        onPress={onPress ? onPress : ()=>{}}
        style={[styles.activeButton,{width: width ? width : dimensions.widthLevel10}]}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  activeButton: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inActiveButton: {
    backgroundColor: colors.slightGray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: fontSizes.fontXLarge,
    fontFamily: fontFamilies.nunitoRegular,
    padding: '4%'
  }
})

export default SimpleButton;
