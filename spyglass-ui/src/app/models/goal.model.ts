import { User } from "./user.model";

export class Goal {

    id: number;
    name: string;
    description: string;
    image: string;
    date: Date;
    currentAmount: number;
    totalAmount: number;
    user: User;

    constructor(id: number = 0,
                name: string = '',
                description: string = '',
                image: string = '',
                date: Date = new Date(),
                currentAmount: number = 0,
                totalAmount: number = 0,
                user: User = new User()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.date = date;
        this.currentAmount = currentAmount;
        this.totalAmount = totalAmount;
        this.user = user;

    }
}
