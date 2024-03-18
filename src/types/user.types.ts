export interface IUser {
    userId:string,
    firstName: string,
    middleName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    password:string,
    role:string
}



export interface IRestaurantOwner extends IUser{
    restaurantIds:string[]
}

export interface IRestaurantStaff extends IUser{
    restaurantId:string,
}





