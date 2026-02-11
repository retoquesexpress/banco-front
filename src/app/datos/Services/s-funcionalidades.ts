import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AccountMovementDetailResponse,
  CreditCardDetailResponse,
  AccountResponse,
  ClientDto
} from '../Models/i-user-data';


@Injectable({
  providedIn: 'root'
})
export class SFuncionalidades {

  private baseUrl = 'http://localhost:8081/api';
  private miHttp = inject(HttpClient);


  getAllCreditCards(iban?: string): Observable<CreditCardDetailResponse[]> {
    const url = iban ? `${this.baseUrl}/credit-cards?iban=${iban}` : `${this.baseUrl}/credit-cards`;
    return this.miHttp.get<CreditCardDetailResponse[]>(url);
  }

  getCreditCard(id: number): Observable<CreditCardDetailResponse> {
    return this.miHttp.get<CreditCardDetailResponse>(`${this.baseUrl}/credit-cards/${id}`);
  }

  getAccountMovements(iban?: string): Observable<AccountMovementDetailResponse[]> {
    const url = iban ? `${this.baseUrl}/movements/account/${iban}` : `${this.baseUrl}/movements`;
    return this.miHttp.get<AccountMovementDetailResponse[]>(url);
  }

  getAccountMovement(id: number): Observable<AccountMovementDetailResponse> {
    return this.miHttp.get<AccountMovementDetailResponse>(`${this.baseUrl}/movements/${id}`);
  }

  getAccounts(dni?: string): Observable<AccountResponse[]> {
    const url = (dni && dni !== 'undefined') ? `${this.baseUrl}/accounts?dni=${dni}` : `${this.baseUrl}/accounts`;
    return this.miHttp.get<AccountResponse[]>(url);
  }

  getAccount(iban: string): Observable<AccountResponse> {
    return this.miHttp.get<AccountResponse>(`${this.baseUrl}/accounts/${iban}`);
  }

}
