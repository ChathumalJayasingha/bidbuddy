import { httpGet, httpPost } from "../../services/httpServices";
import {
  addNewPaymentUrl,
  createOrUpdateOrdersUrl,
  deleteOrderUrl, deletePaymentUrl, findAllOrdersByUserUrl,
  findAllOrdersUrl,
  findOrderDetailsUrl, findPaymentHistoryUrl, updatePaymentStatusUrl,
} from "../../configurations/urlConfigurations";
import {
  addNewPaymentActionTypes,
  createUpdateOrdersActionTypes, deleteOrderActionTypes, deletePaymentActionTypes,
  findAllOrderDetailsActionTypes,
  findAllOrdersActionTypes, findPaymentHistoryActionTypes,
  resetActionTypes, updatePaymentStatusActionTypes,
} from "../actionTypes/actionTypes";

//network requests here

export const findOrdersByShopAction = (data) => {
  return httpPost({
    url: findAllOrdersUrl,
    actionTypes: findAllOrdersActionTypes,
    isAuth: true,
    data
  })
}

export const findOrdersByShopAndUserAction = (data) => {
  return httpPost({
    url: findAllOrdersByUserUrl,
    actionTypes: findAllOrdersActionTypes,
    isAuth: true,
    data
  })
}

export const createOrUpdateOrderAction = (data) => {
  return httpPost({
    url: createOrUpdateOrdersUrl,
    actionTypes: createUpdateOrdersActionTypes,
    isAuth: true,
    data
  })
}

export const deleteOrderAction = (data) => {
  return httpPost({
    url: deleteOrderUrl,
    actionTypes: deleteOrderActionTypes,
    isAuth: true,
    data
  })
}

export const updatePaymentStatusAction = (data) => {
  return httpPost({
    url: updatePaymentStatusUrl,
    actionTypes: updatePaymentStatusActionTypes,
    isAuth: true,
    data
  })
}

export const findOrderDetailsAction = (id) => {
  return httpGet({
    url: findOrderDetailsUrl + '/' + id,
    actionTypes: findAllOrderDetailsActionTypes,
    isAuth: true
  })
}

export const addNewPaymentAction = (data) => {
  return httpPost({
    url: addNewPaymentUrl,
    actionTypes: addNewPaymentActionTypes,
    isAuth: true,
    data
  })
}

export const deletePaymentAction = (id) => {
  return httpPost({
    url: deletePaymentUrl + '/' + id,
    actionTypes: deletePaymentActionTypes,
    isAuth: true
  })
}

export const findPaymentHistoryAction = (id) => {
  return httpGet({
    url: findPaymentHistoryUrl + '/' + id,
    actionTypes: findPaymentHistoryActionTypes,
    isAuth: true
  })
}

//data passing actions here

export const resetOrderMessageAction = () => ({
  type: resetActionTypes.ORDER_RESET_ACTION
})

export const clearOrderDetailAction = () => ({
  type: findAllOrderDetailsActionTypes.CLEAR_ACTION
})

