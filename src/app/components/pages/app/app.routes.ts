import { Routes } from '@angular/router';
import { Cuenta } from '../cuenta/cuenta';
import { Inicio } from '../inicio/inicio';


export const routes: Routes = [
     {path: '', component: Inicio },
     {path: 'cuenta', component: Cuenta },


];
