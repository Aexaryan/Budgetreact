import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { apiService } from '../services/apiService.ts';

interface Expense {
  _id?: string;
  description: string;
  amount: number;
  category: string;
  subCategory: string;
  date: string;
  vendor?: string;
  receipt?: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

interface Invoice {
  _id?: string;
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
  dueDate?: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  notes?: string;
}

const AccountingSystem: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [activeTab, setActiveTab] = useState<'expenses' | 'invoices' | 'reports'>('expenses');
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [reportType, setReportType] = useState<'summary' | 'detailed' | 'category'>('summary');
  const [dateRange, setDateRange] = useState<'all' | 'month' | 'quarter' | 'year'>('all');

  // Generate unique invoice number
  const generateUniqueInvoiceNumber = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const timestamp = now.getTime().toString().slice(-6);
    const baseNumber = `INV-${year}${month}${day}-${timestamp}`;
    
    // Check if this number already exists
    const existingNumbers = invoices.map(inv => inv.invoiceNumber);
    let finalNumber = baseNumber;
    let counter = 1;
    
    while (existingNumbers.includes(finalNumber)) {
      finalNumber = `${baseNumber}-${counter}`;
      counter++;
    }
    
    return finalNumber;
  };

  const subCategories = {
    'pre-production': {
      'set-obstacle-design': 'Set & Obstacle Design ($12,000)',
      'travel': 'Travel ($7,000)',
      'marketing-prep': 'Marketing Prep ($7,000)',
      'pre-shoot-planning': 'Pre-Shoot Planning ($5,000)',
      'casting-selection': 'Casting & Selection ($2,000)'
    },
    'production': {
      'crew-salaries': 'Crew Salaries ($57,000)',
      'competitor-fees': 'Competitor Fees ($29,000)',
      'host-fees': 'Host Fees ($29,000)',
      'accommodation': 'Accommodation ($28,000)',
      'equipment-rental': 'Equipment Rental ($23,100)',
      'transportation': 'Transportation ($15,500)',
      'catering-food': 'Catering & Food ($15,500)',
      'wardrobe-branding': 'Wardrobe & Branding ($10,000)',
      'insurance-permits': 'Insurance & Permits ($7,000)',
      'misc-onsite': 'Misc. On-Site Costs ($6,000)'
    },
    'post-production': {
      'editing': 'Editing ($30,000)',
      'sound-mixing-music': 'Sound Mixing & Music ($8,000)',
      'color-grading': 'Color Grading ($7,000)',
      'motion-graphics-branding': 'Motion Graphics & Branding ($6,000)',
      'final-mastering-delivery': 'Final Mastering & Delivery ($3,600)'
    },
    'marketing': {
      'pr-media-buys': 'PR & Media Buys ($15,000)',
      'trailer-production-ads': 'Trailer Production & Online Ads ($10,600)',
      'social-media-campaigns': 'Social Media Campaigns ($8,000)'
    },
    'contingency': {
      'emergency-unforeseen': 'Emergency & Unforeseen Costs',
      'risk-mitigation': 'Risk Mitigation',
      'insurance-deductibles': 'Insurance Claim Deductibles'
    },
    'prize-fund': {
      'winner-prize': 'Winner Prize Money',
      'runner-up-prizes': 'Runner-up Prizes',
      'special-awards': 'Special Awards'
    }
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      const [expensesData, invoicesData] = await Promise.all([
        apiService.getExpenses(),
        apiService.getInvoices()
      ]);
      setExpenses(expensesData);
      setInvoices(invoicesData);
    } catch (error) {
      toast.error('Failed to load data');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'LimitEdge2024!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('authenticated', 'true');
      loadData();
      toast.success('Login successful!');
    } else {
      toast.error('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('authenticated');
    setPassword('');
    toast.success('Logged out successfully');
  };

  // Export and Print Functions
  const exportToCSV = (data: any[], filename: string) => {
    const headers = Object.keys(data[0] || {});
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
    toast.success(`${filename} exported successfully!`);
  };

  const exportToPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const reportContent = generateReportContent();
    printWindow.document.write(`
      <html>
        <head>
          <title>Limit Edge Budget Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: bold; color: #2B2E4A; }
            .report-title { font-size: 20px; margin: 10px 0; }
            .report-date { color: #666; }
            .section { margin: 20px 0; }
            .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; color: #5D6D93; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; font-weight: bold; }
            .total { font-weight: bold; background-color: #f9f9f9; }
            .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0; }
            .summary-card { border: 1px solid #ddd; padding: 15px; text-align: center; }
            .summary-value { font-size: 24px; font-weight: bold; color: #5D6D93; }
            .summary-label { color: #666; margin-top: 5px; }
          </style>
        </head>
        <body>
          ${reportContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const generateReportContent = () => {
    const now = new Date();
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const approvedExpenses = expenses.filter(e => e.status === 'approved').reduce((sum, exp) => sum + exp.amount, 0);
    const pendingExpenses = expenses.filter(e => e.status === 'pending').reduce((sum, exp) => sum + exp.amount, 0);
    const totalInvoices = invoices.reduce((sum, inv) => sum + inv.amount, 0);
    const paidInvoices = invoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);

    return `
      <div class="header">
        <div class="logo">LIMIT EDGE</div>
        <div class="report-title">PERSIAN SPORTS REALITY SHOW</div>
        <div class="report-title">Financial Report</div>
        <div class="report-date">Generated: ${now.toLocaleDateString()}</div>
      </div>

      <div class="section">
        <div class="section-title">Financial Summary</div>
        <div class="summary-grid">
          <div class="summary-card">
            <div class="summary-value">$${totalExpenses.toLocaleString()}</div>
            <div class="summary-label">Total Expenses</div>
          </div>
          <div class="summary-card">
            <div class="summary-value">$${approvedExpenses.toLocaleString()}</div>
            <div class="summary-label">Approved Expenses</div>
          </div>
          <div class="summary-card">
            <div class="summary-value">$${pendingExpenses.toLocaleString()}</div>
            <div class="summary-label">Pending Expenses</div>
          </div>
          <div class="summary-card">
            <div class="summary-value">$${totalInvoices.toLocaleString()}</div>
            <div class="summary-label">Total Invoices</div>
          </div>
          <div class="summary-card">
            <div class="summary-value">$${paidInvoices.toLocaleString()}</div>
            <div class="summary-label">Paid Invoices</div>
          </div>
          <div class="summary-card">
            <div class="summary-value">$${(paidInvoices - approvedExpenses).toLocaleString()}</div>
            <div class="summary-label">Net Cash Flow</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Expenses by Category</div>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${expenses.map(exp => `
              <tr>
                <td>${exp.category}</td>
                <td>${exp.subCategory}</td>
                <td>$${exp.amount.toLocaleString()}</td>
                <td>${exp.status}</td>
              </tr>
            `).join('')}
            <tr class="total">
              <td colspan="2">Total</td>
              <td>$${totalExpenses.toLocaleString()}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="section-title">Invoice Summary</div>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${invoices.map(inv => `
              <tr>
                <td>${inv.invoiceNumber}</td>
                <td>${inv.clientName}</td>
                <td>${inv.type}</td>
                <td>$${inv.amount.toLocaleString()}</td>
                <td>${inv.status}</td>
              </tr>
            `).join('')}
            <tr class="total">
              <td colspan="3">Total</td>
              <td>$${totalInvoices.toLocaleString()}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  };

  const printReport = () => {
    exportToPDF();
  };

  // Invoice Export and Print Functions
  const exportInvoiceToPDF = (invoice: Invoice) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const invoiceContent = generateInvoiceContent(invoice);
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice ${invoice.invoiceNumber}</title>
          <meta charset="utf-8">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              margin: 0; 
              padding: 0; 
              background: white;
              color: #333;
              font-size: 14px;
              line-height: 1.4;
            }
            
            .invoice-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 0;
            }
            
            .invoice-header {
              background: linear-gradient(135deg, #2B2E4A 0%, #5D6D93 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            
            .logo {
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 10px;
              letter-spacing: 2px;
            }
            
            .company-name {
              font-size: 18px;
              opacity: 0.9;
              margin-bottom: 5px;
            }
            
            .company-tagline {
              font-size: 14px;
              opacity: 0.8;
              margin-bottom: 15px;
            }
            
            .company-address {
              font-size: 12px;
              opacity: 0.9;
              line-height: 1.4;
            }
            
            .company-address p {
              margin: 2px 0;
            }
            
            .invoice-details {
              padding: 30px;
            }
            
            .invoice-title {
              font-size: 28px;
              font-weight: bold;
              color: #2B2E4A;
              margin-bottom: 20px;
              text-align: center;
            }
            
            .invoice-info {
              display: table;
              width: 100%;
              margin-bottom: 30px;
            }
            
            .info-section {
              display: table-cell;
              width: 50%;
              vertical-align: top;
              padding-right: 20px;
            }
            
            .info-section:last-child {
              padding-right: 0;
              padding-left: 20px;
            }
            
            .info-section h3 {
              color: #5D6D93;
              font-size: 16px;
              margin-bottom: 15px;
              border-bottom: 2px solid #E3B330;
              padding-bottom: 5px;
            }
            
            .info-section p {
              margin: 5px 0;
              line-height: 1.6;
            }
            
            .invoice-amount {
              background: linear-gradient(135deg, #E3B330 0%, #F4D03F 100%);
              color: #2B2E4A;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0;
            }
            
            .amount-label {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 5px;
            }
            
            .amount-value {
              font-size: 36px;
              font-weight: bold;
            }
            
            .invoice-description {
              background: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            
            .description-title {
              font-weight: bold;
              color: #5D6D93;
              margin-bottom: 10px;
            }
            
            .payment-terms {
              background: #e8f4fd;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #2B2E4A;
            }
            
            .terms-title {
              font-weight: bold;
              color: #2B2E4A;
              margin-bottom: 10px;
            }
            
            .invoice-footer {
              background: #2B2E4A;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 14px;
            }
            
            .company-info {
              margin-bottom: 15px;
            }
            
            .company-info p {
              margin: 3px 0;
            }
            
            .banking-info {
              margin-bottom: 15px;
              font-size: 12px;
              line-height: 1.4;
            }
            
            .banking-info p {
              margin: 2px 0;
            }
            
            .footer-links {
              margin-top: 10px;
            }
            
            .footer-links a {
              color: #E3B330;
              text-decoration: none;
              margin: 0 10px;
            }
            
            @media print {
              body { 
                background: white !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              .invoice-container { 
                box-shadow: none !important;
                margin: 0 !important;
                max-width: none !important;
              }
              
              .invoice-header {
                background: #2B2E4A !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              .invoice-amount {
                background: #E3B330 !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              .invoice-footer {
                background: #2B2E4A !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              @page {
                margin: 0.5in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          ${invoiceContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    
    // Wait for content to load before printing
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 250);
  };

  const previewInvoice = (invoice: Invoice) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const invoiceContent = generateInvoiceContent(invoice);
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice Preview - ${invoice.invoiceNumber}</title>
          <meta charset="utf-8">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              margin: 0; 
              padding: 20px; 
              background: #f8f9fa;
              color: #333;
              font-size: 14px;
              line-height: 1.4;
            }
            
            .invoice-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            
            .invoice-header {
              background: linear-gradient(135deg, #2B2E4A 0%, #5D6D93 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            
            .logo {
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 10px;
              letter-spacing: 2px;
            }
            
            .company-name {
              font-size: 18px;
              opacity: 0.9;
              margin-bottom: 5px;
            }
            
            .company-tagline {
              font-size: 14px;
              opacity: 0.8;
              margin-bottom: 15px;
            }
            
            .company-address {
              font-size: 12px;
              opacity: 0.9;
              line-height: 1.4;
            }
            
            .company-address p {
              margin: 2px 0;
            }
            
            .invoice-details {
              padding: 30px;
            }
            
            .invoice-title {
              font-size: 28px;
              font-weight: bold;
              color: #2B2E4A;
              margin-bottom: 20px;
              text-align: center;
            }
            
            .invoice-info {
              display: table;
              width: 100%;
              margin-bottom: 30px;
            }
            
            .info-section {
              display: table-cell;
              width: 50%;
              vertical-align: top;
              padding-right: 20px;
            }
            
            .info-section:last-child {
              padding-right: 0;
              padding-left: 20px;
            }
            
            .info-section h3 {
              color: #5D6D93;
              font-size: 16px;
              margin-bottom: 15px;
              border-bottom: 2px solid #E3B330;
              padding-bottom: 5px;
            }
            
            .info-section p {
              margin: 5px 0;
              line-height: 1.6;
            }
            
            .invoice-amount {
              background: linear-gradient(135deg, #E3B330 0%, #F4D03F 100%);
              color: #2B2E4A;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0;
            }
            
            .amount-label {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 5px;
            }
            
            .amount-value {
              font-size: 36px;
              font-weight: bold;
            }
            
            .invoice-description {
              background: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            
            .description-title {
              font-weight: bold;
              color: #5D6D93;
              margin-bottom: 10px;
            }
            
            .payment-terms {
              background: #e8f4fd;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #2B2E4A;
            }
            
            .terms-title {
              font-weight: bold;
              color: #2B2E4A;
              margin-bottom: 10px;
            }
            
            .invoice-footer {
              background: #2B2E4A;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 14px;
            }
            
            .company-info {
              margin-bottom: 15px;
            }
            
            .company-info p {
              margin: 3px 0;
            }
            
            .banking-info {
              margin-bottom: 15px;
              font-size: 12px;
              line-height: 1.4;
            }
            
            .banking-info p {
              margin: 2px 0;
            }
            
            .footer-links {
              margin-top: 10px;
            }
            
            .footer-links a {
              color: #E3B330;
              text-decoration: none;
              margin: 0 10px;
            }
            
            .preview-controls {
              position: fixed;
              top: 20px;
              right: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              z-index: 1000;
            }
            
            .preview-controls button {
              background: #2B2E4A;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              margin: 5px;
              font-weight: bold;
            }
            
            .preview-controls button:hover {
              background: #5D6D93;
            }
            
            @media print {
              body { 
                background: white !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              .preview-controls {
                display: none !important;
              }
              
              .invoice-container { 
                box-shadow: none !important;
                margin: 0 !important;
                max-width: none !important;
                border-radius: 0 !important;
              }
              
              .invoice-header {
                background: #2B2E4A !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              .invoice-amount {
                background: #E3B330 !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              .invoice-footer {
                background: #2B2E4A !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
              
              @page {
                margin: 0.5in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="preview-controls">
            <button onclick="window.print()">🖨️ Print</button>
            <button onclick="window.close()">❌ Close</button>
          </div>
          ${invoiceContent}
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const generateInvoiceContent = (invoice: Invoice) => {
    const now = new Date();
    const dueDate = invoice.dueDate ? new Date(invoice.dueDate) : new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    return `
      <div class="invoice-container">
        <div class="invoice-header">
          <div class="logo">MARLIK FILMS</div>
          <div class="company-name">Limit Edge Productions</div>
          <div class="company-tagline">Persian Sports Reality Show</div>
          <div class="company-address">
            <p>Flyglärargatan 3</p>
            <p>128 36 Skarpnäck</p>
            <p>SWEDEN</p>
          </div>
        </div>
        
        <div class="invoice-details">
          <div class="invoice-title">INVOICE</div>
          
          <div class="invoice-info">
            <div class="info-section">
              <h3>Bill To:</h3>
              <p><strong>${invoice.clientName}</strong></p>
              ${invoice.contactPerson ? `<p>Contact: ${invoice.contactPerson}</p>` : ''}
              ${invoice.clientEmail ? `<p>Email: ${invoice.clientEmail}</p>` : ''}
              ${invoice.clientPhone ? `<p>Phone: ${invoice.clientPhone}</p>` : ''}
              ${invoice.clientAddress ? `<p>${invoice.clientAddress}</p>` : ''}
            </div>
            
            <div class="info-section">
              <h3>Invoice Details:</h3>
              <p><strong>Invoice #:</strong> ${invoice.invoiceNumber}</p>
              <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
              <p><strong>Due Date:</strong> ${dueDate.toLocaleDateString()}</p>
              <p><strong>Type:</strong> ${invoice.type.charAt(0).toUpperCase() + invoice.type.slice(1)}</p>
              <p><strong>Status:</strong> ${invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</p>
            </div>
          </div>
          
          <div class="invoice-amount">
            <div class="amount-label">Total Amount</div>
            <div class="amount-value">${invoice.currency} ${invoice.amount.toLocaleString()}</div>
          </div>
          
          ${invoice.description ? `
            <div class="invoice-description">
              <div class="description-title">Description:</div>
              <p>${invoice.description}</p>
            </div>
          ` : ''}
          
          <div class="payment-terms">
            <div class="terms-title">Payment Terms:</div>
            <p>${invoice.customTerms || invoice.paymentTerms || 'Payment due within 30 days of invoice date.'}</p>
            <p><strong>Payment Methods:</strong> Bank Transfer, Check, or Online Payment</p>
            <p><strong>Late Payment:</strong> 1.5% monthly service charge on overdue amounts</p>
          </div>
          
          ${invoice.notes ? `
            <div class="invoice-description">
              <div class="description-title">Additional Notes:</div>
              <p>${invoice.notes}</p>
            </div>
          ` : ''}
        </div>
        
        <div class="invoice-footer">
          <div class="company-info">
            <p><strong>MARLIK FILMS</strong></p>
            <p>Flyglärargatan 3, 128 36 Skarpnäck, SWEDEN</p>
            <p>Org: 8601107595 | VAT: SE860110759501</p>
          </div>
          <div class="banking-info">
            <p><strong>Banking Information:</strong></p>
            <p>Clearing: 8169-5 | Account: 923 650 980-9</p>
            <p>IBAN: SE27 8000 0816 9592 3650 9809</p>
            <p>BIC: SWEDSESS</p>
          </div>
          <div class="footer-links">
            <a href="mailto:alexander.aryanfar@gmail.com">alexander.aryanfar@gmail.com</a>
            <a href="tel:+17059700443">+1 (705) 970-0443</a>
            <a href="https://limitedgeshow.com">www.limitedgeshow.com</a>
          </div>
        </div>
      </div>
    `;
  };

  const handleExpenseSubmit = async (expenseData: Expense) => {
    try {
      if (editingExpense) {
        await apiService.updateExpense(editingExpense._id!, expenseData);
        toast.success('Expense updated successfully!');
      } else {
        await apiService.createExpense(expenseData);
        toast.success('Expense added successfully!');
      }
      setShowExpenseForm(false);
      setEditingExpense(null);
      loadData();
    } catch (error) {
      toast.error('Failed to save expense');
    }
  };

  const handleInvoiceSubmit = async (invoiceData: Invoice) => {
    try {
      if (editingInvoice) {
        await apiService.updateInvoice(editingInvoice._id!, invoiceData);
        toast.success('Invoice updated successfully!');
      } else {
        await apiService.createInvoice(invoiceData);
        toast.success('Invoice created successfully!');
      }
      setShowInvoiceForm(false);
      setEditingInvoice(null);
      loadData();
    } catch (error) {
      toast.error('Failed to save invoice');
    }
  };

  const handleDeleteExpense = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await apiService.deleteExpense(id);
        toast.success('Expense deleted successfully!');
        loadData();
      } catch (error) {
        toast.error('Failed to delete expense');
      }
    }
  };

  const handleDeleteInvoice = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      try {
        await apiService.deleteInvoice(id);
        toast.success('Invoice deleted successfully!');
        loadData();
      } catch (error) {
        toast.error('Failed to delete invoice');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🔐 Secure Access</h1>
            <p className="text-gray-600">Enter password to access accounting system</p>
            <p className="text-sm text-gray-500 mt-2">Password: LimitEdge2024!</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Accounting System</h1>
            <p className="text-gray-600">Manage expenses and invoices for Limited Edge Budget</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'expenses'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'invoices'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'reports'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Reports & Export
          </button>
        </div>

        {/* Content */}
        {activeTab === 'expenses' ? (
          <ExpenseManagement
            expenses={expenses}
            subCategories={subCategories}
            onAddExpense={() => setShowExpenseForm(true)}
            onEditExpense={(expense) => {
              setEditingExpense(expense);
              setShowExpenseForm(true);
            }}
            onDeleteExpense={handleDeleteExpense}
          />
        ) : activeTab === 'invoices' ? (
          <InvoiceManagement
            invoices={invoices}
            onAddInvoice={() => setShowInvoiceForm(true)}
            onEditInvoice={(invoice) => {
              setEditingInvoice(invoice);
              setShowInvoiceForm(true);
            }}
            onDeleteInvoice={handleDeleteInvoice}
            onExportInvoice={exportInvoiceToPDF}
            onPreviewInvoice={previewInvoice}
          />
        ) : (
          <ReportsManagement
            expenses={expenses}
            invoices={invoices}
            subCategories={subCategories}
            reportType={reportType}
            setReportType={setReportType}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onExportCSV={exportToCSV}
            onPrintReport={printReport}
          />
        )}

        {/* Forms */}
        {showExpenseForm && (
          <ExpenseForm
            expense={editingExpense}
            subCategories={subCategories}
            onSubmit={handleExpenseSubmit}
            onClose={() => {
              setShowExpenseForm(false);
              setEditingExpense(null);
            }}
          />
        )}

        {showInvoiceForm && (
          <InvoiceForm
            invoice={editingInvoice}
            onSubmit={handleInvoiceSubmit}
            onClose={() => {
              setShowInvoiceForm(false);
              setEditingInvoice(null);
            }}
            generateInvoiceNumber={generateUniqueInvoiceNumber}
          />
        )}
      </div>
    </div>
  );
};

// Expense Management Component
const ExpenseManagement: React.FC<{
  expenses: Expense[];
  subCategories: any;
  onAddExpense: () => void;
  onEditExpense: (expense: Expense) => void;
  onDeleteExpense: (id: string) => void;
}> = ({ expenses, subCategories, onAddExpense, onEditExpense, onDeleteExpense }) => {
  const totalSpent = expenses
    .filter(expense => expense.status === 'approved')
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Expenses</h3>
          <p className="text-3xl font-bold text-blue-600">${totalSpent.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Expenses</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {expenses.filter(e => e.status === 'pending').length}
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Approved Expenses</h3>
          <p className="text-3xl font-bold text-green-600">
            {expenses.filter(e => e.status === 'approved').length}
          </p>
        </div>
      </div>

      {/* Add Expense Button */}
      <div className="flex justify-end">
        <button onClick={onAddExpense} className="btn-primary">
          Add New Expense
        </button>
      </div>

      {/* Expenses Table */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Sub-Category</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{expense.description}</td>
                  <td className="py-3 px-4">${expense.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 capitalize">{expense.category.replace('-', ' ')}</td>
                  <td className="py-3 px-4">{subCategories[expense.category]?.[expense.subCategory] || expense.subCategory}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      expense.status === 'approved' ? 'bg-green-100 text-green-800' :
                      expense.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {expense.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEditExpense(expense)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        title="Edit Expense"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => onDeleteExpense(expense._id!)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Invoice Management Component
const InvoiceManagement: React.FC<{
  invoices: Invoice[];
  onAddInvoice: () => void;
  onEditInvoice: (invoice: Invoice) => void;
  onDeleteInvoice: (id: string) => void;
  onExportInvoice: (invoice: Invoice) => void;
  onPreviewInvoice: (invoice: Invoice) => void;
}> = ({ invoices, onAddInvoice, onEditInvoice, onDeleteInvoice, onExportInvoice, onPreviewInvoice }) => {
  return (
    <div className="space-y-6">
      {/* Add Invoice Button and Export Options */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <button 
            onClick={() => {
              invoices.forEach(invoice => {
                setTimeout(() => onExportInvoice(invoice), 100);
              });
            }}
            className="btn-secondary flex items-center"
            disabled={invoices.length === 0}
          >
            📄 Export All Invoices
          </button>
        </div>
        <button onClick={onAddInvoice} className="btn-primary">
          Create New Invoice
        </button>
      </div>

      {/* Invoices Table */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Invoices</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Invoice #</th>
                <th className="text-left py-3 px-4">Client</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Due Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{invoice.invoiceNumber}</td>
                  <td className="py-3 px-4">{invoice.clientName}</td>
                  <td className="py-3 px-4">${invoice.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 capitalize">{invoice.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                      invoice.status === 'sent' ? 'bg-blue-100 text-blue-800' :
                      invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : '-'}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onPreviewInvoice(invoice)}
                        className="text-purple-600 hover:text-purple-800 font-medium"
                        title="Preview Invoice"
                      >
                        👁️ Preview
                      </button>
                      <button
                        onClick={() => onExportInvoice(invoice)}
                        className="text-green-600 hover:text-green-800 font-medium"
                        title="Print/Export Invoice"
                      >
                        🖨️ Print
                      </button>
                      <button
                        onClick={() => onEditInvoice(invoice)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        title="Edit Invoice"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => onDeleteInvoice(invoice._id!)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Expense Form Component
const ExpenseForm: React.FC<{
  expense?: Expense | null;
  subCategories: any;
  onSubmit: (expense: Expense) => void;
  onClose: () => void;
}> = ({ expense, subCategories, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<Expense>({
    description: '',
    amount: 0,
    category: '',
    subCategory: '',
    date: new Date().toISOString().split('T')[0],
    vendor: '',
    receipt: '',
    status: 'pending',
    notes: '',
    ...expense
  });

  const [availableSubCategories, setAvailableSubCategories] = useState<string[]>([]);

  // Update form data when expense prop changes
  useEffect(() => {
    if (expense) {
      setFormData({
        description: '',
        amount: 0,
        category: '',
        subCategory: '',
        date: new Date().toISOString().split('T')[0],
        vendor: '',
        receipt: '',
        status: 'pending',
        notes: '',
        ...expense
      });
    }
  }, [expense]);

  useEffect(() => {
    if (formData.category && subCategories[formData.category]) {
      setAvailableSubCategories(Object.keys(subCategories[formData.category]));
    } else {
      setAvailableSubCategories([]);
    }
  }, [formData.category, subCategories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">
          {expense ? `Edit Expense: ${expense.description}` : 'Add New Expense'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value, subCategory: '' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select category</option>
                <option value="pre-production">Pre-Production</option>
                <option value="production">Production</option>
                <option value="post-production">Post-Production</option>
                <option value="marketing">Marketing</option>
                <option value="contingency">Contingency</option>
                <option value="prize-fund">Prize Fund</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub-Category *
              </label>
              <select
                value={formData.subCategory}
                onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                disabled={!formData.category}
              >
                <option value="">Select sub-category</option>
                {availableSubCategories.map(sub => (
                  <option key={sub} value={sub}>
                    {subCategories[formData.category]?.[sub]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vendor
              </label>
              <input
                type="text"
                value={formData.vendor || ''}
                onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receipt Number
              </label>
              <input
                type="text"
                value={formData.receipt || ''}
                onChange={(e) => setFormData({ ...formData, receipt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes || ''}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              {expense ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Invoice Form Component
const InvoiceForm: React.FC<{
  invoice?: Invoice | null;
  onSubmit: (invoice: Invoice) => void;
  onClose: () => void;
  generateInvoiceNumber: () => string;
}> = ({ invoice, onSubmit, onClose, generateInvoiceNumber }) => {
  const [formData, setFormData] = useState<Invoice>({
    invoiceNumber: invoice?.invoiceNumber || generateInvoiceNumber(),
    type: 'sponsorship',
    clientName: '',
    contactPerson: '',
    clientEmail: '',
    clientPhone: '',
    clientAddress: '',
    amount: 0,
    currency: 'USD',
    paymentTerms: '',
    customTerms: '',
    description: '',
    dueDate: '',
    status: 'draft',
    notes: '',
    ...invoice
  });

  // Update form data when invoice prop changes
  useEffect(() => {
    if (invoice) {
      setFormData({
        invoiceNumber: invoice.invoiceNumber,
        type: 'sponsorship',
        clientName: '',
        contactPerson: '',
        clientEmail: '',
        clientPhone: '',
        clientAddress: '',
        amount: 0,
        currency: 'USD',
        paymentTerms: '',
        customTerms: '',
        description: '',
        dueDate: '',
        status: 'draft',
        notes: '',
        ...invoice
      });
    } else {
      // Generate new invoice number for new invoices
      setFormData(prev => ({
        ...prev,
        invoiceNumber: generateInvoiceNumber()
      }));
    }
  }, [invoice, generateInvoiceNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">
          {invoice ? `Edit Invoice #${invoice.invoiceNumber}` : 'Create New Invoice'}
        </h2>
        
        {/* Company Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Company:</strong> MARLIK FILMS</p>
              <p><strong>Address:</strong> Flyglärargatan 3, 128 36 Skarpnäck, SWEDEN</p>
              <p><strong>Org:</strong> 8601107595 | <strong>VAT:</strong> SE860110759501</p>
            </div>
            <div>
              <p><strong>Banking:</strong></p>
              <p>Clearing: 8169-5 | Account: 923 650 980-9</p>
              <p>IBAN: SE27 8000 0816 9592 3650 9809</p>
              <p>BIC: SWEDSESS</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Invoice Number * (Auto-generated)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.invoiceNumber}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  readOnly
                />
                {!invoice && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, invoiceNumber: generateInvoiceNumber() }))}
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                    title="Generate new invoice number"
                  >
                    🔄
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Format: INV-YYYYMMDD-XXXXXX
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="sponsorship">Sponsorship</option>
                <option value="investment">Investment</option>
                <option value="advertising">Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                value={formData.contactPerson || ''}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Email
              </label>
              <input
                type="email"
                value={formData.clientEmail || ''}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Phone
              </label>
              <input
                type="tel"
                value={formData.clientPhone || ''}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Address
            </label>
            <textarea
              value={formData.clientAddress || ''}
              onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Terms
              </label>
              <input
                type="text"
                value={formData.paymentTerms || ''}
                onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={formData.dueDate || ''}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes || ''}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              {invoice ? 'Update Invoice' : 'Create Invoice'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Reports Management Component
const ReportsManagement: React.FC<{
  expenses: Expense[];
  invoices: Invoice[];
  subCategories: any;
  reportType: 'summary' | 'detailed' | 'category';
  setReportType: (type: 'summary' | 'detailed' | 'category') => void;
  dateRange: 'all' | 'month' | 'quarter' | 'year';
  setDateRange: (range: 'all' | 'month' | 'quarter' | 'year') => void;
  onExportCSV: (data: any[], filename: string) => void;
  onPrintReport: () => void;
}> = ({ expenses, invoices, subCategories, reportType, setReportType, dateRange, setDateRange, onExportCSV, onPrintReport }) => {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const approvedExpenses = expenses.filter(e => e.status === 'approved').reduce((sum, exp) => sum + exp.amount, 0);
  const pendingExpenses = expenses.filter(e => e.status === 'pending').reduce((sum, exp) => sum + exp.amount, 0);
  const totalInvoices = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidInvoices = invoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);

  const categoryBreakdown = expenses.reduce((acc, exp) => {
    if (!acc[exp.category]) {
      acc[exp.category] = { total: 0, count: 0, subCategories: {} };
    }
    acc[exp.category].total += exp.amount;
    acc[exp.category].count += 1;
    
    if (!acc[exp.category].subCategories[exp.subCategory]) {
      acc[exp.category].subCategories[exp.subCategory] = 0;
    }
    acc[exp.category].subCategories[exp.subCategory] += exp.amount;
    
    return acc;
  }, {} as any);

  const exportExpenses = () => {
    const exportData = expenses.map(exp => ({
      Date: exp.date,
      Description: exp.description,
      Category: exp.category,
      'Sub-Category': exp.subCategory,
      Amount: exp.amount,
      Status: exp.status,
      Vendor: exp.vendor || '',
      Notes: exp.notes || ''
    }));
    onExportCSV(exportData, `expenses_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportInvoices = () => {
    const exportData = invoices.map(inv => ({
      'Invoice Number': inv.invoiceNumber,
      'Client Name': inv.clientName,
      Type: inv.type,
      Amount: inv.amount,
      Currency: inv.currency,
      Status: inv.status,
      'Due Date': inv.dueDate || '',
      'Contact Person': inv.contactPerson || '',
      'Client Email': inv.clientEmail || '',
      Notes: inv.notes || ''
    }));
    onExportCSV(exportData, `invoices_${new Date().toISOString().split('T')[0]}.csv`);
  };

  return (
    <div className="space-y-6">
      {/* Report Controls */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Report Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value as any)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="summary">Summary Report</option>
              <option value="detailed">Detailed Report</option>
              <option value="category">Category Breakdown</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as any)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Expenses</h3>
          <p className="text-3xl font-bold text-blue-600">${totalExpenses.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">{expenses.length} transactions</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Approved Expenses</h3>
          <p className="text-3xl font-bold text-green-600">${approvedExpenses.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">{expenses.filter(e => e.status === 'approved').length} approved</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Expenses</h3>
          <p className="text-3xl font-bold text-yellow-600">${pendingExpenses.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">{expenses.filter(e => e.status === 'pending').length} pending</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Invoices</h3>
          <p className="text-3xl font-bold text-purple-600">${totalInvoices.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">{invoices.length} invoices</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Paid Invoices</h3>
          <p className="text-3xl font-bold text-green-600">${paidInvoices.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">{invoices.filter(i => i.status === 'paid').length} paid</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Net Cash Flow</h3>
          <p className={`text-3xl font-bold ${(paidInvoices - approvedExpenses) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${(paidInvoices - approvedExpenses).toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">Revenue - Expenses</p>
        </div>
      </div>

      {/* Category Breakdown */}
      {reportType === 'category' && (
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Expenses by Category</h3>
          <div className="space-y-4">
            {Object.entries(categoryBreakdown).map(([category, data]: [string, any]) => (
              <div key={category} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{category}</h4>
                  <span className="text-xl font-bold text-blue-600">${data.total.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(data.subCategories).map(([subCat, amount]: [string, any]) => (
                    <div key={subCat} className="flex justify-between text-sm">
                      <span className="text-gray-600">{subCat}</span>
                      <span className="font-medium">${amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export and Print Controls */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Export & Print</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button
            onClick={exportExpenses}
            className="btn-secondary flex items-center justify-center"
          >
            📊 Export Expenses CSV
          </button>
          <button
            onClick={exportInvoices}
            className="btn-secondary flex items-center justify-center"
          >
            📋 Export Invoices CSV
          </button>
          <button
            onClick={onPrintReport}
            className="btn-primary flex items-center justify-center"
          >
            🖨️ Print Report
          </button>
          <button
            onClick={() => {
              const combinedData = [
                ...expenses.map(exp => ({ Type: 'Expense', ...exp })),
                ...invoices.map(inv => ({ Type: 'Invoice', ...inv }))
              ];
              onExportCSV(combinedData, `combined_report_${new Date().toISOString().split('T')[0]}.csv`);
            }}
            className="btn-secondary flex items-center justify-center"
          >
            📈 Export Combined CSV
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[...expenses, ...invoices]
            .sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime())
            .slice(0, 10)
            .map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">
                    {item.description || (item as Invoice).clientName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.date} • {(item as Expense).category || (item as Invoice).type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${item.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">
                    {(item as Expense).status || (item as Invoice).status}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;
