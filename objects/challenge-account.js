let myAccount = {
    name: 'Braun',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses += amount
}

let addIncome = function (account, amount){
    account.income += amount
}

let resetAccount = function (account, amount){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `client ${account.name}.\nincome $${account.income}.\n$${account.expenses} in expenses.\nRemainder: $${balance}`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 100)
addExpense(myAccount, 300)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))