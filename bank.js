function bankAccount(name, balance) {
    this.name = name;
    this.balance = balance;
}

bankAccount.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
        this.balance += amount;
        console.log(`Deposit: ${this.name} current balance is ${this.balance}`);
        return true;
    }
    return false;
}

bankAccount.prototype.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
        this.balance -= amount;
        console.log(`Withdraw: ${this.name} current balance is ${this.balance}`);
        return true;
    }
    return false;
}
bankAccount.prototype.transfer = function(amount, account) {
    if (this.withdraw(amount) && account.deposit(amount)) {
        console.log(`Transfer: ${amount} has been transferred from ${this.name} to ${account.name}`);
        return true;
    }
    return false;
}
bankAccount.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
        console.log('Amount must be positive!');
        return false;
    }
    return true;
}
bankAccount.prototype._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;

    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
        console.log('You have insufficent funds!');
        return false;
    }
    return true;
}

const Joy = new bankAccount('Joy', 1000);
const Love = new bankAccount('Love', 2000);

console.log(Joy.transfer(100, Love));