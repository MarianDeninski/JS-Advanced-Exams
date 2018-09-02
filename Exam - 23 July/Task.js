class Task {
    constructor(title, deadline) {

        this.title = title;
        this.deadline = deadline;
        this.status = `Open`
    }

    get deadline() {

        return this._deadline;
    }

    set deadline(date) {

        if (date < Date.now()) {
            throw new Error;

        } else {
            this._deadline = date;
        }
    }

    get isOverdue() {

        if (this.status === `Complete`) {
            return false;
        }

        if (this.deadline < Date.now()) {
            return true;
        } else {
            return false;
        }
    }

    static comparator(a, b) {
        if (Task.statusRank === undefined) {
            Object.defineProperty(Task, `statusRank`, {

                value: {
                    "In Progress": 1,
                    "Open": 2,
                    "Complete": 3
                },
                configurable: false,
                enumerable: false,
                writable: false
            });
        }
        let rankA = a.isOverdue ? 0 : Task.statusRank[a.status];
        let rankB = b.isOverdue ? 0 : Task.statusRank[b.status];

        if (rankA === rankB) {
            return a.deadline - b.deadline;
        } else {
            return rankA - rankB;
        }


    }

    toString() {
        let statIcon = '';

        if (this.isOverdue && this.status!==`Complete`) {
            statIcon = "\u26A0";
        }
        else if (this.status === `Open`) {
            statIcon = `\u2731`;
        }
        else if (this.status === `In Progress`) {
            statIcon = "\u219D";
        }
        else if (this.status === `Complete`) {
            statIcon = "\u2714";
        }
        if(this.status ===`Complete`){
            return `[${statIcon}] ${this.title}`
        }
        if (this.isOverdue) {
            return `[${statIcon}] ${this.title} (overdue)`
        }else{
            return `[${statIcon}] ${this.title} (deadline: ${this.deadline})`
        }
    }
}