import {
  findAllBusinessTypesActionTypes,
  findAllCategoriesActionTypes,
  resetActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {
  businessTypesSuccess: null,
  businessTypesLoading: false,
  businessTypesError: null,

  categoriesSuccess: null,
  categoriesLoading: false,
  categoriesError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case findAllBusinessTypesActionTypes.REQUEST_ACTION:
      return {
        ...state,
        businessTypesSuccess: null,
        businessTypesLoading: true,
        businessTypesError: null
      }
    case findAllBusinessTypesActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        businessTypesSuccess: action.value,
        businessTypesLoading: false,
        businessTypesError: null
      }
    case findAllBusinessTypesActionTypes.FAILED_ACTION:
      return {
        ...state,
        businessTypesSuccess: null,
        businessTypesLoading: false,
        businessTypesError: action.value
      }

    case findAllCategoriesActionTypes.REQUEST_ACTION:
      return {
        ...state,
        categoriesSuccess: null,
        categoriesLoading: true,
        categoriesError: null
      }
    case findAllCategoriesActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        categoriesSuccess: action.value,
        categoriesLoading: false,
        categoriesError: null
      }
    case findAllCategoriesActionTypes.FAILED_ACTION:
      return {
        ...state,
        categoriesSuccess: null,
        categoriesLoading: false,
        categoriesError: action.value
      }

    case resetActionTypes.COMMON_RESET_ACTION:
      return {
        ...state,
        businessTypesError: null,
        categoriesError: null
      }
    default:
      return state
  }
}
