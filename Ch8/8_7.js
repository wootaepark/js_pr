var month = 11;
var monthName;

switch(month){
    case 1 : monthName = '1월';
    case 2 : monthName = '2월';
    case 3 : monthName = '3월';
    case 4 : monthName = '4월';
    case 5 : monthName = '5월';
    case 6 : monthName = '6월';
    case 7 : monthName = '7월';
    case 8 : monthName = '8월';
    case 9 : monthName = '9월';
    case 10 : monthName = '10월';
    case 11 : monthName = '11월';
    case 12 : monthName = '12월';
    default : monthName = 'Invalid month';

}

console.log(monthName); // invalid month (break 안써서);