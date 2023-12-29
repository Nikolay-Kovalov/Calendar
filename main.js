const calendar = document.querySelector('.calendar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const year = document.querySelector('.year');
const day = document.querySelector('.currentDay');
const month = document.querySelector('.month');
const td = document.querySelectorAll('td');
const table = document.querySelector('table');





const days = [
        'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurstday',
    'Friday',
    'Saturday',

]

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const date = new Date();
const currentYear = date.getFullYear();
const currentDay = date.getDay();
console.log(currentDay)
const currentMonth = date.getMonth();

year.textContent = currentYear;
day.textContent = days[currentDay];
month.textContent = months[currentMonth];

let curMonth = currentMonth;
console.log(curMonth)
let curYear = currentYear;

console.log(curMonth)

table.addEventListener('click', onTableDataClick);
table.addEventListener('mouseover', mouseOver);
table.addEventListener('mouseout', mouseOut);
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

const state = {};

function mouseOver(evt) {
    if (evt.target.tagName === "TD" && evt.target.textContent) {
           evt.target.classList.add('over')
       }
}

function mouseOut(evt) {
      if (evt.target.tagName === "TD" && evt.target.classList.contains('over')) {
           evt.target.classList.remove('over')
       }
}


function onTableDataClick(evt) {

    if (evt.target.tagName === "TD") {
   td.forEach(item => {
            if (item.id === state.prev) {
                console.log(item)
                item.classList.remove('active')
                state.prev = evt.target.id
            }
        console.log("td");
        evt.target.classList.add('active');
        console.log('add active')
        console.log(evt.target)
        console.log(state.prev)
     
    
   })
        // evt.currentTarget.getElementById(state.prev).classList.remove('active')
        console.log(new Date(curYear, curMonth, evt.target.textContent).getDay())
        day.textContent = days[new Date(curYear, curMonth, evt.target.textContent).getDay()]

    }
}

function onPrevBtnClick() {
    td.forEach(item => item.textContent = "");
        if ( month.textContent === 'January') {
        curMonth = 12  
            console.log(curMonth)
                 curYear -= 1;
            year.textContent = curYear
    }

    curMonth = curMonth !==0 ? curMonth : 12
    curMonth -= 1;
    // console.log(curMonth)
    month.textContent = months[curMonth];
        console.log(curMonth);
          year.textContent = curYear

    renderDays(curYear, curMonth + 1)
    td.forEach(item => {

         if (item.id === state.prev) {
            item.classList.remove('active')
         }
                
    })
    td.forEach(item => {
        if (item.textContent === '1') {
            item.classList.add('active');
            state.prev = item.id
        
            if (item.id === '7') {
                        day.textContent = days[0] 
            } else {
                    day.textContent = days[item.id]
            }
        }
    })
}

function onNextBtnClick() {
    td.forEach(item => {
        item.textContent = "";
    
    });
        if (month.textContent === 'December') {
            curMonth = -1;  
            curYear += 1;
            year.textContent = curYear
    } 
   curMonth = curMonth !==11  ?  curMonth += 1 : 0;
    month.textContent = months[curMonth];
 
    console.log(curMonth);
         year.textContent = curYear
    renderDays(curYear, curMonth + 1);
    td.forEach(item => {

         if (item.id === state.prev) {
            item.classList.remove('active')
         }
                
    })
    td.forEach(item => {
        if (item.textContent === '1') {
            item.classList.add('active');
            state.prev = item.id
        
            if (item.id === '7') {
                        day.textContent = days[0] 
            } else {
                    day.textContent = days[item.id]
            }
        }
    })
}

function renderDays(year, month) {
    const days = daysInMonth(year, month);
    switch (new Date(year, month - 1, 1).getDay()) {
        case 0:
            for (let i = 1; i <= days; i += 1) {
                td[i+5].textContent = i;
            }
            break;
        case 1:
            for (let i = 1; i <= days; i += 1) {
                td[i-1].textContent = i;
            }
            break;
         case 2:
            for (let i = 1; i <= days; i += 1) {
                td[i].textContent = i;
            }
            break;
         case 3:
            for (let i = 1; i <= days; i += 1) {
                td[i + 1].textContent = i;
            }
            break;
         case 4:
            for (let i = 1; i <= days; i += 1) {
                td[i + 2].textContent = i;
            }
            break;
        case 5:
            for (let i = 1; i <= days; i += 1) {
                td[i + 3].textContent = i;
            }
            break;
         case 6:
            for (let i = 1; i <= days; i += 1) {
                td[i + 4].textContent = i;
            }
            break;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    renderDays(currentYear, currentMonth + 1);
    td.forEach(item => {
          if (+item.textContent === date.getDate()) {
              item.classList.add('active')
              state.prev = item.id;
              console.log(state)
    }
    })
  
})

function daysInMonth(year,month) {
		return 32 - new Date(year, month-1, 32).getDate();
};
    

    


        
