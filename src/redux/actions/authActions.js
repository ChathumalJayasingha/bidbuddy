import { httpGet, httpPost } from "../../services/httpServices";
import {
  findUserByIdUrl,
  signInUrl,
  simpleUpdateUrl,
  updateWorkPlaceUrl,
} from "../../configurations/urlConfigurations";
import {
  findUserActionTypes,
  navigationActionTypes,
  resetActionTypes,
  signInActionTypes, simpleUpdateActionTypes, updateWorkPlaceActionTypes,
} from "../actionTypes/actionTypes";
import AsyncStorage from "@react-native-community/async-storage";

//network requests here

export const signInAction = (data) => {
  return httpPost({
    url: signInUrl,
    actionTypes: signInActionTypes,
    data
  })
}

export const findUserByIdAction = (userId) => {
  return httpGet({
    url: findUserByIdUrl + '/' + userId,
    actionTypes: findUserActionTypes,
    isAuth: true
  })
}

export const userSimpleUpdateAction = (data) => {

  const formdata = new FormData();

  if (data.profileLogoFile) {
    formdata.append("profileLogoFile", data.profileLogoFile);
  }
  formdata.append("firstName", data.firstName);
  formdata.append("lastName", data.lastName);
  formdata.append("id", data.id);

  return httpPost({
    url: simpleUpdateUrl,
    actionTypes: simpleUpdateActionTypes,
    isFormData: true,
    isAuth: true,
    data: formdata
  })
}

//data passing actions here

export const resetAuthMessages = () => ({
  type: resetActionTypes.AUTH_RESET_ACTION
})

export const refreshNavigationAction = (data) => ({
  type: navigationActionTypes.REFRESH_NAVIGATION,
  value: data
})
