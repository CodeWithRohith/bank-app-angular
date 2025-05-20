# 💰 BrainRidge Banking App – Take-Home Assignment

This is a simple banking application built using **Angular** for the BrainRidge Consulting take-home assignment.

Users can:
- Create bank accounts with unique account numbers
- Transfer funds between accounts with validations
- View detailed transaction history
- Navigate seamlessly using Angular Routing
- Experience a polished, responsive UI with Bootstrap
- Benefit from reusable and modular components

---

## 🚀 Features

✅ **Account Creation**  
- Reactive Form with validation (name, balance, account type)  
- Duplicate check: warns if same name + type exists, with option to proceed or cancel  
- Auto-generated unique 8-digit account number  
- Form resets and displays success card after creation  
- Stylized submit button adjusts color based on account type

✅ **Fund Transfer**  
- Transfer funds between any two different accounts  
- Prevents self-transfer and insufficient balance  
- Account details shown in confirmation message: name, type, account number  
- Form resets after success

✅ **Transaction History**  
- View full history of all transfers  
- Shows sender and receiver details with account number and type  
- Filter transactions based on specific account  
- Table is styled, centered, and easy to read

✅ **Reusable Components**  
- Custom `<app-button>` component  
- Accepts `label`, `type`, and `disabled`  
- Used across all forms for consistent design

✅ **Routing**  
- Three-page structure:  
  - `/create-account`  
  - `/transfer`  
  - `/history`

✅ **Bootstrap Styling**  
- CDN-based Bootstrap 5  
- Cards, navbar, alerts, and spacing for a clean responsive UI

---

## 🧩 Tech Stack

- [Angular 17+](https://angular.io/)
- TypeScript
- Bootstrap 5 (CDN)
- RxJS & Reactive Forms
- Standalone Components
- HTML5 + SCSS

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
# 1. Clone the repo
git clone https://github.com/CodeWithRohith/bank-app.git
cd angular-banking-app

# 2. Install dependencies
npm install

# 3. Start the development server
ng serve
```

Open your browser and visit:
📍 http://localhost:4200

---

## 🔖 Screenshots

## Create Account

![image](https://github.com/user-attachments/assets/6e93c29e-e9ce-4f7b-8eae-b2f0234a8092)

### Create Account: Validation Error

![image](https://github.com/user-attachments/assets/d5d79b7a-ec0b-4970-a2b7-1682dd77c2ea)

### Create Account: Creating New Chequing Account (Blue Button)

![image](https://github.com/user-attachments/assets/c506da07-ad33-4cd5-851d-85db5a02174a)

### Create Account: Account Created

![image](https://github.com/user-attachments/assets/94634711-99a3-47b9-9576-1953b8e3a118)

### Create Account: Creating New Savings Account (Green Button)

![image](https://github.com/user-attachments/assets/cd49d69a-b091-4692-9d3a-1109572b8804)

### Create Account: Prompt asking, account for a different user (Name + Account Type, match)

![image](https://github.com/user-attachments/assets/330454fb-9ba1-428a-a928-8938f85e30b7)

## Transfer Funds

![image](https://github.com/user-attachments/assets/fa9c6ff2-6221-4ec9-b634-917285bd76e4)

### Transfer Funds: Select Account from Drop-Down

![image](https://github.com/user-attachments/assets/5da4015b-651d-48c4-8acb-0edafa4a333d)

### Transfer Funds: Same Account, Failed

![image](https://github.com/user-attachments/assets/e173fbc8-2473-4e7d-b938-75f026e2a85f)

### Transfer Funds: Transfer Success

![image](https://github.com/user-attachments/assets/2fb9332f-9917-4d54-85f1-23edda9a8c9b)

## Transaction History

![image](https://github.com/user-attachments/assets/8a5e2d7e-4c73-42ae-8660-b2ce0fe842a9)

### Transaction History: Filter Transcation based on Account

![image](https://github.com/user-attachments/assets/7d6402f3-dad0-4282-a2c2-768cfc14b853)

### Transaction History: Filtered based on the selected Account

![image](https://github.com/user-attachments/assets/49f59d93-f00e-4e63-be5e-014045dba839)


## 📌 Notes
- This project is built using Angular 17+ with standalone components

- Styling is done using Bootstrap 5 via CDN (linked in src/index.html)

- No backend or database is used — data is stored temporarily in memory using Angular services

- Duplicate name + type accounts prompt user confirmation

- Account numbers are auto-generated and uniquely identify each account

- This project demonstrates clean component-based structure and real-world form validation patterns

## 📬 Author
Rohith Kumar Saravanan


