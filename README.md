
# E-commerce Admin Dashboard

An Angular + .NET Core full-stack admin dashboard for managing products, orders, users, and generating business insights.

## 🌐 Live Demo
*To be hosted*

## 📦 Tech Stack

### Frontend
- Angular 19 (standalone components)
- Tailwind CSS
- ng2-charts v4.1.1 (Chart.js wrapper)
- JWT-based authentication

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication & Role-based Access Control

## 📊 Features

- Admin login with JWT auth
- Dashboard with line/bar charts (revenue & sales)
- Sidebar layout with routing
- Role-based access (Admin, Editor)
- Orders, Products CRUD (basic structure)
- Responsive UI with Tailwind
- Placeholder for Excel/CSV export & pagination

## 🧩 Project Structure

```
Frontend (Angular)
│
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── orders/
│   │   └── products/
│   ├── services/
│   ├── guards/
│   └── auth/
│
Backend (ASP.NET Core)
│
├── Controllers/
├── Models/
├── DTOs/
├── Data/
└── Services/
```

## ⚙️ Setup Instructions

### Backend

1. Open in Visual Studio or VS Code
2. Update connection string in `appsettings.json`
3. Run EF migrations:
   ```bash
   dotnet ef database update
   ```
4. Start the API

### Frontend

```bash
cd frontend
npm install
ng serve
```

## 🔐 Authentication

- Login returns a JWT token
- Token is stored in local storage
- AuthInterceptor appends token to API requests
- Role-based route protection using custom guards

## 📈 Charts

- Revenue Chart: Line
- Sales Chart: Bar
- Powered by ng2-charts (Chart.js)

## 📬 API Endpoints (Sample)

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | /api/auth/login  | Admin login           |
| GET    | /api/orders      | Get all orders        |
| POST   | /api/products    | Add new product       |
| PUT    | /api/products/id | Update product        |
| DELETE | /api/products/id | Delete product        |

## 🗂️ Future Enhancements

- Export to CSV/Excel
- Pagination + Sorting
- Notification System
- Detailed reports & filters

## 🔒 Roles

| Role   | Access Areas      |
|--------|-------------------|
| Admin  | Full access       |
| Editor | View + Edit only  |

## 👨‍💻 Author

Built by virender thakur 

## 📄 License

MIT License
