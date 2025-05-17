import { Injectable } from '@angular/core';

export interface Account {
  id: number;
  name: string;
  balance: number;
  type: 'chequing' | 'savings';
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [];

  private nextId = 1;

  private transactions: Transaction[] = [];
  private nextTransactionId = 1;


  constructor() {}

  addAccount(account: Omit<Account, 'id'>): void {
    this.accounts.push({ id: this.nextId++, ...account });
  }

  getAccounts(): Account[] {
    return [...this.accounts]; // return a copy
  }

  transferFunds(fromId: number, toId: number, amount: number): string {
    const from = this.accounts.find(acc => acc.id === fromId);
    const to = this.accounts.find(acc => acc.id === toId);

    if (!from || !to) return 'Account not found';
    if (fromId === toId) return 'Cannot transfer to the same account';
    if (from.balance < amount) return 'Insufficient balance';

    from.balance -= amount;
    to.balance += amount;

    this.transactions.push({
        id: this.nextTransactionId++,
        fromId,
        toId,
        amount,
        date: new Date()
    });

    return 'Success';
    }

    getTransactions(): Transaction[] {
    return [...this.transactions];
    }


}

export interface Transaction {
  id: number;
  fromId: number;
  toId: number;
  amount: number;
  date: Date;
}
