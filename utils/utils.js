const numberWithDots = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const priceHelper = (price, type) => {
  price = price.toString().split('.');
  return type === 'amount' ? price[0] : (price[1] ? price[1] : '00');
};

const translationHelper = word => {
  switch(word) {
    case "new":
      word = "Nuevo";
      break;
    case "used":
      word = "Usado";
      break;
    default:
      return word;
  }
  return word;
};

const capitalize = (titleString) => {
  return titleString.charAt(0).toUpperCase() + titleString.slice(1);
};

const utils = {
  numberWithDots,
  priceHelper,
  translationHelper,
  capitalize
};

module.exports = utils;
