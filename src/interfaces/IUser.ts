export interface IUserInteractor{
    
    createUser(input:any):Promise<any>;
    
}



export interface IUserRepository{
    create(data:any):Promise<any>;
    
}