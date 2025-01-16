import { PostalCode } from './postal-code'
import { Ticket } from './ticket';

export interface User {
    id:number;
    userName:string;
    email:string;
    passwordHash:string;
    postalCode:PostalCode;
    tickets?:Ticket[];
    creatDate:string
}
