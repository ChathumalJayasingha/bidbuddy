import React, { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import { generateInitialLetters, getRandomColor } from "../utility/appUtils";
import FastImage from 'react-native-fast-image'

const ImageCard = ({ data, onPress, width, setRefAsInitLetter }) =>{

  const [imageLoaded,setImageLoaded] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : ()=>{}}
      style={[styles.container,{width: width ? width: dimensions.widthLevel2}]}>

      <View style={{flex: 1}}>
        {
          data.imageUrl ?
            imageLoaded ? null :
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size={'small'} color={colors.skyBlue}/>
            </View> : null
        }
        {
          data.imageUrl ?
              <FastImage
                style={styles.image}
                source={{
                  uri: data.imageUrl,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                onLoadStart={()=>setImageLoaded(false)}
                onLoadEnd={()=>setImageLoaded(true)}
              />
            :
          <View style={[styles.image,{justifyContent: 'center',alignItems: 'center',backgroundColor: getRandomColor()}]}>
            <Text style={styles.initText}>{generateInitialLetters(setRefAsInitLetter ? data.ref : data.title1)}</Text>
          </View>
        }
      </View>
      <View style={styles.content}>
        <Text style={styles.ref}>{data.ref}</Text>
        <Text numberOfLines={1} style={styles.title1}>{data.title1}</Text>
        <Text numberOfLines={2} style={styles.title2}>{data.title2}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.heightLevel8,
    flexDirection:'row',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: colors.slightGray
  },
  image: {
    width: dimensions.heightLevel8,
    height: dimensions.heightLevel8,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  initText: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontExtraBigger,
    color: colors.white
  },
  content: {
    flex: 3,
    marginLeft: dimensions.heightLevel2
  },
  ref: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontXXLarge,
    marginTop: dimensions.heightLevel1/2,
    color: colors.darkBlue,
    marginLeft: dimensions.heightLevel1
  },
  title1: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontLarge,
    marginTop: dimensions.heightLevel1/5,
    marginLeft: dimensions.heightLevel1
  },
  title2: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontMedium,
    marginTop: dimensions.heightLevel1/2,
    marginLeft: dimensions.heightLevel1
  },
  indicatorContainer: {
    height: dimensions.heightLevel8,
    justifyContent:'center',
    alignItems: 'center'
  }
})

export default ImageCard;
