import { languageActionTypes } from "../actionTypes/actionTypes";

export const languageChangeAction = (data) => ({
  type: languageActionTypes.CHANGE_LANGUAGE,
  value: data
})

