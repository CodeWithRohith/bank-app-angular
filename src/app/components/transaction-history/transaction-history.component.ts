import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService, Account, Transaction } from '../../services/account.service';


@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})

export class TransactionHistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  accounts: Account[] = [];
  selectedAccountId: number = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.transactions = this.accountService.getTransactions();
    this.accounts = this.accountService.getAccounts();
  }

  get filteredTransactions(): Transaction[] {
    if (this.selectedAccountId === 0) return this.transactions;
    return this.transactions.filter(
      tx =>
        tx.fromId === this.selectedAccountId ||
        tx.toId === this.selectedAccountId
    );
  }

  getAccountName(id: number): string {
    const acc = this.accounts.find(a => a.id === id);
    return acc ? acc.name : 'Unknown';
  }
}
