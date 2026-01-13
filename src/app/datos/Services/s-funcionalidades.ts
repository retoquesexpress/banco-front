import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountMovement, Card } from '../Models/i-user-data';


@Injectable({
  providedIn: 'root'
})
export class SFuncionalidades {

  private miUrl = 'http://localhost:8080//api/clients';
  private miHttp = inject(HttpClient);


  getAllCreditCards(): Observable<Card[]> {
    return this.miHttp.get<Card[]>(this.miUrl);
  }
  getCreditCard(id: number): Observable<Card> {
    return this.miHttp.get<Card>(this.miUrl + "/" + id);
  }

  getAccountMovements(): Observable<AccountMovement[]> {
    return this.miHttp.get<AccountMovement[]>(this.miUrl);
  }
  getAccountMovement(id: number): Observable<AccountMovement> {
    return this.miHttp.get<AccountMovement>(this.miUrl + "/" + id);
  } 

  // getAccounts(): Observable<Account[]> {
  //   return this.miHttp.get<Account[]>(this.miUrl);
  // }
  // getAccount(id: number): Observable<Account> {
  //   return this.miHttp.get<Account>(this.miUrl + "/" + id);
  // } 
 

}
