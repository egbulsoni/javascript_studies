const account = {
    name: 'Olaf Mill',
    expenses: [],
    income: [],
    addExpense: function(name, ammount){
        const obj = {description: name, ammount: ammount}
        this.expenses.push(obj)
    },
    getAccountSummary: function(){
        let exp = 0
        let inc = 0
        this.expenses.forEach(function(item){
            exp += item.ammount
        })
        this.income.forEach(function(item){
            inc += item.ammount
        })
        return `${this.name} has a balance of $${inc - exp}. $${inc} in income. $${exp} in expenses.`
    },
    addIncome: function(name, ammount){
        const obj = {description: name, ammount: ammount}
        this.income.push(obj)
    }
}

//addExpense -> descr, ammount
//getAccountSummary -> total up all expenses -> Olaf Mill has $1250 in expenses


account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
// console.log(account.expenses)
console.log(account.getAccountSummary())
account.addIncome("Job", 1000)
console.log(account.getAccountSummary())