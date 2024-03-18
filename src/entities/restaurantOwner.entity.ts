import { User } from "./user.entity";

export class RestaurantOwner extends User{
    constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly email:string,
        public readonly password:string,
        public readonly role:string,
        public readonly createdAt:Date,
        public readonly restaurantIds:string[],
    ){
        super(id,name,email,password,role,createdAt);
    }
}