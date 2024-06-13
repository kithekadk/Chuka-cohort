export interface user{
    id             :string  
    username       :string   
    email          :string   
    password       :string
    name?          :string
    bio?           :string
    location?      :string
    d_o_b?         :string
    website?       :string
    profileImage?  :string
    headerImage?   :string
}


export interface token_details{
    id: string,
    name:string,
    email: string
}