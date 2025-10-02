# Limited Edge Budget - Accounting System

A comprehensive accounting system for the Limited Edge Budget project with MongoDB integration.

## Features

- **Password-Protected Access**: Secure login system
- **Expense Management**: Track expenses with detailed sub-categories
- **Invoice Management**: Create and manage invoices for sponsors and investors
- **Budget Tracking**: Real-time budget monitoring with progress bars
- **MongoDB Integration**: All data stored in MongoDB Atlas
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

### 3. Access the Application

Open your browser and go to: `http://localhost:3000`

### 4. Login Credentials

- **Password**: `admin123` (you can change this in the HTML file)

## Database Structure

### MongoDB Database: `LimitedEdgeBudget`

#### Collections:

**expenses**
- `description`: String (required)
- `amount`: Number (required)
- `category`: String (required) - pre-production, production, post-production, marketing, contingency, prize-fund
- `subCategory`: String (required) - detailed sub-category
- `date`: Date (required)
- `vendor`: String
- `receipt`: String
- `status`: String - pending, approved, rejected
- `notes`: String
- `createdAt`: Date
- `updatedAt`: Date

**invoices**
- `invoiceNumber`: String (required, unique)
- `type`: String (required) - sponsorship, investment, advertising, other
- `clientName`: String (required)
- `contactPerson`: String
- `clientEmail`: String
- `clientPhone`: String
- `clientAddress`: String
- `amount`: Number (required)
- `currency`: String (default: USD)
- `paymentTerms`: String
- `customTerms`: String
- `description`: String
- `dueDate`: Date
- `status`: String - draft, sent, paid, overdue, cancelled
- `notes`: String
- `createdAt`: Date
- `updatedAt`: Date

## API Endpoints

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Invoices
- `GET /api/invoices` - Get all invoices
- `POST /api/invoices` - Create new invoice
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice

### Budget Summary
- `GET /api/budget-summary` - Get budget summary with category breakdowns

## Budget Categories and Sub-Categories

### Pre-Production ($33,000)
- Set & Obstacle Design ($12,000)
- Travel ($7,000)
- Marketing Prep ($7,000)
- Pre-Shoot Planning ($5,000)
- Casting & Selection ($2,000)

### Production ($191,000)
- Crew Salaries ($57,000)
- Competitor Fees ($29,000)
- Host Fees ($29,000)
- Accommodation ($28,000)
- Equipment Rental ($23,100)
- Transportation ($15,500)
- Catering & Food ($15,500)
- Wardrobe & Branding ($10,000)
- Insurance & Permits ($7,000)
- Misc. On-Site Costs ($6,000)

### Post-Production ($54,600)
- Editing ($30,000)
- Sound Mixing & Music ($8,000)
- Color Grading ($7,000)
- Motion Graphics & Branding ($6,000)
- Final Mastering & Delivery ($3,600)

### Marketing ($33,600)
- PR & Media Buys ($15,000)
- Trailer Production & Online Ads ($10,600)
- Social Media Campaigns ($8,000)

### Contingency ($50,400)
- Emergency & Unforeseen Costs
- Risk Mitigation
- Insurance Claim Deductibles
- Currency Fluctuation
- Vendor & Supplier Issues
- Technology & Software Updates

### Prize Fund ($10,000)
- Winner Prize Money
- Runner-up Prizes
- Special Awards

## Troubleshooting

### Sub-Category Assignment Not Working
1. Open browser console (F12)
2. Check for error messages
3. Click "Refresh Sub-Categories" button
4. Ensure a category is selected first

### MongoDB Connection Issues
1. Check your internet connection
2. Verify MongoDB Atlas credentials
3. Check server console for connection errors

### Data Not Saving
1. Check browser console for API errors
2. Verify server is running
3. Check MongoDB connection status

## Security Notes

- Change the default password in production
- Consider adding user authentication
- Implement proper CORS policies for production
- Use environment variables for sensitive data

## Development

To modify the application:

1. **Frontend**: Edit `accounting-system.html`
2. **Backend**: Edit `server.js`
3. **Database**: Modify schemas in `server.js`

## Support

For issues or questions, check the browser console for error messages and server logs for backend issues.