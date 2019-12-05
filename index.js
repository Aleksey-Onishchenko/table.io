
const nowDate = new Date(); // время сейчас
const startDate = new Date(2019, 10, 8); // стартовая дата 8.11
const differenceInDays = ((nowDate - startDate) / 1000 / 60 / 60 / 24) - 1;

console.log(differenceInDays); // дни от 8 по сегодняшнее (12)

const items = document.getElementsByTagName('td');

for (let i = 0; i < differenceInDays; i += 1) {
  items[i + 5].style.backgroundColor = 'red';
}
