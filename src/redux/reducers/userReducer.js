import {
  changePasswordActionTypes,
  createUpdateUserActionTypes, deleteUserActionTypes, findAllUserActionTypes,
  resetActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {
  createUpdateUserSuccess: null,
  createUpdateUserLoading: false,
  createUpdateUserError: null,

  findAllUserSuccess: null,
  findAllUserLoading: false,
  findAllUserError: null,

  deleteUserSuccess: null,
  deleteUserLoading: false,
  deleteUserError: null,

  changePasswordSuccess: null,
  changePasswordLoading: false,
  changePasswordError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case createUpdateUserActionTypes.REQUEST_ACTION:
      return {
        ...state,
        createUpdateUserSuccess: null,
        createUpdateUserLoading: true,
        createUpdateUserError: null
      }
    case createUpdateUserActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        createUpdateUserSuccess: action.value,
        createUpdateUserLoading: false,
        createUpdateUserError: null
      }
    case createUpdateUserActionTypes.FAILED_ACTION:
      return {
        ...state,
        createUpdateUserSuccess: null,
        createUpdateUserLoading: false,
        createUpdateUserError: action.value
      }

    case findAllUserActionTypes.REQUEST_ACTION:
      return {
        ...state,
        findAllUserSuccess: null,
        findAllUserLoading: true,
        findAllUserError: null
      }
    case findAllUserActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        findAllUserSuccess: action.value,
        findAllUserLoading: false,
        findAllUserError: null
      }
    case findAllUserActionTypes.FAILED_ACTION:
      return {
        ...state,
        findAllUserSuccess: null,
        findAllUserLoading: false,
        findAllUserError: action.value
      }

    case deleteUserActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deleteUserSuccess: null,
        deleteUserLoading: true,
        deleteUserError: null
      }
    case deleteUserActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deleteUserSuccess: action.value,
        deleteUserLoading: false,
        deleteUserError: null
      }
    case deleteUserActionTypes.FAILED_ACTION:
      return {
        ...state,
        deleteUserSuccess: null,
        deleteUserLoading: false,
        deleteUserError: action.value
      }

    case changePasswordActionTypes.REQUEST_ACTION:
      return {
        ...state,
        changePasswordSuccess: null,
        changePasswordLoading: true,
        changePasswordError: null
      }
    case changePasswordActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        changePasswordSuccess: action.value,
        changePasswordLoading: false,
        changePasswordError: null
      }
    case changePasswordActionTypes.FAILED_ACTION:
      return {
        ...state,
        changePasswordSuccess: null,
        changePasswordLoading: false,
        changePasswordError: action.value
      }

    case resetActionTypes.USER_RESET_ACTION:
      return {
        ...state,
        createUpdateUserError: null,
        createUpdateUserSuccess: null,
        findAllUserError: null,
        deleteUserSuccess: null,
        deleteUserError: null,
        changePasswordError: null,
        changePasswordSuccess: null
      }
    default:
      return state
  }
}
