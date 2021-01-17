'use strict';

let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    countBtn = document.querySelector('.count-budget-btn'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i <= optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent =  appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Это минимальный уровень достатка!';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Это средний уровень достатка!';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Это высокий уровень достатка!';
        } else {
            console.log ("Ошибочка...!");
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка'
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
   if (appData.savings == true) {
    appData.savings = false;
   } else {
    appData.savings = true; 
   }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value; 

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value; 

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);  
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
