import { colors } from "../configurations/constants";

const colorSet = ['#007BFF', '#17A2B8', '#28A745', '#FFC107', '#A793E5'];

export const getRandomColor = () => {
  const randomNumber = Math.floor((Math.random() * (colorSet.length-1)) + 1);
  return colorSet[randomNumber];
}

export const generateInitialLetters = (text) => {

  let textArr = text.split(' ');
  if (textArr.length >=2) {
    return textArr[0].substring(0,1) + textArr[1].substring(0,1);
  }

  textArr = text.split(',');
  if (textArr.length >= 2) {
    return textArr[0].substring(0,1) + textArr[1].substring(0,1);
  } else {
    return text.substring(0,2);
  }

}

export const formatPrice = (price) => {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
