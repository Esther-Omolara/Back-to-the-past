class TimeMachine {
    travelTo(year) {
        if ((year >= 1801) && (year <= 1900)) {
            console.log(`Traveling through time to ${year}`);
        } else {
            console.log("Time machine can only travel between 1801-1900 [inclusive]")
        }
    }
}
/**Let the X_money be 0 */
class AccountBalance {
    constructor() {
        this._balance = 0.0;
    }

    /**
     * returns the available credit balance of the account
     */
    get balance() {
        return this._balance;
    }

    /**
     * The parameter(number) entered will credit the account balance
     * 
     */
    credit(value) {
        value = parseFloat(value);
        if (!isNaN(value) && (value > 1.0) && (value < 1_000_000.00)) {
            this._balance += value;
        } else {
            console.log("Credit value should be within 1.0 - 1_000_000.00");
        }
    }

    /**
     * Allows us to debit the account balance
     * parameter {number} value The amount we want to debit from the account balance
     * returns the amount we removed from the account balance
     */
    debit(value) {
        value = parseFloat(value);
        if (!isNaN(value) && !(value > this._balance)) {
            this._balance -= value;
            return value;
        } else {
            console.log("Insufficient funds");
        }
    }
}

class Human {
    /**
     * 
     * parameter {string} name: The name of the human 
     * parameter {number} age: The age of the human
     */
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._currentYear = 1800;
    }

    /**
     * Allows the human to inherit money or a time machine.
     * param {AccountBalance | TimeMachine} value 
     */
    inherit(value) {
        if (value instanceof AccountBalance) {
            this._money = value;
        } else if (value instanceof TimeMachine) {
            this._timeMachine = value;
        }
    }

    /**
     * Allows us to check if this human can travel to the provided year
     * based on if they have a time machine and how much it will cost.
     * param {int} year: The year we want to check if it's possible for the human to travel to.
     */
    canTravelTo(year) {
        if (this._money == undefined) {
            console.log(`${this._name} has no money for time travel`);
        }
        if (this._timeMachine == undefined) {
            console.log (`${this._name} has no time machine.`);
        }
        let timeTravelExpense = 0;
        let yearCounter = this._currentYear;

        while (year >= yearCounter) {
            timeTravelExpense += this.calculateTimeTravelExpense(yearCounter);
            yearCounter++;
        }

        if 
            (this._money.debit(timeTravelExpense)) {
            console.log(`Yes! He will live a carefree life and will have ${this._money.balance} dollars left.`)
        } 
        else {
            console.log(`He will need ${timeTravelExpense} dollars to survive.`);
        }
    }

    /**
     * Calculate the Time travel expenses for the year provided
     * param {int} year The year we desire to know how much it cost
     * returns The time travel expense in dollars
     */
    calculateTimeTravelExpense(year) {
        if (year % 2 == 0) {
            // Year is even
            return 12_000;
        } else {
            // Year is odd
            return 12_000 + (this.ageIn(year) * 50);
        }
    }

    /**
     * Calculates the age the user is expected to be at a particular year.
     *  param{int} year The year in which we desire to know the user's age.
     * returns The age the user will be in the year provided.
     */
    ageIn(year) {
        return this._age + (year - this._currentYear);
    }
}

// Instantiation of a new human named Ivan with an age of 18
let ivan = new Human('Ivan', 18);

// Instantiation of an `AccountBalance`
let accountBalance = new AccountBalance();

// Credit the account balance with $50,000
accountBalance.credit(50_000);


// Instantiation of a time machine
let timeMachine = new TimeMachine()

// Ivan inherits the account balance
ivan.inherit(accountBalance);
// Ivan inherits the time machine
ivan.inherit(timeMachine);

// We want to know if Ivan can travel to year 1802
ivan.canTravelTo(1802);
