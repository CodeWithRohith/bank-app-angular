# 💰 BrainRidge Banking App – Take-Home Assignment

## Overview
The BrainRidge Banking App is a sleek and modern banking interface built as a take-home assignment for BrainRidge Consulting. Developed with **Angular 17+**, this application empowers users to create bank accounts, perform secure fund transfers, and track comprehensive transaction histories—all within a clean, responsive, and intuitive interface.

---

## 🚀 Features

### Account Creation
- **Reactive Forms:** Validate input fields (name, balance, account type) in real time.
- **Unique Account Numbers:** Auto-generate a distinct 8-digit number for every new account.
- **Duplicate Check:** Notifies users if an account with the same name and type already exists, allowing them to confirm or cancel the creation.
- **Visual Feedback:** Resets the form and displays a success card after account creation.
- **Dynamic Styling:** Adjusts the submit button's color based on the selected account type.

### Fund Transfer
- **Seamless Transactions:** Easily transfer funds between two distinct accounts.
- **Robust Validations:** Prevents self-transfers and checks for sufficient account balance.
- **Detailed Confirmation:** Displays sender and receiver details including account names, types, and unique numbers.
- **Automatic Reset:** Resets the form promptly after a successful transfer.

### Transaction History
- **Comprehensive Log:** View the full history of all fund transfers.
- **Intuitive Filtering:** Filter transactions by specific accounts to quickly locate relevant records.
- **Clean Design:** A styled, centered table offers a clear and easy-to-read presentation of past transactions.

### Reusable Components
- **Custom `<app-button>`:** A consistent, reusable button component accepting dynamic labels, types, and disabled states for uniform design throughout the app.

### Routing & UI
- **Intuitive Navigation:** Organized into three primary routes:
  - `/create-account`
  - `/transfer`
  - `/history`
- **Bootstrap Styling:** Utilizes Bootstrap 5 (via CDN) for a responsive UI featuring polished cards, navigation bars, and alerts.

---

## 🧩 Tech Stack

- **Angular 17+** — [Angular Official Website](https://angular.io/)
- **TypeScript**
- **Bootstrap 5** (CDN-based)
- **RxJS & Reactive Forms**
- **Standalone Components**
- **HTML5 & SCSS**

---

## 📁 Folder Structure
![image](https://github.com/user-attachments/assets/bf7105f0-cdef-48da-af39-b5a2a2bcb94a)


---

## 🛠️ How to Run the Project

```bash
# 1. Clone the repository
git clone https://github.com/CodeWithRohith/bank-app.git
cd angular-banking-app

# 2. Install dependencies
npm install

# 3. Start the development server
ng serve
```

Open your browser and navigate to: http://localhost:4200

## 🔖 Screenshots

### Create Account

![image](https://github.com/user-attachments/assets/4a5cc888-388b-41f2-8517-523ed575461d)

Validation Error

![image](https://github.com/user-attachments/assets/0f4b334a-365d-47b8-ae32-ad4d4cd32a70)

Chequing Account – Blue Button

![image](https://github.com/user-attachments/assets/19ea8e29-33d9-44e7-aafa-8246cf4a8b3d)

Account Created

![image](https://github.com/user-attachments/assets/1e63ef5b-6ec3-4762-b578-0f2e280b8838)

Savings Account – Green Button

![image](https://github.com/user-attachments/assets/a8780dc7-befa-4111-874f-52d1c74ea67b)

Duplicate Warning Prompt

![image](https://github.com/user-attachments/assets/5c7a0389-784b-40e8-9b64-a6715c13a87e)

Transfer Funds

![image](https://github.com/user-attachments/assets/a5c7bed6-e100-46dd-9271-caf9ac3174d1)

Select Account Dropdown

![image](https://github.com/user-attachments/assets/f2fc5138-f08c-457b-97a6-a6405d0cd53f)

Failed Transfer – Same Account

![image](https://github.com/user-attachments/assets/860ef437-f09e-45b9-8377-44b2346fffe7)

Successful Transfer

![image](https://github.com/user-attachments/assets/84f0c8b3-d1c6-4b6d-a165-a1ac4099e171)

Transaction History

![image](https://github.com/user-attachments/assets/f20f6573-0f9e-4e11-b0ee-4408a9b5c28b)

Filter by Account

![image](https://github.com/user-attachments/assets/6c77ecdd-c89b-4499-b7dd-d276c5329681)

Filtered View

![image](https://github.com/user-attachments/assets/8105393f-7379-41ff-ac81-c82aa540a97d)

## 📌 Notes

- Angular 17+ with standalone components
- Bootstrap 5 for responsive UI (CDN included in index.html)
- Data is stored in-memory via Angular Services (no backend/database)
- Validation includes duplicate name + account type check
- Unique 8-digit account numbers for each account
- Project showcases modular architecture and real-world form validation techniques

## 👨‍💻 Author

### Rohith Kumar Saravanan - (https://codewithrohith.github.io/)




