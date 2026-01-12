import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Account } from '../../../datos/Models/i-account';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  accounts: Account[] = [
    { id: '1', type: 'Cuenta de Ahorros', accountNumber: 'ES21 •••• 4567', balance: 12540.25, currency: 'EUR', status: 'active', colorTag: '#6366f1' },
    { id: '2', type: 'Nómina Directa', accountNumber: 'ES21 •••• 8812', balance: 2800.00, currency: 'EUR', status: 'active', colorTag: '#10b981' },
    { id: '3', type: 'Fondo de Inversión', accountNumber: 'ES21 •••• 0092', balance: 45210.88, currency: 'EUR', status: 'frozen', colorTag: '#f59e0b' }
  ];

  getTotalBalance(): number {
    return this.accounts.reduce((acc, curr) => acc + curr.balance, 0);
  }

}
