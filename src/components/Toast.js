import React, { useEffect } from "react";
import {View} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../configurations/toastConfig";
import { resetWorkPlaceMessages } from "../redux/actions/workPlaceActions";
import { resetAuthMessages } from "../redux/actions/authActions";
import { resetCommonMessageAction, resetPlanMessageAction } from "../redux/actions/planActions";
import { resetShopMessages } from "../redux/actions/shopActions";
import { resetItemMessageAction } from "../redux/actions/itemActions";
import { resetOrderMessageAction } from "../redux/actions/orderActions";
import { resetUserMessageAction } from "../redux/actions/userActions";

const Toast = () => {

  const dispatch = useDispatch();

  //work places related messages
  const createWorkPlaceError = useSelector(state => state.workPlaceState.createWorkPlaceError);
  const createWorkPlaceSuccess = useSelector(state => state.workPlaceState.createWorkPlaceSuccess);
  const updateWorkPlaceError = useSelector(state => state.workPlaceState.updateWorkPlaceError);
  const updateWorkPlaceSuccess = useSelector(state => state.workPlaceState.updateWorkPlaceSuccess);
  const workPlaceError = useSelector(state => state.workPlaceState.searchWorkPlaceByIdError);
  const workPlacesError = useSelector(state => state.workPlaceState.searchWorkPlaceError);

  //auth related messages
  const signInError = useSelector(state => state.authState.signInError);
  const sessionExpired = useSelector(state => state.authState.sessionExpired);
  const userError = useSelector(state => state.authState.userError);
  const userSimpleUpdateError = useSelector(state => state.authState.userSimpleUpdateError);
  const userSimpleUpdateSuccess = useSelector(state => state.authState.userSimpleUpdateSuccess);

  //plans related messages
  const planListError = useSelector(state => state.planState.planListError);
  const createUpdatePlanSuccess = useSelector(state => state.planState.createUpdatePlanSuccess);
  const createUpdatePlanError = useSelector(state => state.planState.createUpdatePlanError);
  const businessTypesError = useSelector(state => state.commonState.businessTypesError);
  const categoriesError = useSelector(state => state.commonState.categoriesError);
  const deletePlanSuccess = useSelector(state => state.planState.deletePlanSuccess);
  const deletePlanError = useSelector(state => state.planState.deletePlanError);

  //shop related messages
  const shopListError = useSelector(state => state.shopState.shopListError);
  const shopCreateUpdateError = useSelector(state => state.shopState.shopCreateUpdateError);
  const shopCreateUpdateSuccess = useSelector(state => state.shopState.shopCreateUpdateSuccess);
  const deleteShopError = useSelector(state => state.shopState.deleteShopError);
  const deleteShopSuccess = useSelector(state => state.shopState.deleteShopSuccess);

  //item related messages
  const itemListError = useSelector(state => state.itemState.itemListError);
  const createUpdateItemSuccess = useSelector(state => state.itemState.createUpdateItemSuccess);
  const createUpdateItemError = useSelector(state => state.itemState.createUpdateItemError);
  const deleteItemSuccess = useSelector(state => state.itemState.deleteItemSuccess);
  const deleteItemError = useSelector(state => state.itemState.deleteItemError);

  //order related messages
  const createUpdateOrderError = useSelector(state => state.orderState.createUpdateOrderError);
  const createUpdateOrderSuccess = useSelector(state => state.orderState.createUpdateOrderSuccess);
  const orderListError = useSelector(state => state.orderState.orderListError);
  const orderDetailsError = useSelector(state => state.orderState.orderDetailsError);
  const deleteOrderError = useSelector(state => state.orderState.deleteOrderError);
  const deleteOrderSuccess = useSelector(state => state.orderState.deleteOrderSuccess);
  const updatePaymentStatusSuccess = useSelector(state => state.orderState.updatePaymentStatusSuccess);
  const updatePaymentStatusError = useSelector(state => state.orderState.updatePaymentStatusError);
  const paymentHistoryError = useSelector(state => state.orderState.paymentHistoryError);
  const addNewPaymentSuccess = useSelector(state => state.orderState.addNewPaymentSuccess);
  const addNewPaymentError = useSelector(state => state.orderState.addNewPaymentError);
  const deletePaymentError = useSelector(state => state.orderState.deletePaymentError);
  const deletePaymentSuccess = useSelector(state => state.orderState.deletePaymentSuccess);

  //user related messages
  const createUpdateUserSuccess = useSelector(state => state.userState.createUpdateUserSuccess);
  const createUpdateUserError = useSelector(state => state.userState.createUpdateUserError);
  const findAllUserError = useSelector(state => state.userState.findAllUserError);
  const deleteUserError = useSelector(state => state.userState.deleteUserError);
  const deleteUserSuccess = useSelector(state => state.userState.deleteUserSuccess);
  const changePasswordError = useSelector(state => state.userState.changePasswordError);
  const changePasswordSuccess = useSelector(state => state.userState.changePasswordSuccess);

  //handle work place related toasts
  useEffect(()=>{
    if (createWorkPlaceSuccess) {
      showToast(createWorkPlaceSuccess);
    }
    if (createWorkPlaceError) {
      showToast(createWorkPlaceError);
    }
    if (workPlacesError) {
      showToast(workPlacesError);
    }
    if (workPlaceError) {
      showToast(workPlaceError);
    }
    if (updateWorkPlaceError) {
      showToast(updateWorkPlaceError);
    }
    if (updateWorkPlaceSuccess) {
      showToast(updateWorkPlaceSuccess);
    }
    dispatch(resetWorkPlaceMessages())
  },[workPlacesError,workPlaceError,createWorkPlaceError,createWorkPlaceSuccess,updateWorkPlaceSuccess,updateWorkPlaceError])


  //handle authentication related toasts
  useEffect(()=>{
    if (signInError) {
      showToast(signInError);
    }
    if (userError) {
      showToast(userError);
    }
    if (sessionExpired) {
      showToast(sessionExpired);
    }
    if (userSimpleUpdateError) {
      showToast(userSimpleUpdateError);
    }
    if (userSimpleUpdateSuccess) {
      showToast(userSimpleUpdateSuccess);
    }

    dispatch(resetAuthMessages())
  },[signInError,userError,sessionExpired,userSimpleUpdateError,userSimpleUpdateSuccess])

  //handle plans related toasts
  useEffect(()=>{
    if (planListError) {
      showToast(planListError);
    }
    if (createUpdatePlanError) {
      showToast(createUpdatePlanError);
    }
    if (createUpdatePlanSuccess) {
      showToast(createUpdatePlanSuccess);
    }
    if (businessTypesError) {
      showToast(businessTypesError);
    }
    if (deletePlanSuccess) {
      showToast(deletePlanSuccess);
    }
    if (deletePlanError) {
      showToast(deletePlanError);
    }

    dispatch(resetPlanMessageAction())
  },[planListError,createUpdatePlanError,createUpdatePlanSuccess,deletePlanSuccess,deletePlanError])


  //handle common related toasts
  useEffect(()=>{

    if (businessTypesError) {
      showToast(businessTypesError);
    }
    if (categoriesError) {
      showToast(categoriesError);
    }

    dispatch(resetCommonMessageAction())
  },[businessTypesError,categoriesError])


  //handle shop related toasts
  useEffect(()=>{

    if (shopListError) {
      showToast(shopListError);
    }
    if (shopCreateUpdateSuccess) {
      showToast(shopCreateUpdateSuccess);
    }
    if (shopCreateUpdateError) {
      showToast(shopCreateUpdateError);
    }
    if (deleteShopError) {
      showToast(deleteShopError);
    }
    if (deleteShopSuccess) {
      showToast(deleteShopSuccess);
    }

    dispatch(resetShopMessages())
  },[shopListError,shopCreateUpdateSuccess,shopCreateUpdateError,deleteShopSuccess,deleteShopError])


  //handle item related toasts
  useEffect(()=>{

    if (itemListError) {
      showToast(itemListError);
    }
    if (createUpdateItemSuccess) {
      showToast(createUpdateItemSuccess);
    }
    if (createUpdateItemError) {
      showToast(createUpdateItemError);
    }
    if (deleteItemSuccess) {
      showToast(deleteItemSuccess);
    }
    if (deleteItemError) {
      showToast(deleteItemError);
    }

    dispatch(resetItemMessageAction())
  },[itemListError,createUpdateItemSuccess,createUpdateItemError,deleteItemError,deleteItemSuccess])

  //handle order related toasts
  useEffect(()=>{

    if (createUpdateOrderSuccess) {
      showToast(createUpdateOrderSuccess);
    }
    if (createUpdateOrderError) {
      showToast(createUpdateOrderError);
    }
    if (orderListError) {
      showToast(orderListError);
    }
    if (orderDetailsError) {
      showToast(orderDetailsError);
    }
    if (deleteOrderSuccess) {
      showToast(deleteOrderSuccess);
    }
    if (deleteOrderError) {
      showToast(deleteOrderError);
    }
    if (updatePaymentStatusSuccess) {
      showToast(updatePaymentStatusSuccess);
    }
    if (updatePaymentStatusError) {
      showToast(updatePaymentStatusError);
    }
    if (paymentHistoryError) {
      showToast(paymentHistoryError);
    }
    if (addNewPaymentError) {
      showToast(addNewPaymentError);
    }
    if (addNewPaymentSuccess) {
      showToast(addNewPaymentSuccess);
    }
    if (deletePaymentSuccess) {
      showToast(deletePaymentSuccess);
    }
    if (deletePaymentError) {
      showToast(deletePaymentError);
    }

    dispatch(resetOrderMessageAction())
  },[createUpdateOrderSuccess,createUpdateOrderError,orderListError,orderDetailsError,deleteOrderError,deleteOrderSuccess,updatePaymentStatusSuccess,updatePaymentStatusError,paymentHistoryError,addNewPaymentSuccess,addNewPaymentError,deletePaymentSuccess,deletePaymentError])


  //handle user related toasts
  useEffect(()=>{

    if (createUpdateUserSuccess) {
      showToast(createUpdateUserSuccess);
    }
    if (createUpdateUserError) {
      showToast(createUpdateUserError);
    }
    if (findAllUserError) {
      showToast(findAllUserError);
    }
    if (deleteUserSuccess) {
      showToast(deleteUserSuccess);
    }
    if (deleteUserError) {
      showToast(deleteUserError);
    }
    if (changePasswordError) {
      showToast(changePasswordError);
    }
    if (changePasswordSuccess) {
      showToast(changePasswordSuccess);
    }

    dispatch(resetUserMessageAction())
  },[createUpdateUserSuccess,createUpdateUserError,findAllUserError,deleteUserSuccess,deleteUserError,changePasswordSuccess,changePasswordError])

  return <View></View>;
}

export default Toast;
