import { Restaurant } from './restaurant.model';
import { Horaires } from './horaire.model';


export class Reservation {
  id!: number;
  nbAdultes!: number;
  nbEnfants!: number;
  heureReservation!: Horaires;
  restaurant!: Restaurant;
}
