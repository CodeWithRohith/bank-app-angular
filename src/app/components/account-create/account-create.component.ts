import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { ButtonComponent } from '../../shared/button/button.component';


@Component({
  selector: 'app-account-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.scss'
})
export class AccountCreateComponent  implements OnInit {
  lastCreatedAccount: { name: string; balance: number; type: string } | null = null;


  accountForm!: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountName: ['', [Validators.required, Validators.minLength(3)]],
      initialBalance: [0, [Validators.required, Validators.min(1)]],
      accountType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const { accountName, initialBalance, accountType } = this.accountForm.value;

      this.accountService.addAccount({
        name: accountName,
        balance: initialBalance,
        type: accountType
      });

      this.lastCreatedAccount = {
        name: accountName,
        balance: initialBalance,
        type: accountType
      };

      console.log('✅ Account Created:', this.accountForm.value);
      this.accountForm.reset();
    }
  }



  get accountType() {
    return this.accountForm.get('accountType')?.value;
  }

}
