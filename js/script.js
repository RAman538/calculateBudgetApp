(function() {
    "use strict";
    
    let money, time;
    
    function start() {
        money = +prompt("Ваш месячный бюджет?", "");
        time = prompt("Введите дату в формате: YYYY-MM-DD", ""); 
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш месячный бюджет?", "");
        }
    }
    start();
    
    let appDate = {
        budget: money,
        timeDate: time,
        expenses: {},
        optionalExpenses: {},
        incom: [],
        savings: true,shooseExpenses: function() {
            for (let i = 0; i < 2; i++) {
                let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
                obligatoryExpensesSum = +prompt("Во сколько это обойдется?", "");
                 if(typeof(obligatoryExpenses) === "string" && typeof(obligatoryExpenses) != null && 
                         obligatoryExpenses != "" && obligatoryExpenses.length < 50 && obligatoryExpensesSum != "" &&
                         typeof(obligatoryExpensesSum) != null ) {
                    appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
                    console.log("done");
                 } else {
                    i = i -1;
                 }
            }   
        },
        detectDayBudget: function() {
            appDate.moneyPerDay = (appDate.budget / 30);
            alert("Ваш ежедневный бюджет равен " + (appDate.moneyPerDay).toFixed(2));
        },
        detectLevel: function() {
            if(appDate.moneyPerDay < 1000) {
                console.log("Low income");
            } else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
                console.log("You have an average income");
            } else if(appDate.moneyPerDay > 5000) {
                console.log("You have a high level of wealth!");
            } else {
                console.log("Error!");
            }
        },
        checkSaving: function() {
            if(appDate.savings == true) {
                let save = +prompt("Какая сумма на депозите?"),
                 persent = +prompt("Под какой процент годовых?"); 
                 
                 appDate.monthIncome = save/100/12*persent;
                 alert("Ваш ежемесячный доход с депозита составляет: " + (appDate.monthIncome).toFixed(2));
             }
        },
        chooseOptExpenses: function() {
            for(let i = 1; i < 3; i++) {
                let opt = prompt("Введите статью необязательных расходов:", "");
                if(typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50){
                    appDate.optionalExpenses[i] = opt;
                     } else {
                         i = i - 1;
                }
            }
        },
        chooseIncome: function() {
        for(let i = 1; i < 2; i++) {
            let inc = prompt('Заполните поле дополнительного дохода (введите статьи дохода через ","', "");
            if(typeof(inc) === "string" && typeof(inc) != null && inc != "" && inc.length < 50) {
                appDate.incom = inc.split(", ");
                appDate.incom.push(prompt("Может что то еще?"));
                appDate.incom.sort();
            } else {
                i = i - 1;
            }
          }
            appDate.incom.forEach((item, index ) => {
                      alert(`${index + 1}: доп статья дохода ${item}`);
            });
        },
    };
    for(let key in appDate) {
        console.log(`DATA: ${appDate[key]}`);
}

let startCalculate = document.getElementById('start'),
    budgetValue = document.querySelectorAll('.budget-value'),
    daybudgetValue = document.querySelectorAll('.daybudget-value'),
    levelValue = document.querySelectorAll('.level-value'),
    expensesValue = document.querySelectorAll('.expenses-value'),
    optionalexpensesValue = document.querySelectorAll('.optionalexpenses-value'),
    incomeValue = document.querySelectorAll('.income-value'),
    monthsavingsValue = document.querySelectorAll('.monthsavings-value'),
    yearSavingsValue = document.querySelectorAll('.yearsavings-value'),

    input = document.querySelectorAll('.expenses-item'),

    approve = document.querySelector('[button], .expenses-item-btn'),
    approve1 = document.querySelector('[button], .optionalexpenses-btn'),
    calculate = document.querySelector('[button], .count-budget-btn'),

    optionExpen = document.querySelectorAll('.optionalexpenses-item'),

    chIncome = document.querySelector('.choose-income'),
    save = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


}());