import { User } from "./user.model";

export class Goal {

    id: number;
    description: string;
    date: Date;
    currentAmount: number;
    totalAmount: number;
    user: User;

    constructor(id: number,
                description: string,
                date: Date,
                currentAmount: number,
                totalAmount: number,
                user: User) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.currentAmount = currentAmount;
        this.totalAmount = totalAmount;
        this.user = user;

    }
}
