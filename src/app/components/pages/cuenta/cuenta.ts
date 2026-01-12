import { Component } from '@angular/core';
import { Card, Payment } from '../../../datos/Models/i-user-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuenta',
  imports: [CommonModule],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.scss'
})
export class Cuenta {

  cards: Card[] = [
  
      { brand: 'Visa', lastFour: '1234', expiryDate: '12/24', id: '1', isDefault: true, balance: 2500.00 },
      { brand: 'Mastercard', lastFour: '5678', expiryDate: '11/23', id: '2', isDefault: false, balance: 1500.50 },
      { brand: 'Amex', lastFour: '9012', expiryDate: '10/25', id: '3', isDefault: false, balance: 3200.75 }
    ];
  
    payments: Payment[] = [
      { date: new Date(), amount: 150.75, description: 'Grocery Store', id: 'p1', status: 'Completed' },
      { date: new Date(), amount: 89.99, description: 'Online Subscription', id: 'p2', status: 'Pending' },
      { date: new Date(), amount: 45.00, description: 'Restaurant', id: 'p3', status: 'Failed' }
    ];

}
