// owner schema 

import mongoose, { Schema } from "mongoose";

interface IOwner {
    ownerId: string,
    firstName: string,
    middleName:string,
    lastName:string,
    username:string,
    email:string,
    phoneNumber:string,
    password:string,
    restaurants:string[],
} 

const ownerSchema = new Schema<IOwner>({
    
})