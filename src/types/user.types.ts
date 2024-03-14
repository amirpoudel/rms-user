export interface IUser {
    userId:string,
    firstName: string,
    middleName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    password:string,
    contact:{
        phoneNumber:string[],
        address:{
            province:string,
            district:string,
            municipality:string,
            wardNumber:number,
            areaName:string
        }
    }
}



export interface IOwner extends IUser{
    restaurantIds:string[]
}

export interface IStaff extends IUser{
    role:string,
    restaurantId:string,
}





