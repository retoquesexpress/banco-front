import { Component } from '@angular/core';
import { Card, MovementType, OriginMovement, AccountMovement } from '../../../datos/Models/i-user-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  imports: [CommonModule,RouterLink],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.scss'
})
export class Cuenta {

  //Conectado Con Backend Próximamente:

  //cards!: Card[];
  //tipoMovimiento!:  MovementType[];

  // constructor(private mihttp: SFuncionalidades) { }

  // ngOnInit() {
  //   this.CargarTarjetas();
  //   this.CargarMovimientos();
  // }

  //CargarTarjetas(){this.mihttp.getAllCreditCards().subscribe({
    //   next: (data) => {
    //     this.cards = data;
    //   },
    //   error: (err) => console.error('Error al cargar las Tarjetas:', err)
    // });}
  //CargarMovimientos(){this.mihttp.getAccountMovements().subscribe({
    //   next: (data) => {
    //     this.movements = data;
    //   },
    //   error: (err) => console.error('Error al cargar los Movimientos:', err)
    // });}

  //Datos Simulados Hasta Conexión Backend:

  cards: Card[] = [ 
    {
      idCreditCard: 1,
      clientName: 'JUAN PÉREZ',
      cardNumber: '**** **** **** 1234',
      expirationDate: '12/26',
      cvv: 123,
    },
    {
      idCreditCard: 2,
      clientName: 'JUAN PÉREZ',
      cardNumber: '**** **** **** 5678',
      expirationDate: '08/25',
      cvv: 456,
    },
    {
      idCreditCard: 3,
      clientName: 'JUAN PÉREZ',
      cardNumber: '**** **** **** 9012',
      expirationDate: '11/27',
      cvv: 789,
    }
  ];
  

  etiquetasOrigen: Record<OriginMovement, string> = {
    [OriginMovement.TRANSFERENCIA]: 'Transferencia Bancaria',
    [OriginMovement.DOMILICIACION]: 'Recibo Domiciliado',
    [OriginMovement.TARJETA_BANCARIA]: 'Pago con Tarjeta'
  };

  public tipoMovimiento = MovementType;

    movements: AccountMovement[] = [
    { 
      idAccountMovement: 101, 
      creditCardOrigin: '**** 1234', 
      originMovement: OriginMovement.TARJETA_BANCARIA, 
      date: new Date(), 
      amount: 150.75, 
      movementType: MovementType.RETIRAR, 
      concept: 'Compra en Supermercado' 
    },
    { 
      idAccountMovement: 102, 
      creditCardOrigin: '**** 5678', 
      originMovement: OriginMovement.TRANSFERENCIA, 
      date: new Date(), 
      amount: 1200.00, 
      movementType: MovementType.DEPOSITAR, 
      concept: 'Nómina Marzo' 
    },
    { 
      idAccountMovement: 103, 
      creditCardOrigin: '**** 1234', 
      originMovement: OriginMovement.DOMILICIACION, 
      date: new Date(), 
      amount: 45.00, 
      movementType: MovementType.RETIRAR, 
      concept: 'Recibo Internet' 
    }
  ];
}
