export enum MovementType {
  RETIRAR = 'RETIRAR',
  DEPOSITAR = 'DEPOSITAR'
}

export enum OriginMovement {
  TRANSFERENCIA = 'TRANSFERENCIA',
  DOMILICIACION = 'DOMILICIACION',
  TARJETA_BANCARIA = 'TARJETA_BANCARIA'
}

export interface Card {

  idCreditCard: Number;
  cardNumber: String;
  expirationDate: String;
  cvv: Number;
  clientName: String;
}

export interface AccountMovement {
  
    idAccountMovement:number;
    creditCardOrigin:string;
    originMovement:OriginMovement;
    date:Date;
    amount:number;
    movementType:MovementType;
    concept:string;
}

