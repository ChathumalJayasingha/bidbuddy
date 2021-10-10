import {
  createOrUpdatePlanActionTypes,
  deletePlanActionTypes,
  resetActionTypes,
  searchPlansActionTypes,
} from "../actionTypes/actionTypes";

const initialState = {
  planListSuccess: [],
  planListLoading: false,
  planListError: null,

  createUpdatePlanSuccess: null,
  createUpdatePlanLoading: false,
  createUpdatePlanError: null,

  deletePlanSuccess: null,
  deletePlanLoading: false,
  deletePlanError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchPlansActionTypes.REQUEST_ACTION:
      return {
        ...state,
        planListSuccess: [],
        planListLoading: true,
        planListError: null
      }
    case searchPlansActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        planListSuccess: action.value,
        planListLoading: false,
        planListError: null
      }
    case searchPlansActionTypes.FAILED_ACTION:
      return {
        ...state,
        planListSuccess: [],
        planListLoading: false,
        planListError: action.value
      }

    case createOrUpdatePlanActionTypes.REQUEST_ACTION:
      return {
        ...state,
        createUpdatePlanSuccess: null,
        createUpdatePlanLoading: true,
        createUpdatePlanError: null
      }
    case createOrUpdatePlanActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        createUpdatePlanSuccess: action.value,
        createUpdatePlanLoading: false,
        createUpdatePlanError: null
      }
    case createOrUpdatePlanActionTypes.FAILED_ACTION:
      return {
        ...state,
        createUpdatePlanSuccess: null,
        createUpdatePlanLoading: false,
        createUpdatePlanError: action.value
      }

    case deletePlanActionTypes.REQUEST_ACTION:
      return {
        ...state,
        deletePlanSuccess: null,
        deletePlanLoading: true,
        deletePlanError: null
      }
    case deletePlanActionTypes.SUCCESS_ACTION:
      return {
        ...state,
        deletePlanSuccess: action.value,
        deletePlanLoading: false,
        deletePlanError: null
      }
    case deletePlanActionTypes.FAILED_ACTION:
      return {
        ...state,
        deletePlanSuccess: null,
        deletePlanLoading: false,
        deletePlanError: action.value
      }

    case resetActionTypes.PLAN_RESET_ACTION:
      return {
        ...state,
        planListError: null,
        createUpdatePlanError: null,
        createUpdatePlanSuccess: null,
        deletePlanError: null,
        deletePlanSuccess: null
      }
    default:
      return state
  }
}
