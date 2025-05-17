import { Routes } from '@angular/router';
import { AccountCreateComponent } from './components/account-create/account-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'create-account', pathMatch: 'full' },
  { path: 'create-account', component: AccountCreateComponent }
];
