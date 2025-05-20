// Angular core + required modules
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importing data models and service
import { AccountService, Account, Transaction } from '../../services/account.service';

@Component({
  selector: 'app-transaction-history',
  standalone: true, // This is a standalone Angular component
  imports: [CommonModule, FormsModule], // Importing basic Angular modules
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent implements OnInit {
  // Stores all transactions from the service
  transactions: Transaction[] = [];

  // Stores all accounts used for mapping names/numbers
  accounts: Account[] = [];

  // Selected account ID for filtering the transaction history
  selectedAccountId: number = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // Load all transactions and accounts on component load
    this.transactions = this.accountService.getTransactions();
    this.accounts = this.accountService.getAccounts();
  }

  // Getter: Returns transactions filtered by selected account (if any)
  get filteredTransactions(): Transaction[] {
    if (this.selectedAccountId === 0) return this.transactions;
    return this.transactions.filter(
      tx =>
        tx.fromId === this.selectedAccountId ||
        tx.toId === this.selectedAccountId
    );
  }

  // Helper to get just the account name from an account ID
  getAccountName(id: number): string {
    const acc = this.accounts.find(a => a.id === id);
    return acc ? acc.name : 'Unknown';
  }

  // Helper to get full display string: name, type, and account number
  getAccountDisplay(id: number): string {
    const acc = this.accounts.find(a => a.id === id);
    return acc ? `${acc.name} (${acc.type}) - ${acc.accountNumber}` : 'Unknown';
  }
}
