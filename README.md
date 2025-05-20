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


```bash
1. Clone the repo

git clone https://github.com/CodeWithRohith/bank-app.git
cd angular-banking-app

2. Install dependencies

npm install

3. Run the development server

ng serve

```

Open your browser and visit:
📍 http://localhost:4200

🔖 Screenshots

## Create New Account
![image](https://github.com/user-attachments/assets/76288e8e-36d8-4ed0-be1c-2ba9dfceb75a)

### Create New Account: Validation Error

![image](https://github.com/user-attachments/assets/003a7be4-2141-4c02-add7-d5bc800d828c)

### Create New Account: Create Button Enabled after the all the fields are filled correctly

![image](https://github.com/user-attachments/assets/e123c746-c80b-4999-a09e-eff3f5d8a206)

### Create New Account: Account Created

![image](https://github.com/user-attachments/assets/7a9f296e-5fe4-461b-9776-e14036571034)

## Transfer Funds

![image](https://github.com/user-attachments/assets/0304f36c-9695-4903-9172-2b8c005cb9de)

### Transfer Funds: Drop-Down to choose the Account

![image](https://github.com/user-attachments/assets/7434bd12-bbb6-4a40-9537-64dc4fd91d0e)

### Transfer Funds: Failed (Trying to Transfer Funds between Same Account)

![image](https://github.com/user-attachments/assets/67de614f-c219-4a52-8dfc-c42554df92d0)

### Transfer Funds: Sucess

![image](https://github.com/user-attachments/assets/fd7410e1-bd6a-4fbd-8fba-1383e396e00d)

## Transaction History

![image](https://github.com/user-attachments/assets/08e8e689-80a4-4708-a2b5-0978e26c6c28)

### Transaction History: Option to Filter Based on Account

![image](https://github.com/user-attachments/assets/b09c72d7-01d4-4485-b67d-02b8cc6d8b07)

### Transaction History: Filtered by John (Chequing)

![image](https://github.com/user-attachments/assets/0bdc25ae-c47e-42e4-b00a-6381d22d1e73)


## 📌 Notes

- This project is built using Angular 17+ with standalone components
- Styling is done using Bootstrap 5 via CDN (linked in `src/index.html`)
- No backend or database is used — data is stored temporarily in memory using Angular services
- This project is intended as a demonstration of frontend architecture, modular design, and UI best practices

---

## 📬 Author

**Rohith Kumar Saravanan**    


