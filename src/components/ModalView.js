import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors, dimensions } from "../configurations/constants";
import Modal from "react-native-modal";
import { icons } from "../configurations/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ModalView = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}>
      <View style={styles.content}>
        {
          props.showClose ?
            <TouchableOpacity
              onPress={props.onClose ? props.onClose : ()=>{}}
              style={{position: 'absolute',top: '2%',right: '2%'}}>
              <FontAwesomeIcon size={25} icon={icons.CLOSE} />
            </TouchableOpacity> : null
        }
        {props.children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: dimensions.widthLevel2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ModalView;
