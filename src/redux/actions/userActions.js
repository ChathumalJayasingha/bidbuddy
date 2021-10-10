import { httpPost } from "../../services/httpServices";
import {
  changePasswordUrl,
  createUpdateUserUrl,
  deleteUserUrl,
  findAllUsersUrl,
} from "../../configurations/urlConfigurations";
import {
  changePasswordActionTypes,
  createUpdateUserActionTypes,
  deleteUserActionTypes,
  findAllUserActionTypes,
  resetActionTypes,
} from "../actionTypes/actionTypes";

//network requests here

export const findAllUsersAction = (data) => {
  return httpPost({
    url: findAllUsersUrl,
    actionTypes: findAllUserActionTypes,
    isAuth: true,
    data
  })
}

export const changePasswordAction = (data) => {
  return httpPost({
    url: changePasswordUrl,
    actionTypes: changePasswordActionTypes,
    isAuth: true,
    data
  })
}

export const deleteUserAction = (data) => {
  return httpPost({
    url: deleteUserUrl,
    actionTypes: deleteUserActionTypes,
    isAuth: true,
    data
  })
}

export const createOrUpdateUserAction = (data) => {

  const formdata = new FormData();

  if (data.profileLogoFile) {
    formdata.append("profileLogoFile", data.profileLogoFile);
  }
  if (data.isUpdate) {
    formdata.append("isUpdate", data.isUpdate);
  }
  if (data.id) {
    formdata.append("id", data.id);
  }

  formdata.append("firstName", data.firstName);
  formdata.append("lastName", data.lastName);
  formdata.append("mobileNumber", data.mobileNumber);
  formdata.append("password", data.password);
  formdata.append("role", data.role);

  return httpPost({
    url: createUpdateUserUrl,
    actionTypes: createUpdateUserActionTypes,
    isAuth: true,
    isFormData: true,
    data: formdata
  })
}

//data passing actions here

export const resetUserMessageAction = () => ({
  type: resetActionTypes.USER_RESET_ACTION
})

