

const MONTHS = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];


 export const getDaysInMonth = (month, year) => {
    var daysInMonth = new Date(year, month+1, 0).getDate();
    return daysInMonth;
 }

export const getMonthName = (index) =>{
    return MONTHS[index];
}

export const getDaysArr = (month, year) => {
    let daysArr = new Array(43);
    let firstDay = new Date(year, month);
    let firstDayNum = firstDay.getDay();
    firstDayNum = firstDayNum === 0 ? 7 : firstDayNum;
    console.log(firstDayNum)
    let daysInMonth = getDaysInMonth(month, year);
    let lastDayPrevMonth = new Date(year, month, 0);
    let lastDatePrevMonth = lastDayPrevMonth.getDate();
    for(let i= firstDayNum-1; i>0; i--){
        daysArr[i] = {
            displayDate : lastDatePrevMonth--
        }
    }
    let count = 1;
    for(let j =firstDayNum; j< firstDayNum+daysInMonth; j++){
        daysArr[j] = {
            displayDate : count.toLocaleString('en-US',
           { minimumIntegerDigits: 2,
            useGrouping: false}),
            isCurrMonth : true
        }
        count ++;
    }
    count=1;
    for(let k=firstDayNum+daysInMonth; k<43; k++){
        daysArr[k] = {
            displayDate : count.toLocaleString('en-US',
            { minimumIntegerDigits: 2,
             useGrouping: false})
        }
        count++;
    }
    return daysArr;
}