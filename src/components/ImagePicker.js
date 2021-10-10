import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import EmptyView from "./EmptyView";

const ImagePicker = ({onCaptureImage,browseTextSize, defImage}) => {

  const [image,setImage] = useState(defImage);

  const imageOptions = {
    mediaType: 'photo',
    maxWidth: 600,
    maxHeight: 600,
    quality: 0.6
  }

  const openCamera = async () => {
    await launchCamera(imageOptions, (data)=>{
      setImage(data.uri);
      if (onCaptureImage) {
        onCaptureImage(data);
      }
    });
  }

  const openGallery = async () => {
    await launchImageLibrary(imageOptions, (data)=>{
      setImage(data.uri);
      if (onCaptureImage) {
        onCaptureImage(data);
      }
    });
  }

  const removeImage = () => {
    setImage(null);
    if (onCaptureImage) {
      onCaptureImage(null);
    }
  }

  return (
    <View>
      {
        image ?

          <Image
            style={styles.fileInput}
            source={{uri: image}}/>
          :
          <View style={[styles.fileInput,{borderStyle: 'dashed'}]}>
            <TouchableOpacity
              style={styles.border}
              onPress={openCamera}>
              <Text style={[styles.browseText,{fontSize: browseTextSize ? browseTextSize : fontSizes.fontMediumPlus}]}>Open Camera</Text>
            </TouchableOpacity>

            <EmptyView style={{height: dimensions.heightLevel1}}/>

            <TouchableOpacity
              style={styles.border}
              onPress={openGallery}>
              <Text style={[styles.browseText,{fontSize: browseTextSize ? browseTextSize : fontSizes.fontMediumPlus}]}>Open Gallery</Text>
            </TouchableOpacity>

          </View>
      }

      {
        image ?
          <TouchableOpacity
            onPress={removeImage}
            style={styles.removeButton}>
            <Text style={[styles.removeText,{fontSize: browseTextSize ? browseTextSize : fontSizes.fontMediumPlus}]}>REMOVE</Text>
          </TouchableOpacity>
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  fileInput: {
    borderRadius: 10,
    borderWidth: 1,
    height: dimensions.heightLevel10,
    marginTop: dimensions.heightLevel1/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  browseText: {
    color: colors.black,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    padding: '3%',
    width: dimensions.heightLevel8
  },
  removeText: {
    color: colors.white,
    padding: '3%',
    textAlign: 'center'
  },
  removeButton: {
    backgroundColor: colors.red,
    borderRadius: 5,
    marginTop: '5%'
  },
  border: {
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 5
  }
})

export default ImagePicker;
