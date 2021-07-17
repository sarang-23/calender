

const MONTHS = ["","January", "February", "March", "April", "May", "June",
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
    let today = new Date();    
    let daysArr = new Array(43);
    let firstDay = new Date(year, month);
    let firstDayNum = firstDay.getDay();
    firstDayNum = firstDayNum === 0 ? 7 : firstDayNum;
    let daysInMonth = getDaysInMonth(month, year);
    let lastDayPrevMonth = new Date(year, month, 0);
    let lastDatePrevMonth = lastDayPrevMonth.getDate();
    for(let i= firstDayNum-1; i>0; i--){
        daysArr[i] = {
            displayDate : lastDatePrevMonth--,
            isWeekend : isWeekend(i)
        }
    }
    let count = 1;
    for(let j =firstDayNum; j< firstDayNum+daysInMonth; j++){
        daysArr[j] = {
            displayDate : count.toLocaleString('en-US',
           { minimumIntegerDigits: 2,
            useGrouping: false}),
            isCurrMonth : true,
            isCurrDate : month === today.getMonth() && count === today.getDate(),
            isWeekend : isWeekend(j)
        }
        count ++;
    }
    count=1;
    for(let k=firstDayNum+daysInMonth; k<43; k++){
        daysArr[k] = {
            displayDate : count.toLocaleString('en-US',
            { minimumIntegerDigits: 2,
             useGrouping: false}),
             isWeekend : isWeekend(k)
        }
        count++;
    }
    return daysArr;
}

const isWeekend = (index) => {
    return (index+1 )%7 ==0 || index%7 ==0;
}