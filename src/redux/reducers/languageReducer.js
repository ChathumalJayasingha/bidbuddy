import { languageActionTypes } from "../actionTypes/actionTypes";
import { languages } from "../../configurations/appData";

const languageTexts = {
    eng: {
        "TEXT_01": "Find your work place...",
        "TEXT_02": "To find your work place, type the work place name or address or reference.",
        "TEXT_03": "Don't have a work place? Create your own work place",
        "TEXT_04": "No Results!",
        "TEXT_05": "HANDY BILLER",
        "TEXT_06": "Owner/Manager",
        "TEXT_07": "Address",
        "TEXT_08": "Mobile Number",
        "TEXT_09": "Password",
        "TEXT_10": "Create New Work Place!",
        "TEXT_11": "WorkPlace Details",
        "TEXT_12": "Work Place Name",
        "TEXT_13": "Work Place Image",
        "TEXT_14": "Address Line 1",
        "TEXT_15": "Address Line 2",
        "TEXT_16": "Address Line 3",
        "TEXT_17": "Admin Details",
        "TEXT_18": "First Name",
        "TEXT_19": "Last Name",
        "TEXT_20": "Mobile Number",
        "TEXT_21": "Admin Image",
        "TEXT_22": "Password",
        "TEXT_23": "Confirm Password"
    },
    sin: {
        "TEXT_01": "මෙය තොරතුරු සොයන ස්තානයයි!"
    }
}

const initialState = {
    selectedLanguage: languages.ENGLISH,
    textList: languageTexts.eng
}

export default (state = initialState, action) => {
    switch (action.type) {
        case languageActionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.value,
                textList: action.value === languages.ENGLISH ? languageTexts.eng : languageTexts.sin
            }
        default:
            return state
    }
}
