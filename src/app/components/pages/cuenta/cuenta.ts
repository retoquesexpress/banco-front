import { Component, inject, OnInit } from '@angular/core';
import {
  CreditCardDetailResponse,
  AccountMovementDetailResponse,
  MovementType,
  OriginMovement
} from '../../../datos/Models/i-user-data';
import { CommonModule } from '@angular/common';
import { SFuncionalidades } from '../../../datos/Services/s-funcionalidades';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  imports: [CommonModule, RouterLink],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.scss'
})
export class Cuenta implements OnInit {
  private funcionalidadesService = inject(SFuncionalidades);
  private route = inject(ActivatedRoute);

  iban: string | null = null;

  cards: CreditCardDetailResponse[] = [];
  movements: AccountMovementDetailResponse[] = [];

  etiquetasOrigen: Record<OriginMovement, string> = {
    [OriginMovement.TRANSFERENCIA]: 'Transferencia Bancaria',
    [OriginMovement.DOMICILIACION]: 'Recibo Domiciliado',
    [OriginMovement.TARJETA_BANCARIA]: 'Pago con Tarjeta'
  };

  public tipoMovimiento = MovementType;

  ngOnInit() {
    this.iban = this.route.snapshot.paramMap.get('iban');
    if (this.iban) {
      this.cargarTarjetas();
      this.cargarMovimientos();
    } else {
      console.warn('Cuenta Component: iban is missing in route!');
    }
  }

  cargarTarjetas() {
    this.funcionalidadesService.getAllCreditCards(this.iban || undefined).subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (err) => console.error('Error al cargar las Tarjetas:', err)
    });
  }

  cargarMovimientos() {
    this.funcionalidadesService.getAccountMovements(this.iban || undefined).subscribe({
      next: (data) => {
        this.movements = data;
      },
      error: (err) => console.error('Error al cargar los Movimientos:', err)
    });
  }

  formatCardNumber(cardNumber: string): string {
    if (cardNumber.length >= 4) {
      const lastFour = cardNumber.slice(-4);
      return `**** **** **** ${lastFour}`;
    }
    return cardNumber;
  }

  formatExpirationDate(expirationDate: string): string {
    if (!expirationDate) return '';

    const date = new Date(expirationDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${month}/${year}`;
  }
}


