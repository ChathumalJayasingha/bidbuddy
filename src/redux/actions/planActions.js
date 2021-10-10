import { httpGet, httpPost } from "../../services/httpServices";
import {
  allBusinessTypesUrl,
  allCategoriesUrl,
  creteOrUpdateBusinessPlanUrl,
  deleteBusinessPlanUrl,
  searchBusinessPlansUrl,
} from "../../configurations/urlConfigurations";
import {
  createOrUpdatePlanActionTypes,
  deletePlanActionTypes,
  findAllBusinessTypesActionTypes,
  findAllCategoriesActionTypes,
  resetActionTypes,
  searchPlansActionTypes,
} from "../actionTypes/actionTypes";

//network requests here

export const findBusinessPlansAction = (data) => {
  return httpGet({
    url: searchBusinessPlansUrl + '/' + data,
    actionTypes: searchPlansActionTypes,
    isAuth: true
  })
}

export const findAllBusinessTypesAction = () => {
  return httpGet({
    url: allBusinessTypesUrl,
    actionTypes: findAllBusinessTypesActionTypes,
    isAuth: true
  })
}

export const findAllCategoriesAction = () => {
  return httpGet({
    url: allCategoriesUrl,
    actionTypes: findAllCategoriesActionTypes,
    isAuth: true
  })
}

export const createOrUpdateBusinessPlanAction = (data) => {
  return httpPost({
    url: creteOrUpdateBusinessPlanUrl,
    actionTypes: createOrUpdatePlanActionTypes,
    isAuth: true,
    data
  })
}

export const deleteBusinessPlanAction = () => {
  return httpPost({
    url: deleteBusinessPlanUrl,
    actionTypes: deletePlanActionTypes,
    isAuth: true,
    data: {}
  })
}


//data passing actions here

export const resetPlanMessageAction = () => ({
  type: resetActionTypes.PLAN_RESET_ACTION
})

export const resetCommonMessageAction = () => ({
  type: resetActionTypes.COMMON_RESET_ACTION
})
