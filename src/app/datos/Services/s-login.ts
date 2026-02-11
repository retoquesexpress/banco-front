import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogin } from '../Models/i-login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLogged$ = this.isLogged.asObservable();
    url = 'http://localhost:8081/api/auth';
    httpLogin = inject(HttpClient);


    login(userName: string, password: string): Observable<ILogin> {
        return this.httpLogin.post<ILogin>(this.url + '/login', { userName, password });
    }

    saveToken(token: string, dni: string) {
        if (token) localStorage.setItem('Token', token);
        if (dni && dni !== 'undefined' && dni !== 'null') {
            localStorage.setItem('Dni', dni);
        }
        this.isLogged.next(true);
    }

    getToken(): string | null {
        return localStorage.getItem('Token');
    }

    getDni(): string | null {
        return localStorage.getItem('Dni');
    }

    isRegistered(): boolean {
        const token = this.getToken();
        const logged = token != null;
        this.isLogged.next(logged);
        return logged;
    }
    logOut() {
        localStorage.removeItem('Token');
        localStorage.removeItem('Dni');
        this.isLogged.next(false);
    }

}