
export interface IRestaurantOwnerRepository{
    createOwner(owner:any):any;
    getOwnerById(id:string):any;
    getOwnerByEmail(email:string):any;
    updateOwner(id:string,input:any):any;

}

export interface IRestaurantOwnerInteractor{
    createOwner(owner:any):any;   
    getOwnerById(id:string):any;
    getOwnerByEmail(email:string):any;
    updateOwner(id:string,input:any):any;

}