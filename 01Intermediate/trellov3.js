let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function () {
        console.log(this);
    }
};

//myTodos.addMeeting();

let myTodosTwo = {
    day: 'Tuesday',
    meetings: 12,
    meetDone: 3,
    addMeeting: function (num) {
        this.meetings += num;
        console.log(this);
    },

    summary: function () {
        return `You have ${this.meetings} meetings today`
    }
};

myTodosTwo.addMeeting(4);
console.log(myTodosTwo.summary());