import {
  addNewPaymentActionTypes,
  createUpdateOrdersActionTypes, deleteOrderActionTypes, deletePaymentActionTypes,
  findAllOrderDetailsActionTypes,
  findAllOrdersActionTypes, findPaymentHistoryActionTypes,
  resetActionTypes, updatePaymentStatusActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {

  orderListSuccess: null,
  orderListLoading: false,
  orderListError: null,

  createUpdateOrderSuccess: null,
  createUpdateOrderLoading: false,
  createUpdateOrderError: null,

  orderDetailsSuccess: null,
  orderDetailsLoading: false,
  orderDetailsError: null,

  deleteOrderSuccess: null,
  deleteOrderLoading: false,
  deleteOrderError: null,

  updatePaymentStatusSuccess: null,
  updatePaymentStatusLoading: false,
  updatePaymentStatusError: null,

  paymentHistorySuccess: null,
  paymentHistoryLoading: false,
  paymentHistoryError: null,

  addNewPaymentSuccess: null,
  addNewPaymentLoading: null,
  addNewPaymentError: null,

  deletePaymentSuccess: null,
  deletePaymentLoading: null,
  deletePaymentError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case findAllOrdersActionTypes.REQUEST_ACTION:
      return {
        ...state,
        orderListSuccess: null,
        orderListLoading: true,
        orderListError: null
      }
    case findAllOrdersActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        orderListSuccess: action.value,
        orderListLoading: false,
        orderListError: null
      }
    case findAllOrdersActionTypes.FAILED_ACTION:
      return {
        ...state,
        orderListSuccess: null,
        orderListLoading: false,
        orderListError: action.value
      }

    case createUpdateOrdersActionTypes.REQUEST_ACTION:
      return {
        ...state,
        createUpdateOrderSuccess: null,
        createUpdateOrderLoading: true,
        createUpdateOrderError: null
      }
    case createUpdateOrdersActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        createUpdateOrderSuccess: action.value,
        createUpdateOrderLoading: false,
        createUpdateOrderError: null
      }
    case createUpdateOrdersActionTypes.FAILED_ACTION:
      return {
        ...state,
        createUpdateOrderSuccess: null,
        createUpdateOrderLoading: false,
        createUpdateOrderError: action.value
      }

    case findAllOrderDetailsActionTypes.REQUEST_ACTION:
      return {
        ...state,
        orderDetailsSuccess: null,
        orderDetailsLoading: true,
        orderDetailsError: null
      }
    case findAllOrderDetailsActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        orderDetailsSuccess: action.value,
        orderDetailsLoading: false,
        orderDetailsError: null
      }
    case findAllOrderDetailsActionTypes.FAILED_ACTION:
      return {
        ...state,
        orderDetailsSuccess: null,
        orderDetailsLoading: false,
        orderDetailsError: action.value
      }

    case deleteOrderActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deleteOrderSuccess: null,
        deleteOrderLoading: true,
        deleteOrderError: null
      }
    case deleteOrderActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deleteOrderSuccess: action.value,
        deleteOrderLoading: false,
        deleteOrderError: null
      }
    case deleteOrderActionTypes.FAILED_ACTION:
      return {
        ...state,
        deleteOrderSuccess: null,
        deleteOrderLoading: false,
        deleteOrderError: action.value
      }


    case updatePaymentStatusActionTypes.REQUEST_ACTION:
      return {
        ...state,
        updatePaymentStatusSuccess: null,
        updatePaymentStatusLoading: true,
        updatePaymentStatusError: null
      }
    case updatePaymentStatusActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        updatePaymentStatusSuccess: action.value,
        updatePaymentStatusLoading: false,
        updatePaymentStatusError: null
      }
    case updatePaymentStatusActionTypes.FAILED_ACTION:
      return {
        ...state,
        updatePaymentStatusSuccess: null,
        updatePaymentStatusLoading: false,
        updatePaymentStatusError: action.value
      }

    case findPaymentHistoryActionTypes.REQUEST_ACTION:
      return {
        ...state,
        paymentHistorySuccess: null,
        paymentHistoryLoading: true,
        paymentHistoryError: null
      }
    case findPaymentHistoryActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        paymentHistorySuccess: action.value,
        paymentHistoryLoading: false,
        paymentHistoryError: null
      }
    case findPaymentHistoryActionTypes.FAILED_ACTION:
      return {
        ...state,
        paymentHistorySuccess: null,
        paymentHistoryLoading: false,
        paymentHistoryError: action.value
      }

    case addNewPaymentActionTypes.REQUEST_ACTION:
      return {
        ...state,
        addNewPaymentSuccess: null,
        addNewPaymentLoading: true,
        addNewPaymentError: null
      }
    case addNewPaymentActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        addNewPaymentSuccess: action.value,
        addNewPaymentLoading: false,
        addNewPaymentError: null
      }
    case addNewPaymentActionTypes.FAILED_ACTION:
      return {
        ...state,
        addNewPaymentSuccess: null,
        addNewPaymentLoading: false,
        addNewPaymentError: action.value
      }

    case deletePaymentActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deletePaymentSuccess: null,
        deletePaymentLoading: true,
        deletePaymentError: null
      }
    case deletePaymentActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deletePaymentSuccess: action.value,
        deletePaymentLoading: false,
        deletePaymentError: null
      }
    case deletePaymentActionTypes.FAILED_ACTION:
      return {
        ...state,
        deletePaymentSuccess: null,
        deletePaymentLoading: false,
        deletePaymentError: action.value
      }

    case findAllOrderDetailsActionTypes.CLEAR_ACTION:
      return {
        ...state,
        orderDetailsSuccess: null
      }

    case resetActionTypes.ORDER_RESET_ACTION:
      return {
        ...state,
        deleteOrderError: null,
        deleteOrderSuccess: null,
        orderDetailsError: null,
        createUpdateOrderError: null,
        createUpdateOrderSuccess: null,
        orderListError: null,
        updatePaymentStatusSuccess: null,
        updatePaymentStatusError: null,
        paymentHistoryError: null,
        addNewPaymentSuccess: null,
        addNewPaymentError: null,
        deletePaymentSuccess: null,
        deletePaymentError: null
      }
    default:
      return state
  }
}
