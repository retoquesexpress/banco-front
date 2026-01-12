export interface Account {
  id: string;
  type: string;
  accountNumber: string;
  balance: number;
  currency: string;
  status: 'active' | 'frozen' | 'closed';
  colorTag: string;
}