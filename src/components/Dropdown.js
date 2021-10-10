import React, { useState } from "react";
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";

const Dropdown = ({onChangeValue,items,defVal}) => {

  const [value,setValue] = useState(defVal ? defVal : 0);

  return (
    <DropDownPicker
      items={items}
      placeholder='Select'
      placeholderStyle={{color: colors.darkGray}}
      defaultValue={value}
      containerStyle={styles.container}
      style={styles.input}
      itemStyle={{ justifyContent: 'flex-start' }}
      dropDownStyle={styles.dropdown}
      labelStyle={styles.labelFont}
      onChangeItem={item => {
        setValue(item.value);
        onChangeValue(item.value);
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.heightLevel4,
    width: '90%'
  },
  input: {
    backgroundColor: colors.slightGray,
    borderWidth: 0,
    elevation: 1,
    borderRadius: 10
  },
  dropdown: {
    backgroundColor: colors.slightGray,
    elevation: 5,
    height: dimensions.heightLevel8
  },
  labelFont: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontMediumPlus
  }
})

export default Dropdown;
