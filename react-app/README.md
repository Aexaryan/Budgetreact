# 🏆 Limited Edge Budget - React Application

A modern, professional React application for comprehensive project management and accounting system.

## 🚀 **Quick Start**

### **1. Install Dependencies**
```bash
cd react-app
npm install
```

### **2. Start Development Server**
```bash
npm start
```

### **3. Start Backend Server**
```bash
cd ../backend
npm install
npm start
```

### **4. Access Application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 📁 **Project Structure**

```
LimitedEdgeBudget/
├── 📁 react-app/                    # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 components/           # Reusable components
│   │   │   └── 📄 Navbar.tsx        # Navigation component
│   │   ├── 📁 pages/                # Page components
│   │   │   ├── 📄 HomePage.tsx      # Main landing page
│   │   │   ├── 📄 BudgetOverview.tsx # Budget breakdown
│   │   │   ├── 📄 AccountingSystem.tsx # Accounting system
│   │   │   ├── 📄 TheChallenge.tsx  # Challenge details
│   │   │   └── 📄 OtherPages.tsx    # Additional pages
│   │   ├── 📁 services/              # API services
│   │   │   └── 📄 apiService.ts     # MongoDB API integration
│   │   ├── 📄 App.tsx               # Main app component
│   │   ├── 📄 index.tsx             # App entry point
│   │   └── 📄 index.css             # Global styles
│   ├── 📁 public/
│   │   ├── 📁 images/               # All media files
│   │   └── 📄 index.html            # HTML template
│   ├── 📄 package.json              # Dependencies
│   └── 📄 tailwind.config.js        # Tailwind configuration
├── 📁 backend/                      # Express.js Backend
│   ├── 📄 server.js                 # Express server
│   └── 📄 package.json              # Backend dependencies
└── 📁 docs/                         # Documentation
```

## 🎨 **Features**

### **✨ Modern React Architecture**
- **TypeScript** for type safety
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hot Toast** for notifications

### **🔐 Accounting System**
- **Password Protection** (admin123)
- **Expense Management** with sub-categories
- **Invoice Creation** for sponsors/investors
- **Real-time Budget Tracking**
- **MongoDB Integration**

### **📊 Budget Management**
- **Detailed Budget Breakdown** by phases
- **Sub-category Tracking** for precise control
- **Progress Visualization** with charts
- **Real-time Updates**

### **🎯 Professional UI/UX**
- **Responsive Design** for all devices
- **Modern Animations** and transitions
- **Intuitive Navigation** with breadcrumbs
- **Professional Color Scheme**

## 🛠️ **Technology Stack**

### **Frontend**
- **React 18** with TypeScript
- **React Router DOM** for routing
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API calls
- **React Hot Toast** for notifications

### **Backend**
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **CORS** for cross-origin requests
- **RESTful API** design

### **Database**
- **MongoDB Atlas** cloud database
- **Collections**: expenses, invoices
- **Real-time synchronization**

## 📋 **Available Pages**

1. **🏠 Home Page** - Project overview and navigation
2. **💰 Budget Overview** - Complete budget breakdown
3. **🔐 Accounting System** - Expense and invoice management
4. **🎯 The Challenge** - Challenge details and rules
5. **💼 Investor Benefits** - Investment opportunities
6. **🎬 Pre-Production** - Planning phase details
7. **🎥 Production** - Main filming phase
8. **✂️ Post-Production** - Editing and final delivery
9. **📢 Marketing** - Promotion strategy
10. **🛡️ Contingency** - Risk management
11. **👥 Participant Requirements** - Eligibility criteria

## 🔧 **Development Commands**

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

## 🗄️ **Database Schema**

### **Expenses Collection**
```typescript
{
  description: string;
  amount: number;
  category: string;
  subCategory: string;
  date: Date;
  vendor?: string;
  receipt?: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}
```

### **Invoices Collection**
```typescript
{
  invoiceNumber: string;
  type: 'sponsorship' | 'investment' | 'advertising' | 'other';
  clientName: string;
  contactPerson?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientAddress?: string;
  amount: number;
  currency: string;
  paymentTerms?: string;
  customTerms?: string;
  description?: string;
  dueDate?: Date;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  notes?: string;
}
```

## 🎨 **Styling System**

### **Tailwind CSS Classes**
- **Gradients**: `gradient-bg`, `text-gradient`
- **Buttons**: `btn-primary`, `btn-secondary`
- **Cards**: `card`
- **Animations**: `animate-fade-in`, `animate-slide-up`

### **Color Palette**
- **Primary**: Blue gradients (#0ea5e9 to #0369a1)
- **Secondary**: Yellow gradients (#eab308 to #ca8a04)
- **Accent**: Purple gradients (#8b5cf6 to #7c3aed)

## 🔒 **Security Features**

- **Password Protection** for accounting system
- **Session Management** with sessionStorage
- **Input Validation** on all forms
- **Error Handling** with user-friendly messages

## 📱 **Responsive Design**

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grid** system
- **Touch-friendly** interface

## 🚀 **Deployment**

### **Frontend (React)**
```bash
cd react-app
npm run build
# Deploy build folder to hosting service
```

### **Backend (Express)**
```bash
cd backend
npm start
# Deploy to cloud service (Heroku, Vercel, etc.)
```

## 🔧 **Environment Variables**

Create `.env` file in react-app directory:
```
REACT_APP_API_URL=http://localhost:3001/api
```

## 📊 **Performance Features**

- **Code Splitting** with React.lazy
- **Optimized Images** in public/images
- **Efficient State Management**
- **Minimal Bundle Size**

## 🎯 **Next Steps**

1. **Add Authentication** system
2. **Implement User Roles** (admin, viewer)
3. **Add Data Export** functionality
4. **Create Dashboard** analytics
5. **Add Real-time** notifications
6. **Implement Caching** strategy

## 🆘 **Troubleshooting**

### **Common Issues**

1. **Port Conflicts**: Change ports in package.json
2. **MongoDB Connection**: Check connection string
3. **CORS Errors**: Verify backend CORS settings
4. **Build Errors**: Clear node_modules and reinstall

### **Support**

For issues or questions:
1. Check browser console for errors
2. Verify backend server is running
3. Check MongoDB connection status
4. Review API endpoints

---

**🎉 Your React application is ready for production!**
