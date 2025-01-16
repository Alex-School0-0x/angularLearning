import { Seat } from './seat'

export interface Hall {
    id: number;
    name: string;
    seats: Seat[];
  }
