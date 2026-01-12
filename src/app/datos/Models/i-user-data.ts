export interface Card {
  id: string;
  brand: 'Visa' | 'Mastercard' | 'Amex';
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
  balance: number;
}

export interface Payment {
  id: string;
  date: Date;
  amount: number;
  description: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

