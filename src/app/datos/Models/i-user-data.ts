export enum OriginMovement {
  TRANSFERENCIA = 'TRANSFERENCIA',
  DOMICILIACION = 'DOMICILIACION',
  TARJETA_BANCARIA = 'TARJETA_BANCARIA'
}

export enum MovementType {
  RETIRAR = 'RETIRAR',
  DEPOSITAR = 'DEPOSITAR'
}

export interface AccountMovementDetailResponse {
  idAccountMovement: number;
  creditCardOrigin: string;
  originMovement: OriginMovement;
  date: Date;
  amount: number;
  movementType: MovementType;
  concept: string;
}






export interface ClientDto {
  dni: string;
  userName: string;
  name: string;
  surname1: string;
  surname2: string;
  apiToken: string;
}

export interface AccountMovementDto {
  idAccountMovement: number;
  creditCardOrigin: string;
  originMovement: OriginMovement;
  date: Date;
  amount: number;
  movementType: MovementType;
  concept: string;
}

export interface CreditCardDto {
  idCreditCard: number;
  cardNumber: string;
  expirationDate: string;
  cvv: number;
  nombreCompleto: string;
}

export interface AccountResponse {
  iban: string;
  balance: number;
  client: ClientDto;
  movements: AccountMovementDto[];
  creditCards: CreditCardDto[];
}

export interface CreditCardDetailResponse {
  idCreditCard: number;
  cardNumber: string;
  expirationDate: string;
  cvv: number;
  nombreCompleto: string;
}

