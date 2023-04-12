import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
<<<<<<< HEAD
apiURL: string = 'http://localhost:8081/reservation';
reservations!: Reservation[];

constructor(private http: HttpClient) { }

// Liste toutes les réservations
listeReservation(): Observable<Reservation[]> {
  const url = `${this.apiURL}/all`;
  return this.http.get<Reservation[]>(url);
}

// Ajoute une nouvelle réservation
ajouterReservation(res: Reservation): Observable<Reservation> {
  const url = `${this.apiURL}/add`;
  return this.http.post<Reservation>(url, res, httpOptions);
}

// Supprime une réservation existante
supprimerReservation(id: number) {
  const url = `${this.apiURL}/delete/${id}`;
  return this.http.delete(url, httpOptions);
}

// Consulte une réservation existante
consulterReservation(id: number): Observable<Reservation> {
  const url = `${this.apiURL}/get/${id}`;
  return this.http.get<Reservation>(url);
}

// Met à jour une réservation existante
updateReservation(res: Reservation): Observable<Reservation> {
  const url = `${this.apiURL}/update`;
  return this.http.put<Reservation>(url, res, httpOptions);
}


=======
  apiURL: string = 'http://localhost:8080/theSpoon/reservations-api';
  reservations!: Reservation[];

  constructor(private http: HttpClient) {}

  listeReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL);
  }

  ajouterReservation(res: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiURL, res, httpOptions);
  }

  supprimerReservation(id: number) {
    console.log("ok");
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterReservation(id: number): Observable<Reservation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(res: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(this.apiURL, res, httpOptions);
  }
>>>>>>> 213b3bcf5cecb01c8272f25f9ce7c140767730ea
}
