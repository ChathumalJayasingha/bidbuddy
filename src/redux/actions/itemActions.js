import { httpPost } from "../../services/httpServices";
import {
  createOrUpdateItemUrl,
  createOrUpdateShopUrl, deleteItemUrl,
  getAllItemsByPlanUrl,
} from "../../configurations/urlConfigurations";
import {
  deleteItemActionTypes,
  itemCreateUpdateActionTypes,
  resetActionTypes, shopCreateUpdateActionTypes,
} from "../actionTypes/actionTypes";
import { itemListActionTypes } from "../actionTypes/actionTypes";

//network requests here

export const findItemsByPlanAction = (data) => {
  return httpPost({
    url: getAllItemsByPlanUrl,
    actionTypes: itemListActionTypes,
    isAuth: true,
    data
  })
}

export const deleteItemAction = (data) => {
  return httpPost({
    url: deleteItemUrl,
    actionTypes: deleteItemActionTypes,
    isAuth: true,
    data
  })
}

export const createUpdateItemAction = (data) => {

  const formdata = new FormData();

  if (data.itemFile) {
    formdata.append("itemFile", data.itemFile);
  }
  if (data.isUpdate) {
    formdata.append("isUpdate", data.isUpdate);
  }
  if (data.itemId) {
    formdata.append("itemId", data.itemId);
  }

  formdata.append("itemName", data.itemName);
  formdata.append("itemPrice", data.itemPrice);
  formdata.append("itemUom", data.itemUom);
  formdata.append("unitQty", data.itemUnitQty);

  return httpPost({
    url: createOrUpdateItemUrl,
    actionTypes: itemCreateUpdateActionTypes,
    isFormData: true,
    data: formdata,
    isAuth: true
  })
}

//data passing actions here

export const resetItemMessageAction = () => ({
  type: resetActionTypes.ITEM_RESET_ACTION
})

export const clearItemsAction = () => ({
  type: itemCreateUpdateActionTypes.CLEAR_ACTION
})
