import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, BackHandler } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import { LinearTextGradient } from "react-native-text-gradient";
import * as NavActions from '../navigations/NavActions';

const backIcon = require('../assets/back-icon.webp');

const ExternalNavBar = ({name}) => {

  const [showTitle,setShowTitle] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowTitle(true);
    },500)

    const backHandler = BackHandler.addEventListener("hardwareBackPress", goBack);

    return ()=> backHandler.remove();
  },[])

  const goBack = () => {
    NavActions.reset('SearchWorkPlace');
    return true;
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={backIcon} style={styles.backIcon}/>
      </TouchableOpacity>

      {
        showTitle ?
          <LinearTextGradient
            style={styles.navText}
            locations={[0, 1]}
            colors={[colors.darkBlue, colors.skyBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.navText}>{name}</Text>
          </LinearTextGradient> : <Text>...</Text>
      }

      <View></View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: dimensions.fullWidth
  },
  navText: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontXXXLarge
  },
  backIcon: {
    width: dimensions.heightLevel3,
    height: dimensions.heightLevel3
  }
})

export default ExternalNavBar;
