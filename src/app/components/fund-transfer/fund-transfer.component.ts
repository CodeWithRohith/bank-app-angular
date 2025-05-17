import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AccountService, Account } from '../../services/account.service';


@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.scss'
})
export class FundTransferComponent implements OnInit {
  transferForm!: FormGroup;
  accounts: Account[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();

    this.transferForm = this.fb.group({
      fromAccount: [null, Validators.required],
      toAccount: [null, Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    const { fromAccount, toAccount, amount } = this.transferForm.value;

    if (fromAccount === toAccount) {
      this.message = '❌ Cannot transfer to the same account.';
      return;
    }

    const result = this.accountService.transferFunds(fromAccount, toAccount, amount);
    if (result === 'Success') {
      this.message = `✅ Successfully transferred $${amount} from Account ${fromAccount} to ${toAccount}`;
      this.transferForm.reset();
    } else {
      this.message = `❌ ${result}`;
    }
  }
}
