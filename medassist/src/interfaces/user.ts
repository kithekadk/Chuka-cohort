export interface user{
    id: string,
    name:string,
    phone_number:string,
    email: string,
    password:string,
    role:string,
    createdAt:string
}

export interface login_details{
    email:string,
    password:string
}