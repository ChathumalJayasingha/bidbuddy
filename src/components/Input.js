import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { icons } from "../configurations/icons";

const Input = ({value, onFocus, onChangeText,size,maxLength,width, backgroundColor, placeholder, autoFocus, isPassword, isSearch, isEditable, isError, icon, keyboardType, onPressSearch}) => {

  const [showPassword,setShowPassword] = useState(false);
  const [secureText,setSecureText] = useState(false);

  useEffect(()=>{
    setSecureText(isPassword);
  },[])

  const pressOnEye = () =>{
    if (showPassword) {
      setShowPassword(false);
      setSecureText(true);
    } else {
      setShowPassword(true);
      setSecureText(false);
    }
  }

  return (
    <View style={{flexDirection: 'row'}}>

      {
        icon ?
          <FontAwesomeIcon style={styles.icon} size={size === 'large' ? dimensions.heightLevel2 : dimensions.heightLevel3/2} icon={icon} /> : null
      }

      <TextInput
        autoFocus={autoFocus}
        style={[styles.textInput,
          {height: size === 'large' ? dimensions.heightLevel5 : dimensions.heightLevel4},
          {fontFamily: size === 'large' ? fontFamilies.nunitoBold : fontFamilies.nunitoRegular},
          {fontSize: size === 'large' ? fontSizes.fontXXXLarge : fontSizes.fontMediumPlus},
          {width: width ? width : '90%'},
          {backgroundColor: backgroundColor ? backgroundColor : colors.slightGray},
          {paddingLeft: icon && size === 'large' ? dimensions.heightLevel4 : icon ? dimensions.heightLevel7/2 : dimensions.heightLevel1/2},
          {elevation: size === 'large' ? 2 : 1},
          {paddingRight: isPassword ? dimensions.heightLevel7/2 : 0},
          {borderWidth: isError ? 1 : 0},
          {borderColor: isError ? colors.red : 'transparent'}
        ]}
        maxLength={maxLength ? maxLength : 255}
        onChangeText={(text)=>onChangeText(text)}
        onFocus={onFocus ? onFocus : ()=>{}}
        secureTextEntry={secureText}
        keyboardType={keyboardType ? keyboardType : null}
        placeholder={placeholder}
        placeholderTextColor={colors.midGray}
        value={value}
        editable={isEditable}
      />

      {
        isPassword ?
          <TouchableOpacity onPress={pressOnEye} style={styles.eye} >
            <FontAwesomeIcon size={dimensions.heightLevel5/3} icon={showPassword ? icons.EYE : icons.EYE_SLASH} />
          </TouchableOpacity>
          :
          isSearch ?
            <TouchableOpacity onPress={onPressSearch ? onPressSearch : ()=>{}} style={styles.search} >
              <FontAwesomeIcon size={dimensions.heightLevel2} icon={icons.SEARCH} />
            </TouchableOpacity>
           : null
      }

    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    color: colors.black
  },
  icon: {
    marginTop: dimensions.heightLevel4/3,
    left: dimensions.heightLevel1,
    position:'absolute',
    elevation: 5
  },
  eye: {
    marginTop: dimensions.heightLevel1,
    position:'absolute',
    elevation: 5,
    right: 10
  },
  search: {
    position:'absolute',
    elevation: 1,
    right: 10,
    borderLeftWidth: 1,
    borderColor: colors.darkGray,
    padding: 10,
    marginTop: '1%'
  }
})

export default Input;
