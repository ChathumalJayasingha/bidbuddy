import { httpGet, httpPost } from "../../services/httpServices";
import { createWorkPlaceUrl, searchWorkPlaceUrl, updateWorkPlaceUrl } from "../../configurations/urlConfigurations";
import {
  createWorkPlaceActionTypes,
  languageActionTypes, resetActionTypes,
  searchWorkPlaceActionTypes,
  searchWorkPlaceByIdActionTypes, updateWorkPlaceActionTypes,
} from "../actionTypes/actionTypes";

//network requests here

export const createWorkPlaceAction = (data) => {

  const formdata = new FormData();

  if (data.workPlaceImage) {
    formdata.append("workPlaceImageFile", data.workPlaceImage);
  }
  if (data.adminImage) {
    formdata.append("ownerImageFile", data.adminImage);
  }

  formdata.append("workPlaceName", data.workPlaceName);
  formdata.append("workPlaceAddressLine1", data.addressLine1);
  formdata.append("workPlaceAddressLine2", data.addressLine2);
  formdata.append("workPlaceAddressLine3", data.addressLine3);
  formdata.append("ownerFirstName", data.firstName);
  formdata.append("ownerLastName", data.lastName);
  formdata.append("ownerMobileNumber", data.mobileNumber.toString());
  formdata.append("ownerPassword", data.password);

  return httpPost({
    url: createWorkPlaceUrl,
    actionTypes: createWorkPlaceActionTypes,
    isFormData: true,
    data: formdata
  })
}

export const updateWorkPlaceAction = (data) => {

  const formdata = new FormData();

  if (data.workPlaceImage) {
    formdata.append("workPlaceImageFile", data.workPlaceImage);
  }

  formdata.append("workPlaceName", data.workPlaceName);
  formdata.append("workPlaceAddressLine1", data.addressLine1);
  formdata.append("workPlaceAddressLine2", data.addressLine2);
  formdata.append("workPlaceAddressLine3", data.addressLine3);

  return httpPost({
    url: updateWorkPlaceUrl,
    actionTypes: updateWorkPlaceActionTypes,
    isFormData: true,
    isAuth: true,
    data: formdata
  })
}

export const searchWorkPlaceAction = (data) => {
  return httpGet({
    url: searchWorkPlaceUrl + '/' + data.pageNumber + '/' + data.rowsPerPage + '/' + data.keyword,
    actionTypes: searchWorkPlaceActionTypes
  })
}

export const searchWorkPlaceByIdAction = (id) => {
  return httpGet({
    url: searchWorkPlaceUrl + '/' + id,
    actionTypes: searchWorkPlaceByIdActionTypes
  })
}


//data passing actions here
export const resetWorkPlaceMessages = () => ({
  type: resetActionTypes.WORKPLACE_RESET_ACTION
})

