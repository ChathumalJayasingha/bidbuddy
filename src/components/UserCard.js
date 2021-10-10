import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import FastImage from 'react-native-fast-image'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { icons } from "../configurations/icons";
import AsyncStorage from "@react-native-community/async-storage";
import Alert from "./Alert";
import { deleteItemAction } from "../redux/actions/itemActions";
import { useDispatch } from "react-redux";
import UserModal from "../views/modals/UserModal";
import { deleteUserAction } from "../redux/actions/userActions";

const UserCard = ({ data, width }) =>{

  const [imageLoaded,setImageLoaded] = useState(false);
  const [role,setRole] = useState(null);
  const [showUserModal,setShowUserModal] = useState(false);
  const [showDeleteAlert,setShowDeleteAlert] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    async function getRole() {
      const role = await AsyncStorage.getItem('role');
      setRole(role);
    }
    getRole();
  },[])


  return (
    <View
      style={[styles.container,{width: width ? width: dimensions.widthLevel2}]}>

      <Alert
        icon={icons.DELETE}
        iconColor={colors.red}
        isVisible={showDeleteAlert}
        onBackdropPress={()=>setShowDeleteAlert(false)}
        onYesPress={()=>{
          dispatch(deleteUserAction({id: data.id}));
          setShowDeleteAlert(false);
        }}
        onNoPress={()=>setShowDeleteAlert(false)}
        title={"Confirmation!"}
        description={'Are you sure you want to delete this User? '}
      />

      <UserModal
        isVisible={showUserModal}
        isUpdate={true}
        userData={data}
        onClose={()=>setShowUserModal(false)}/>

      <View style={{flex: 2}}>
        {
          data.profileLogoUrl ?
            imageLoaded ? null :
              <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'small'} color={colors.skyBlue}/>
              </View> : null
        }
        {
          data.profileLogoUrl ?
            <FastImage
              style={styles.image}
              source={{
                uri: data.profileLogoUrl,
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
        <Text numberOfLines={2} style={styles.name}>{data.firstName + ' ' + data.lastName}</Text>
        <Text numberOfLines={1} style={styles.title1}>{data.role === 'ADMIN' ? 'Admin' : 'Employee'}</Text>
        <Text numberOfLines={1} style={styles.title2}>{data.mobileNumber}</Text>
      </View>

      <View style={{flex: 1,justifyContent: 'space-around',alignItems: 'center'}}>
        {
          role === 'ADMIN' ?
            <TouchableOpacity
              style={styles.actionButton}
              onPress={()=>setShowUserModal(true)}>
              <FontAwesomeIcon color={colors.skyBlue} size={15} icon={icons.EDIT} />
            </TouchableOpacity> : null
        }

        {
          role === 'ADMIN' ?
            <TouchableOpacity
              style={styles.actionButton}
              onPress={()=>setShowDeleteAlert(true)}>
              <FontAwesomeIcon color={colors.red} size={15} icon={icons.DELETE} />
            </TouchableOpacity> : null
        }
      </View>
    </View>
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
    fontFamily: fontFamilies.nunitoBold,
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

export default UserCard;
