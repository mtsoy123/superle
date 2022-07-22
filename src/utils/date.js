function getCurrentDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}-${minutes}-${seconds}-${day}-${month}-${year}`;
}

export default getCurrentDate;
