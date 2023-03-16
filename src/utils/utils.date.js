const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let dateFormat;
  if (day < 10 && month < 10) {
    dateFormat = "0" + day + "/" + "0" + month + "/" + year;
  } else if (day < 10 && month >= 10) {
    dateFormat = "0" + day + "/" + month + "/" + year;
  } else if (day >= 10 && month < 10) {
    dateFormat = day + "/" + "0" + month + "/" + year;
  } else {
    dateFormat = day + "/" + month + "/" + year;
  }
  return dateFormat;
};

export default formatDate;
