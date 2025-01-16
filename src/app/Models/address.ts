import { PostalCode } from "./postal-code"

export interface Address {
    id:number
    street:string
    apartment:string
    postalCode:PostalCode
}
