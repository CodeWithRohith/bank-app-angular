# 💰 BrainRidge Banking App – Take-Home Assignment

This is a simple banking application built using **Angular** for the BrainRidge Consulting take-home assignment.

Users can:
- Create bank accounts
- Transfer funds between accounts
- View transaction history
- Navigate using a clean UI built with Bootstrap
- Reuse components and maintain a modular codebase

---

## 🚀 Features

✅ **Account Creation**  
- Reactive Form with validation (name, balance, account type)  
- Submit button styled conditionally (based on account type)

✅ **Fund Transfer**  
- Dropdowns populated with created accounts  
- Transfer validation: no self-transfer, sufficient balance required  
- Styled success/failure message with account names/types

✅ **Transaction History**  
- View a complete table of all transfers  
- Shows From, To, Amount, and Timestamp  
- Filter by specific account

✅ **Reusable Components**  
- Custom `<app-button>` component  
- Accepts `label`, `type`, and `disabled` props

✅ **Routing**  
- Three views: `/create-account`, `/transfer`, and `/history`

✅ **Bootstrap Styling**  
- Responsive layout with navbar, cards, alerts, and table design

---

## 🧩 Tech Stack

- [Angular 17+](https://angular.io/)
- TypeScript
- Bootstrap 5 (CDN)
- RxJS & Reactive Forms
- Standalone Components

---

## 📁 Folder Structure (Simplified)

src/
├── app/

│ ├── components/

│ │ ├── account-create/

│ │ ├── fund-transfer/

│ │ ├── transaction-history/

│ ├── shared/

│ │ └── button/ # Reusable button component

│ ├── services/

│ │ └── account.service.ts

│ ├── app.routes.ts

│ ├── app.config.ts


---

## 🛠️ How to Run the Project

### 1. Clone the repo
```bash
git clone https://github.com/your-username/angular-banking-app.git
cd angular-banking-app


