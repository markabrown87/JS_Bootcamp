function addTransaction(account, transaction) {
    account.balance += transaction.amount;
    account.transactions.add({
        description: transaction.description,
        amount: transaction.amount
    });
}

function resetAccount(account) {
    account.balance = 0;
    account.transactions = new Set();
}

function getAccountSummary(account) {
    console.log(`Account Name: ${account.name}`);
    console.log(`Account Balance: ${account.balance}`);
    account.transactions.forEach(transaction => {
        console.log(`Transaction Description: ${transaction.description}`);
        console.log(`Transaction Amount: ${transaction.amount}`);
    })
    return account;
}

let newAccount = {
    name: 'Mark',
    balance: 1000,
    transactions: new Set()
}

let transaction = {
    description: 'Cable',
    amount: -50
}

addTransaction(newAccount, transaction);
console.log(getAccountSummary(newAccount));
console.log(newAccount.name === 'Mark');
console.log(newAccount.balance === 950);
console.log(newAccount.transactions.size === 1)

