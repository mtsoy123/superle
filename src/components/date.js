const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const currentDate = `${seconds}-${minutes}-${hours}-${day}-${month}-${year}`;

export default currentDate;
