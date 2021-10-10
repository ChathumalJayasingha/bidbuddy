import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, dimensions, fontFamilies, fontSizes } from "../configurations/constants";
import {formatPrice} from '../utility/appUtils';
import { icons } from "../configurations/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-community/async-storage";
import * as NavActions from "../navigations/NavActions";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderAction,
  findOrderDetailsAction,
  findPaymentHistoryAction,
  updatePaymentStatusAction,
} from "../redux/actions/orderActions";
import Alert from "./Alert";
import Printer from "./Printer";
import PaymentTypeModal from "../views/modals/PaymentTypeModal";
import PaymentHistoryModal from "../views/modals/PaymentHistoryModal";

const OrderCard = ({width,data,shopId,shopDetails,workPlaceDetails}) => {

  let cancelSubscription = false;

  const [role,setRole] = useState(null);
  const [showDeleteAlert,setShowDeleteAlert] = useState(false);
  const [startPrinter,setStartPrinter] = useState(false);
  const [shopData,setShopData] = useState(null);
  const [showPaymentModal,setShowPaymentModal] = useState(false);
  const [showPaymentHistoryModal,setShowPaymentHistoryModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    async function getRole() {
      const role = await AsyncStorage.getItem('role');
      if (!cancelSubscription) setRole(role);
    }
    getRole();

    return ()=>{
      cancelSubscription = true;
    }
  },[])

  useEffect(()=>{
    if (shopDetails) {
      if (!cancelSubscription) {
        setShopData({
          address: shopDetails.shopAddress,
          name: shopDetails.shopName,
          mobileNumber: shopDetails.mobileNumber
        })
      }
    }
  },[shopDetails]);

  const deleteOrder = () => {
    const obj = {
      shopId,
      orderId: data.id
    };
    dispatch(deleteOrderAction(obj));
  };

  const updatePaymentStatus = (paymentStatus) => {
    setShowPaymentModal(false);
    dispatch(updatePaymentStatusAction({
      id: data.id,
      paymentStatus
    }));
  };

  return (
    <View style={[styles.container,{width: width ? width : '90%'}]}>

      <Alert
        icon={icons.DELETE}
        iconColor={colors.red}
        isVisible={showDeleteAlert}
        onBackdropPress={()=>setShowDeleteAlert(false)}
        onYesPress={deleteOrder}
        onNoPress={()=>setShowDeleteAlert(false)}
        title={"Confirmation!"}
        description={'If you delete this order, all the data related to this order will be deleted. Are you sure you want to delete this order? '}
      />

      <Printer
        isVisible={startPrinter}
        onClose={()=>setStartPrinter(false)}
        shopData={{ ...shopData, paymentStatus: data.paymentStatus, ref: ("#" + data.ref), total: formatPrice(data.total) }}
        dateTime={data.dateTime}
        workPlaceData={workPlaceDetails}
      />

      <PaymentTypeModal
        isVisible={showPaymentModal}
        onClose={()=>setShowPaymentModal(false)}
        onPressDone={updatePaymentStatus}
        paymentType={data.paymentStatus}
        isUpdate={true}
      />

      <PaymentHistoryModal
        data={data}
        isVisible={showPaymentHistoryModal}
        onClose={()=>setShowPaymentHistoryModal(false)}
      />

      <View style={{flex: 9}}>

        <Text style={styles.ref}>Order Ref - #{data.ref}</Text>

        <View style={{flexDirection: 'row',alignItems: 'center',marginTop: '5%',marginBottom: '5%'}}>
          <View style={{flex: 4}}>
            <Text style={styles.subRef}>(Payment: {data.paymentStatus ? data.paymentStatus : 'N/A'})</Text>
          </View>

          <TouchableOpacity
            onPress={()=>setShowPaymentModal(true)}
            style={{flex: 1}}>
            <FontAwesomeIcon style={{marginTop: '3%'}} color={colors.darkGray} size={20} icon={icons.SETTINGS} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>setShowPaymentHistoryModal(true)}
            style={{flex: 1}}>
            <FontAwesomeIcon style={{marginTop: '3%'}} color={colors.brightGreen} size={20} icon={icons.PAY_HISTORY} />
          </TouchableOpacity>

        </View>

        <Text style={styles.total}>Rs. {formatPrice(data.total)}</Text>

        <View style={{flexDirection: 'row',marginTop: '3%'}}>
          <View style={{flexDirection: 'row',marginRight: '2%'}}>
            <FontAwesomeIcon style={{marginTop: '3%',marginRight: '4%'}} color={colors.darkBlue} size={15} icon={icons.CALENDAR} />
            <Text style={styles.datetime}>{data.dateTime.split(' ')[0]}</Text>
          </View>

          <View style={{flexDirection: 'row',height: dimensions.heightLevel5/2}}>
            <FontAwesomeIcon style={{marginTop: '5%',marginRight: '4%'}} color={colors.darkBlue} size={15} icon={icons.CLOCK} />
            <Text style={styles.datetime}>{data.dateTime.split(' ')[1]}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 4,justifyContent: 'space-between',alignItems: 'flex-end',marginRight:'3%'}}>

        <TouchableOpacity onPress={()=> {
          dispatch(findOrderDetailsAction(data.id));
          dispatch(findPaymentHistoryAction(data.id));
          setStartPrinter(true);
        }}>
          <FontAwesomeIcon color={colors.brown} size={dimensions.heightLevel3/2} icon={icons.PRINT} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>NavActions.navigate('Order',{shopId,orderId: data.id,total: data.total,type: 'OLD'})}>
          <FontAwesomeIcon color={colors.skyBlue} size={dimensions.heightLevel3/2} icon={icons.EDIT} />
        </TouchableOpacity>

        {
          role === 'ADMIN' ?
            <TouchableOpacity onPress={()=>setShowDeleteAlert(true)}>
              <FontAwesomeIcon color={colors.red} size={dimensions.heightLevel3/2} icon={icons.DELETE} />
            </TouchableOpacity> : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 1,
    padding: '3%',
    marginBottom: '2%'
  },
  ref: {
    fontFamily: fontFamilies.nunitoBold,
    color: colors.darkBlue,
    fontSize: fontSizes.fontXLarge
  },
  subRef: {
    fontFamily: fontFamilies.nunitoBold,
    color: colors.brown,
    fontSize: fontSizes.fontMedium
  },
  total: {
    fontFamily: fontFamilies.nunitoBold,
    marginTop: '3%',
    fontSize: fontSizes.fontXXLarge
  },
  datetime: {
    fontFamily: fontFamilies.nunitoRegular,
    marginTop: '3%',
    fontSize: fontSizes.fontMedium
  }
})

export default OrderCard;
