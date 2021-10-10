import {
  deleteItemActionTypes,
  itemCreateUpdateActionTypes,
  itemListActionTypes,
  resetActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {

  itemListSuccess: null,
  itemListLoading: false,
  itemListError: null,

  createUpdateItemSuccess: null,
  createUpdateItemLoading: null,
  createUpdateItemError: null,

  deleteItemSuccess: null,
  deleteItemLoading: null,
  deleteItemError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case itemListActionTypes.REQUEST_ACTION:
      return {
        ...state,
        itemListSuccess: null,
        itemListLoading: true,
        itemListError: null
      }
    case itemListActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        itemListSuccess: action.value,
        itemListLoading: false,
        itemListError: null
      }
    case itemListActionTypes.FAILED_ACTION:
      return {
        ...state,
        itemListSuccess: null,
        itemListLoading: false,
        itemListError: action.value
      }

    case itemCreateUpdateActionTypes.REQUEST_ACTION:
      return {
        ...state,
        createUpdateItemSuccess: null,
        createUpdateItemLoading: true,
        createUpdateItemError: null
      }
    case itemCreateUpdateActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        createUpdateItemSuccess: action.value,
        createUpdateItemLoading: false,
        createUpdateItemError: null
      }
    case itemCreateUpdateActionTypes.FAILED_ACTION:
      return {
        ...state,
        createUpdateItemSuccess: null,
        createUpdateItemLoading: false,
        createUpdateItemError: action.value
      }
    case itemCreateUpdateActionTypes.CLEAR_ACTION:
      return {
        ...state,
        itemListSuccess: null
      }

    case deleteItemActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deleteItemSuccess: null,
        deleteItemLoading: true,
        deleteItemError: null
      }
    case deleteItemActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deleteItemSuccess: action.value,
        deleteItemLoading: false,
        deleteItemError: null
      }
    case deleteItemActionTypes.FAILED_ACTION:
      return {
        ...state,
        deleteItemSuccess: null,
        deleteItemLoading: false,
        deleteItemError: action.value
      }

    case resetActionTypes.ITEM_RESET_ACTION:
      return {
        ...state,
        itemListError: null,
        createUpdateItemError: null,
        createUpdateItemSuccess: null,
        deleteItemError: null,
        deleteItemSuccess: null
      }
    default:
      return state
  }
}
