
import { httpPost } from "../../services/httpServices";
import {
  createOrUpdateShopUrl,
  deleteShopUrl,
  findAllShopsUrl,
} from "../../configurations/urlConfigurations";
import {
  deleteShopActionTypes,
  findAllShopsActionTypes,
  resetActionTypes,
  shopCreateUpdateActionTypes,
} from "../actionTypes/actionTypes";

//network requests here

export const createUpdateShopAction = (data) => {

  const formdata = new FormData();

  if (data.shopLogoFile) {
    formdata.append("shopLogoFile", data.shopLogoFile);
  }
  if (data.isUpdate) {
    formdata.append("isUpdate", data.isUpdate);
  }
  if (data.shopId) {
    formdata.append("shopId", data.shopId);
  }

  formdata.append("shopAddress", data.shopAddress);
  formdata.append("categories", JSON.stringify(data.categories));
  formdata.append("mobileNumber", data.mobileNumber);
  formdata.append("ownerName", data.ownerName);
  formdata.append("shopName", data.shopName);

  return httpPost({
    url: createOrUpdateShopUrl,
    actionTypes: shopCreateUpdateActionTypes,
    isFormData: true,
    data: formdata,
    isAuth: true
  })
}

export const deleteShopAction = (data) => {
  return httpPost({
    url: deleteShopUrl,
    actionTypes: deleteShopActionTypes,
    isAuth: true,
    data
  })
}

export const findAllShopsAction = (data) => {
  return httpPost({
    url: findAllShopsUrl,
    actionTypes: findAllShopsActionTypes,
    isAuth: true,
    data
  })
}

//data passing actions here
export const resetShopList = () => ({
  type: findAllShopsActionTypes.RESET_SHOP_ACTION
})

//data passing actions here
export const resetShopMessages = () => ({
  type: resetActionTypes.SHOP_RESET_ACTION
})
