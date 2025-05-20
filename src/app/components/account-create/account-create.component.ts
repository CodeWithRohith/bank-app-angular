// Angular core imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Service and shared component imports
import { AccountService, Account } from '../../services/account.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-account-create',
  standalone: true, // This component is a standalone Angular component
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent], // Required modules and shared button
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.scss'
})
export class AccountCreateComponent implements OnInit {
  // Stores the last created account info to display confirmation on the UI
  lastCreatedAccount: { name: string; balance: number; type: string; accountNumber: string } | null = null;

  // Reactive form instance for account creation
  accountForm!: FormGroup;

  // Local cache of all created accounts (used for validation)
  accounts: Account[] = [];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // Initialize the form with validators
    this.accountForm = this.fb.group({
      accountName: ['', [Validators.required, Validators.minLength(3)]],
      initialBalance: [0, [Validators.required, Validators.min(1)]],
      accountType: ['', Validators.required]
    });
  }

  // Called when the form is submitted
  onSubmit(): void {
    if (this.accountForm.valid) {
      // Trim and extract values from the form
      const accountName = this.accountForm.value.accountName.trim();
      const initialBalance = this.accountForm.value.initialBalance;
      const accountType = this.accountForm.value.accountType;

      // Get the latest list of existing accounts
      this.accounts = this.accountService.getAccounts();

      // Check for a duplicate account (same name and type)
      const isDuplicate = this.accounts.some(
        (a: Account) => a.name === accountName && a.type === accountType
      );

      // If duplicate is found, prompt user to confirm if it's a different person
      if (isDuplicate) {
        const proceed = window.confirm(
          `⚠️ An account named "${accountName}" with type "${accountType}" already exists.\n\n` +
          `Is this a different user with the same name?\n\nClick OK to proceed or Cancel to abort.`
        );

        if (!proceed) {
          return; // Stop if the user cancels
        }
      }

      // Add the new account to the service
      this.accountService.addAccount({
        name: accountName,
        balance: initialBalance,
        type: accountType
      });

      // Fetch the latest account (just added) to display confirmation
      const accounts = this.accountService.getAccounts();
      const lastAccount = accounts[accounts.length - 1];

      this.lastCreatedAccount = {
        name: lastAccount.name,
        balance: lastAccount.balance,
        type: lastAccount.type,
        accountNumber: lastAccount.accountNumber
      };

      console.log('✅ Account Created:', this.accountForm.value);

      // Reset the form after submission
      this.accountForm.reset();
    }
  }

  // Helper getter to dynamically update the account type for the button styling
  get accountType() {
    return this.accountForm.get('accountType')?.value;
  }
}
