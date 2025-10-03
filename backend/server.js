const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://alexanderaryanfar:LiJm9FsYwJMxDdU@cluster2.akri9.mongodb.net/LimitedEdgeBudget?retryWrites=true&w=majority&appName=Cluster2';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Common schema options for transform
const schemaOptions = {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
        }
    },
    toObject: {
        transform(doc, ret) {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
        }
    }
};

// Database Schema
const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    date: { type: Date, required: true },
    vendor: String,
    receipt: String,
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    notes: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, schemaOptions);

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: { type: String, required: true, unique: true },
    type: { type: String, enum: ['sponsorship', 'investment', 'advertising', 'other'], required: true },
    clientName: { type: String, required: true },
    contactPerson: String,
    clientEmail: String,
    clientPhone: String,
    clientAddress: String,
    amount: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    paymentTerms: String,
    customTerms: String,
    description: String,
    dueDate: Date,
    status: { type: String, enum: ['draft', 'sent', 'paid', 'overdue', 'cancelled'], default: 'draft' },
    notes: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, schemaOptions);

const Expense = mongoose.model('Expense', expenseSchema);
const Invoice = mongoose.model('Invoice', invoiceSchema);

// API Routes

// Login
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    // IMPORTANT: In a production environment, use environment variables for sensitive data.
    const correctPassword = process.env.ACCOUNTING_PASSWORD;

    if (correctPassword && password === correctPassword) {
        res.status(200).json({ message: 'Authentication successful' });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

// Get all expenses
app.get('/api/expenses', async (req, res) => {
    try {
        console.log('GET /api/expenses - Request received');
        const expenses = await Expense.find().sort({ createdAt: -1 });
        console.log('GET /api/expenses - Found', expenses.length, 'expenses');
        res.json(expenses);
    } catch (error) {
        console.error('GET /api/expenses - Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Create new expense
app.post('/api/expenses', async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update expense
app.put('/api/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete expense
app.delete('/api/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all invoices
app.get('/api/invoices', async (req, res) => {
    try {
        const invoices = await Invoice.find().sort({ createdAt: -1 });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new invoice
app.post('/api/invoices', async (req, res) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update invoice
app.put('/api/invoices/:id', async (req, res) => {
    try {
        const invoice = await Invoice.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete invoice
app.delete('/api/invoices/:id', async (req, res) => {
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get budget summary
app.get('/api/budget-summary', async (req, res) => {
    try {
        const expenses = await Expense.find({ status: 'approved' });
        
        const summary = {
            totalSpent: expenses.reduce((sum, expense) => sum + expense.amount, 0),
            categoryBreakdown: {},
            subCategoryBreakdown: {}
        };

        expenses.forEach(expense => {
            // Category breakdown
            if (!summary.categoryBreakdown[expense.category]) {
                summary.categoryBreakdown[expense.category] = 0;
            }
            summary.categoryBreakdown[expense.category] += expense.amount;

            // Sub-category breakdown
            if (!summary.subCategoryBreakdown[expense.subCategory]) {
                summary.subCategoryBreakdown[expense.subCategory] = 0;
            }
            summary.subCategoryBreakdown[expense.subCategory] += expense.amount;
        });

        res.json(summary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve static files for React app
app.use(express.static(path.join(__dirname, '../react-app/build')));

// Serve React app for all non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../react-app/build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});