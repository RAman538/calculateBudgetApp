(function() {
    "use strict";

    let startCalculate = document.getElementById('start'),
        budgetValue = document.querySelectorAll('.budget-value')[0],
        daybudgetValue = document.querySelector('.daybudget-value'),
        levelValue = document.querySelector('.level-value'),
        expensesValue = document.querySelector('.expenses-value'),
        optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
        incomeValue = document.querySelector('.income-value'),
        monthsavingsValue = document.querySelector('.monthsavings-value'),
        yearSavingsValue = document.querySelector('.yearsavings-value'),

        input = document.querySelectorAll('.expenses-item'),

        approve = document.querySelector('.expenses-item-btn'),
        approve1 = document.querySelector('.optionalexpenses-btn'),
        calculate = document.querySelector('.count-budget-btn'),

        optionExpen = document.querySelectorAll('.optionalexpenses-item'),

        chIncome = document.querySelector('.choose-income'),
        save = document.querySelector('#savings'),
        sum = document.querySelector('.choose-sum'),
        percent = document.querySelector('.choose-percent'),
        year = document.querySelector('.year-value'),
        month = document.querySelector('.month-value'),
        day = document.querySelector('.day-value');

    
    let money, time, obligatoryExpenses;
    
    /*function start() {
        money = +prompt("Ваш месячный бюджет?", "");
        time = prompt("Введите дату в формате: YYYY-MM-DD", ""); 
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш месячный бюджет?", "");
        }
    }
    start();*/

    startCalculate.addEventListener('click', function() {
        time = prompt("Введите дату в формате: YYYY-MM-DD", ""); 
        money = +prompt("Ваш месячный бюджет?", "");
        
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш месячный бюджет?", "");
        }

        appDate.budget = money;
        appDate.timeDate = time;
        budgetValue.textContent = money.toFixed(2);
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();

    approve.addEventListener('click', function() {
        obligatoryExpenses = 0;
        for (let i = 0; i < input.length; i++) {
            let a = input[i].value,
                b = input[++i].value;
             
            if(typeof(a) === "string" && typeof(a) != null && a != "" && a.length < 50 && 
                       b != "" && typeof(b) != null && b.length < 50 ) {
                         console.log('Done!');
                appDate.expenses[a] = b;
                obligatoryExpenses += +b;
             } else {
                i = i -1;
             }
        }
        expensesValue.textContent = obligatoryExpenses;
    
    });

    approve1.addEventListener('click', function() {
        for(let i = 0; i < optionExpen.length; i++) {
            let opt = optionExpen[i].value;
            if(typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50){
                appDate.optionalExpenses[i] = opt;
                optionalexpensesValue.textContent += appDate.optionalExpenses[i] + " ";
                 } else {
                     i = i - 1;
            }
        }
    });

    calculate.addEventListener('click', function() {
        if(appDate.budget != undefined) {
            let sum = 0;
            for(let key in appDate.expenses) {
                sum += +appDate.expenses[key];
            }

         appDate.moneyPerDay = ((appDate.budget - sum) / 30).toFixed(2);
         daybudgetValue.textContent = appDate.moneyPerDay;

                if(appDate.moneyPerDay < 1000) {
                    levelValue.textContent = "Low income";
                } else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
                    levelValue.textContent = "You have an average income";
                } else if(appDate.moneyPerDay > 5000) {
                    levelValue.textContent = "You have a high level of wealth!";
                } else {
                    levelValue.textContent = "Error!";
                }
            } else {
                daybudgetValue.textContent = 'Нажмите: "начать рассчет!"';
            }
    });

    chIncome.addEventListener('input', function() {     //вместо input можно юзать change, но input удобнее
        let inc = chIncome.value;
        if(typeof(inc) === "string" && typeof(inc) != null && inc != "" && inc.length < 50) {
            appDate.incom = inc.split(", ");
            incomeValue.textContent = appDate.incom;
        } else {
            i = i - 1;
        }
    });

    save.addEventListener('click', function() {
        if(appDate.savings == false) {
            appDate.savings = true;
        } else {
            appDate.savings = false;
        }
    });

    sum.addEventListener('input', function() {
        if(appDate.savings == true) {
           let s = +sum.value,
               p = +percent.value;

            appDate.monthIncome = s/100/12*p;
            appDate.yearIncome = s/100*p;

            monthsavingsValue.textContent = appDate.monthIncome.toFixed(2);
            yearSavingsValue.textContent = appDate.yearIncome.toFixed(2);

        }
    });

    percent.addEventListener('input', function() {
        if(appDate.savings == true) {
            let s = +sum.value,
               p = +percent.value;

            appDate.monthIncome = s/100/12*p;
            appDate.yearIncome = s/100*p;

            monthsavingsValue.textContent = appDate.monthIncome.toFixed(2);
            yearSavingsValue.textContent = appDate.yearIncome.toFixed(2);
        }
    });
});
    let appDate = {
        budget: money,
        timeDate: time,
        expenses: {},
        optionalExpenses: {},
        incom: [],
        savings: false,
        
        /*shooseExpenses: function() {
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
        },*/
        /*detectDayBudget: function() {
            appDate.moneyPerDay = (appDate.budget / 30);
            alert("Ваш ежедневный бюджет равен " + (appDate.moneyPerDay).toFixed(2));
        },*/
        /*detectLevel: function() {
            if(appDate.moneyPerDay < 1000) {
                console.log("Low income");
            } else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
                console.log("You have an average income");
            } else if(appDate.moneyPerDay > 5000) {
                console.log("You have a high level of wealth!");
            } else {
                console.log("Error!");
            }
        },*/
        /*checkSaving: function() {
            if(appDate.savings == true) {
                let save = +prompt("Какая сумма на депозите?"),
                 persent = +prompt("Под какой процент годовых?"); 
                 
                 appDate.monthIncome = save/100/12*persent;
                 alert("Ваш ежемесячный доход с депозита составляет: " + (appDate.monthIncome).toFixed(2));
             }
        },*/
        /*chooseOptExpenses: function() {
            for(let i = 1; i < 3; i++) {
                let opt = prompt("Введите статью необязательных расходов:", "");
                if(typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50){
                    appDate.optionalExpenses[i] = opt;
                     } else {
                         i = i - 1;
                }
            }
        },*/
        /*chooseIncome: function() {
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
        },*/

    };

    /*for(let key in appDate) {
        console.log(`DATA: ${appDate[key]}`);
}*/

}());