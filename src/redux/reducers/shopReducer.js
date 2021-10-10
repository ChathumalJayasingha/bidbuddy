import {
  deleteShopActionTypes,
  findAllShopsActionTypes,
  resetActionTypes,
  shopCreateUpdateActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {
  shopCreateUpdateSuccess: null,
  shopCreateUpdateLoading: false,
  shopCreateUpdateError: null,

  shopListSuccess: null,
  shopListLoading: false,
  shopListError: null,

  deleteShopSuccess: null,
  deleteShopLoading: false,
  deleteShopError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case shopCreateUpdateActionTypes.REQUEST_ACTION:
      return {
        ...state,
        shopCreateUpdateSuccess: null,
        shopCreateUpdateLoading: true,
        shopCreateUpdateError: null
      }
    case shopCreateUpdateActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        shopCreateUpdateSuccess: action.value,
        shopCreateUpdateLoading: false,
        shopCreateUpdateError: null
      }
    case shopCreateUpdateActionTypes.FAILED_ACTION:
      return {
        ...state,
        shopCreateUpdateSuccess: null,
        shopCreateUpdateLoading: false,
        shopCreateUpdateError: action.value
      }

    case findAllShopsActionTypes.REQUEST_ACTION:
      return {
        ...state,
        shopListSuccess: null,
        shopListLoading: true,
        shopListError: null
      }
    case findAllShopsActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        shopListSuccess: action.value,
        shopListLoading: false,
        shopListError: null
      }
    case findAllShopsActionTypes.FAILED_ACTION:
      return {
        ...state,
        shopListSuccess: null,
        shopListLoading: true,
        shopListError: action.value
      }

    case deleteShopActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deleteShopSuccess: null,
        deleteShopLoading: true,
        deleteShopError: null
      }
    case deleteShopActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deleteShopSuccess: action.value,
        deleteShopLoading: false,
        deleteShopError: null
      }
    case deleteShopActionTypes.FAILED_ACTION:
      return {
        ...state,
        deleteShopSuccess: null,
        deleteShopLoading: true,
        deleteShopError: action.value
      }

    case findAllShopsActionTypes.RESET_SHOP_ACTION:
      return {
        ...state,
        shopListSuccess: null
      }

    case resetActionTypes.SHOP_RESET_ACTION:
      return {
        ...state,
        deleteShopSuccess: null,
        deleteShopError: null,
        shopCreateUpdateSuccess: null,
        shopCreateUpdateError: null
      }
    default:
      return state
  }
}
