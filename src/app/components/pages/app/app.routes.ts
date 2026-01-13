import { Routes } from '@angular/router';
import { Cuenta } from '../cuenta/cuenta';
import { Inicio } from '../inicio/inicio';
import { Login } from '../login/login';


export const routes: Routes = [
     {path: '', component: Login },
     {path: 'cuentas', component: Inicio },
     {path: 'cuenta', component: Cuenta },


];
