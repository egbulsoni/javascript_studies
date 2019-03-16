let myAccount = {
    name: 'aztarium',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount //references same variable

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
    console.log(account)
    account = {} // breaks the binding (no longer points to the same object)
    console.log(account)
}

//objects are passed by reference!
addExpense(myAccount, 2.50)
console.log(myAccount)