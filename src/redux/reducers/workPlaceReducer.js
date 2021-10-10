import {
  createWorkPlaceActionTypes,
  resetActionTypes,
  searchWorkPlaceActionTypes,
  searchWorkPlaceByIdActionTypes, updateWorkPlaceActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {

  createWorkPlaceLoading: false,
  createWorkPlaceSuccess: null,
  createWorkPlaceError: null,

  updateWorkPlaceLoading: false,
  updateWorkPlaceSuccess: null,
  updateWorkPlaceError: null,

  searchWorkPlaceLoading: false,
  searchWorkPlaceSuccess: null,
  searchWorkPlaceError: null,

  searchWorkPlaceByIdLoading: false,
  searchWorkPlaceByIdSuccess: null,
  searchWorkPlaceByIdError: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case createWorkPlaceActionTypes.REQUEST_ACTION:
      return {
        ...state,
        createWorkPlaceLoading: true,
        createWorkPlaceSuccess: null,
        createWorkPlaceError: null
      }
    case createWorkPlaceActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        createWorkPlaceLoading: false,
        createWorkPlaceSuccess: action.value,
        createWorkPlaceError: null
      }
    case createWorkPlaceActionTypes.FAILED_ACTION:
      return {
        ...state,
        createWorkPlaceLoading: false,
        createWorkPlaceSuccess: null,
        createWorkPlaceError: action.value
      }

    case updateWorkPlaceActionTypes.REQUEST_ACTION:
      return {
        ...state,
        updateWorkPlaceLoading: true,
        updateWorkPlaceSuccess: null,
        updateWorkPlaceError: null
      }
    case updateWorkPlaceActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        updateWorkPlaceLoading: false,
        updateWorkPlaceSuccess: action.value,
        updateWorkPlaceError: null
      }
    case updateWorkPlaceActionTypes.FAILED_ACTION:
      return {
        ...state,
        updateWorkPlaceLoading: false,
        updateWorkPlaceSuccess: null,
        updateWorkPlaceError: action.value
      }

    case searchWorkPlaceActionTypes.REQUEST_ACTION:
      return {
        ...state,
        searchWorkPlaceLoading: true,
        searchWorkPlaceSuccess: null,
        searchWorkPlaceError: null
      }
    case searchWorkPlaceActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        searchWorkPlaceLoading: false,
        searchWorkPlaceSuccess: action.value,
        searchWorkPlaceError: null
      }
    case searchWorkPlaceActionTypes.FAILED_ACTION:
      return {
        ...state,
        searchWorkPlaceLoading: false,
        searchWorkPlaceSuccess: null,
        searchWorkPlaceError: action.value
      }

    case searchWorkPlaceByIdActionTypes.REQUEST_ACTION:
      return {
        ...state,
        searchWorkPlaceByIdLoading: true,
        searchWorkPlaceByIdSuccess: null,
        searchWorkPlaceByIdError: null
      }
    case searchWorkPlaceByIdActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        searchWorkPlaceByIdLoading: false,
        searchWorkPlaceByIdSuccess: action.value,
        searchWorkPlaceByIdError: null
      }
    case searchWorkPlaceByIdActionTypes.FAILED_ACTION:
      return {
        ...state,
        searchWorkPlaceByIdLoading: false,
        searchWorkPlaceByIdSuccess: null,
        searchWorkPlaceByIdError: action.value
      }

    case resetActionTypes.WORKPLACE_RESET_ACTION:
      return {
        ...state,
        searchWorkPlaceError: null,
        searchWorkPlaceByIdError: null,
        createWorkPlaceError: null,
        createWorkPlaceSuccess: null,
        updateWorkPlaceError: null,
        updateWorkPlaceSuccess: null
      }
    default:
      return state
  }
}
