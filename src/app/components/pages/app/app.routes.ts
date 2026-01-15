import { Routes } from '@angular/router';
import { Cuenta } from '../cuenta/cuenta';
import { Inicio } from '../inicio/inicio';
import { Login } from '../login/login';
import { loginGuard } from '../../../datos/Guards/login-guard';


export const routes: Routes = [
     { path: '', component: Login },
     { path: 'cuentas', component: Inicio, canActivate: [loginGuard] },
     { path: 'cuentas/:iban', component: Cuenta, canActivate: [loginGuard] },
];
