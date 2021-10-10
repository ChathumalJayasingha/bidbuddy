import {
  findUserActionTypes,
  navigationActionTypes,
  resetActionTypes,
  signInActionTypes, simpleUpdateActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {

  signInLoading: false,
  signInSuccess: null,
  signInError: null,
  sessionExpired: false,

  refreshNavigation: false,

  userLoading: false,
  userSuccess: null,
  userError: null,

  userSimpleUpdateLoading: false,
  userSimpleUpdateSuccess: null,
  userSimpleUpdateError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case signInActionTypes.REQUEST_ACTION:
      return {
        ...state,
        signInLoading: true,
        signInSuccess: null,
        signInError: null
      }
    case signInActionTypes.SUCCESS_ACTION:

      const result = action.value.result;

      return {
        ...state,
        signInLoading: false,
        signInSuccess: action.value,
        signInError: null
      }
    case signInActionTypes.FAILED_ACTION:
      return {
        ...state,
        signInLoading: false,
        signInSuccess: null,
        signInError: action.value
      }

    case findUserActionTypes.REQUEST_ACTION:
      return {
        ...state,
        userLoading: true,
        userSuccess: null,
        userError: null
      }
    case findUserActionTypes.SUCCESS_ACTION:

      return {
        ...state,
        userLoading: false,
        userSuccess: action.value,
        userError: null
      }
    case findUserActionTypes.FAILED_ACTION:
      return {
        ...state,
        userLoading: false,
        userSuccess: null,
        userError: action.value
      }

    case simpleUpdateActionTypes.REQUEST_ACTION:
      return {
        ...state,
        userSimpleUpdateLoading: true,
        userSimpleUpdateSuccess: null,
        userSimpleUpdateError: null
      }
    case simpleUpdateActionTypes.SUCCESS_ACTION:

      return {
        ...state,
        userSimpleUpdateLoading: false,
        userSimpleUpdateSuccess: action.value,
        userSimpleUpdateError: null
      }
    case simpleUpdateActionTypes.FAILED_ACTION:
      return {
        ...state,
        userSimpleUpdateLoading: false,
        userSimpleUpdateSuccess: null,
        userSimpleUpdateError: action.value
      }

    case navigationActionTypes.REFRESH_NAVIGATION:
      return {
        ...state,
        refreshNavigation: action.value
      }

    case signInActionTypes.SESSION_EXPIRED_ACTION:
      return {
        ...state,
        sessionExpired: true
      }

    case resetActionTypes.AUTH_RESET_ACTION:
      return {
        ...state,
        signInError: null,
        signInSuccess: null,
        userError: null,
        sessionExpired: false,
        userSimpleUpdateError: null,
        userSimpleUpdateSuccess: null
      }
    default:
      return state
  }
}
