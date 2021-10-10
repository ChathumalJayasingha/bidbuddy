import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import FastImage from 'react-native-fast-image'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { icons } from "../configurations/icons";
import AsyncStorage from "@react-native-community/async-storage";
import ItemModal from "../views/modals/ItemModal";
import Alert from "./Alert";
import { deleteItemAction } from "../redux/actions/itemActions";
import { useDispatch } from "react-redux";
import { formatPrice } from "../utility/appUtils";

const ItemCard = ({ canTouch, onPress, data, width, hideDeleteButton }) =>{

  const [imageLoaded,setImageLoaded] = useState(false);
  const [role,setRole] = useState(null);
  const [showItemModal,setShowItemModal] = useState(false);
  const [showDeleteAlert,setShowDeleteAlert] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    async function getRole() {
      const role = await AsyncStorage.getItem('role');
      setRole(role);
    }
    getRole();
  },[])

  const content = (
    <View
      style={[styles.container,{width: width ? width: dimensions.widthLevel2}]}>

      <Alert
        icon={icons.DELETE}
        iconColor={colors.red}
        isVisible={showDeleteAlert}
        onBackdropPress={()=>setShowDeleteAlert(false)}
        onYesPress={()=>{
          dispatch(deleteItemAction({itemId: data.id}));
          setShowDeleteAlert(false);
        }}
        onNoPress={()=>setShowDeleteAlert(false)}
        title={"Confirmation!"}
        description={'Are you sure you want to delete this Item? '}
      />

      <ItemModal
        isUpdate={true}
        itemData={data}
        isVisible={showItemModal}
        onClose={()=>{
          setShowItemModal(false);
        }}/>

      <View style={{flex: 2}}>
        {
          data.itemFileUrl ?
            imageLoaded ? null :
              <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'small'} color={colors.skyBlue}/>
              </View> : null
        }
        {
          data.itemFileUrl ?
            <FastImage
              style={styles.image}
              source={{
                uri: data.itemFileUrl,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              onLoadStart={()=>setImageLoaded(false)}
              onLoadEnd={()=>setImageLoaded(true)}
            />
            :
            <Image
              style={styles.image}
              source={require('../assets/no-image.webp')}
            />
        }
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>{data.itemName}</Text>
        <Text numberOfLines={1} style={styles.title1}>{'Rs. ' + formatPrice(data.itemPrice)}</Text>
        <Text numberOfLines={2} style={styles.title2}>{data.qty + ' ' + data.uom}</Text>
      </View>

      <View style={{flex: 1,justifyContent: 'space-around',alignItems: 'center'}}>
        {
          role === 'ADMIN' ?
            <TouchableOpacity
              style={styles.actionButton}
              onPress={()=>setShowItemModal(true)}>
              <FontAwesomeIcon color={colors.skyBlue} size={dimensions.heightLevel6/5} icon={icons.EDIT} />
            </TouchableOpacity> : null
        }

        {
          role === 'ADMIN' && !hideDeleteButton ?
            <TouchableOpacity
              style={styles.actionButton}
              onPress={()=>setShowDeleteAlert(true)}>
              <FontAwesomeIcon color={colors.red} size={dimensions.heightLevel6/5} icon={icons.DELETE} />
            </TouchableOpacity> : null
        }
      </View>
    </View>
  )

  return (
    canTouch ?
      <TouchableOpacity onPress={onPress}>
        {content}
      </TouchableOpacity>
      :
      <TouchableWithoutFeedback>
        {content}
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.heightLevel7,
    flexDirection:'row',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.white,
    borderRadius: 5
  },
  image: {
    width: dimensions.heightLevel7,
    height: dimensions.heightLevel7,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  initText: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontExtraBigger,
    color: colors.white
  },
  content: {
    flex: 5,
    marginLeft: dimensions.heightLevel2
  },
  name: {
    fontFamily: fontFamilies.nunitoBold,
    fontSize: fontSizes.fontLarge,
    marginTop: dimensions.heightLevel1/2,
    color: colors.darkBlue
  },
  title1: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontMediumPlus,
    marginTop: dimensions.heightLevel1/2
  },
  title2: {
    fontFamily: fontFamilies.nunitoRegular,
    fontSize: fontSizes.fontMedium,
    marginTop: dimensions.heightLevel1/2
  },
  indicatorContainer: {
    height: dimensions.heightLevel8,
    justifyContent:'center',
    alignItems: 'center'
  },
  actionButton: {
    backgroundColor: colors.white,
    borderRadius: 200,
    elevation: 2,
    padding: '15%'
  }
})

export default ItemCard;
