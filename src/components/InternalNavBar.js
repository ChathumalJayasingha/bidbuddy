import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import LinearGradient from "react-native-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { icons } from "../configurations/icons";
import { useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import { generateInitialLetters, getRandomColor } from "../utility/appUtils";
import * as NavActions from '../navigations/NavActions';

const InternalNavBar = ({title,headerActionButton}) => {

  const userSuccess = useSelector(state => state.authState.userSuccess);

  return (
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      style={styles.container}
      colors={[colors.blue,colors.skyBlue]}>

      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={()=>{
            if (headerActionButton === 'BACK') {
              NavActions.goBack();
            } else if (headerActionButton === 'RESET') {
              NavActions.reset('Drawer');
            } else {
              NavActions.openDrawer();
            }
          }}
          style={{marginLeft: '20%'}}>
          <FontAwesomeIcon color={colors.white} size={30} icon={headerActionButton === 'BACK' || headerActionButton === 'RESET' ? icons.ARROW_LEFT : icons.HAMBURGER_ICON} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text style={[styles.title,{marginLeft: '-10%'}]}>{title}</Text>
      </View>
      {
        userSuccess ?
          <View style={{flex: 2,alignItems: 'flex-end',marginRight: '5%'}}>
            <Text numberOfLines={2} style={styles.shopName}>{userSuccess.result.workPlaceDto.workPlaceName}</Text>
            <TouchableOpacity
              onPress={()=>NavActions.navigate('My Profile')}
              style={styles.userContainer}>
              <View style={{flex: 2}}>
                {
                  userSuccess.result.profileLogoUrl ?
                    <FastImage
                      style={styles.image}
                      source={{
                        uri: userSuccess.result.profileLogoUrl,
                        priority: FastImage.priority.normal,
                      }} />
                    :
                    <View style={[styles.image,{justifyContent: 'center',alignItems: 'center',backgroundColor: getRandomColor()}]}>
                      <Text style={styles.initText}>{generateInitialLetters(userSuccess.result.firstName + ' ' + userSuccess.result.lastName)}</Text>
                    </View>
                }
              </View>
              <View style={{flex: 3,justifyContent: 'center'}}>
                <Text numberOfLines={2} style={styles.userName}>{userSuccess.result.firstName + ' ' + userSuccess.result.lastName}</Text>
                <Text numberOfLines={2} style={styles.mobileNumber}>{userSuccess.result.mobileNumber}</Text>
              </View>
            </TouchableOpacity>
          </View>
          :
          <View style={{flex: 2}}></View>

      }

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: dimensions.fullWidth,
    height: dimensions.heightLevel8
  },
  title: {
    fontSize: fontSizes.fontXXLarge,
    color: colors.white,
    fontFamily: fontFamilies.nunitoBold
  },
  shopName: {
    fontSize: fontSizes.fontMedium,
    color: colors.white,
    fontFamily: fontFamilies.nunitoBold,
    marginTop: '5%',
    marginBottom: '5%',
    width: '95%'
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%'
  },
  image: {
    width: dimensions.heightLevel4,
    height: dimensions.heightLevel4,
    borderRadius: 100
  },
  userName: {
    fontSize: fontSizes.fontMedium,
    color: colors.white,
    fontFamily: fontFamilies.nunitoRegular,
    textAlign: 'left'
  },
  mobileNumber: {
    fontSize: fontSizes.fontMedium,
    color: colors.white,
    fontFamily: fontFamilies.nunitoRegular
  },
  initText: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontMedium,
    color: colors.white
  }
})

export default InternalNavBar;
