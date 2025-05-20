import { Injectable } from '@angular/core';

// Account model interface
export interface Account {
  id: number;                 // Unique internal ID
  accountNumber: string;      // 8-digit unique account number
  name: string;               // Account holder's name
  balance: number;            // Current balance
  type: 'chequing' | 'savings'; // Account type
}

// Service decorator to make this service injectable app-wide
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Stores all created accounts
  private accounts: Account[] = [];

  // Internal counter for assigning unique incremental IDs
  private nextId = 1;

  // Stores all transaction records
  private transactions: Transaction[] = [];

  // Internal counter for assigning unique transaction IDs
  private nextTransactionId = 1;

  constructor() {}

  // Adds a new account to the internal list
  addAccount(account: Omit<Account, 'id' | 'accountNumber'>): void {
    const newAccount: Account = {
      id: this.nextId++,
      accountNumber: this.generateUniqueAccountNumber(), // Generate unique 8-digit account #
      ...account
    };
    this.accounts.push(newAccount);
  }

  // Generates a unique 8-digit account number
  private generateUniqueAccountNumber(): string {
    let accountNumber: string;

    do {
      accountNumber = Math.floor(10000000 + Math.random() * 90000000).toString();
    } while (this.accounts.some(acc => acc.accountNumber === accountNumber));

    return accountNumber;
  }

  // Returns a shallow copy of all accounts (to avoid external mutations)
  getAccounts(): Account[] {
    return [...this.accounts];
  }

  // Transfers funds between two accounts and logs the transaction
  transferFunds(fromId: number, toId: number, amount: number): string {
    const from = this.accounts.find(acc => acc.id === fromId);
    const to = this.accounts.find(acc => acc.id === toId);

    if (!from || !to) return 'Account not found';
    if (fromId === toId) return 'Cannot transfer to the same account';
    if (from.balance < amount) return 'Insufficient balance';

    from.balance -= amount;
    to.balance += amount;

    // Record the transaction
    this.transactions.push({
      id: this.nextTransactionId++,
      fromId,
      toId,
      amount,
      date: new Date()
    });

    return 'Success';
  }

  // Returns a shallow copy of all transactions
  getTransactions(): Transaction[] {
    return [...this.transactions];
  }
}

// Transaction model interface
export interface Transaction {
  id: number;         // Unique transaction ID
  fromId: number;     // Source account ID
  toId: number;       // Destination account ID
  amount: number;     // Amount transferred
  date: Date;         // Date of transaction
}
