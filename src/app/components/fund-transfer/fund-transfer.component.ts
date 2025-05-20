// Angular core + common modules
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services and shared components
import { AccountService, Account } from '../../services/account.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-fund-transfer',
  standalone: true, // This component is standalone and imports needed modules
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonComponent],
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.scss'
})
export class FundTransferComponent implements OnInit {
  // Form group for transfer form
  transferForm!: FormGroup;

  // List of all existing accounts for the dropdowns
  accounts: Account[] = [];

  // Message shown after submission (success or error)
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // Load the existing accounts from the AccountService
    this.accounts = this.accountService.getAccounts();

    // Initialize the transfer form with default values and validators
    this.transferForm = this.fb.group({
      fromAccount: [null, Validators.required],
      toAccount: [null, Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  // Called when the transfer form is submitted
  onSubmit(): void {
    const { fromAccount, toAccount, amount } = this.transferForm.value;

    // Prevent transferring to the same account
    if (fromAccount === toAccount) {
      this.message = '❌ Cannot transfer to the same account.';
      return;
    }

    // Attempt the fund transfer using the service
    const result = this.accountService.transferFunds(fromAccount, toAccount, amount);

    // Find details of both accounts to show in the message
    const fromAcc = this.accounts.find(acc => acc.id === fromAccount);
    const toAcc = this.accounts.find(acc => acc.id === toAccount);

    // Show appropriate message based on result
    if (result === 'Success' && fromAcc && toAcc) {
      // Use innerHTML to render <strong> tags and display account info clearly
      this.message = `✅ Successfully transferred $${amount} from <strong>${fromAcc.name}</strong> (${fromAcc.accountNumber}) (${fromAcc.type}) to <strong>${toAcc.name}</strong> (${toAcc.accountNumber}) (${toAcc.type})`;

      // Reset form after successful transfer
      this.transferForm.reset();
    } else {
      // Display error returned by service
      this.message = `❌ ${result}`;
    }
  }
}
