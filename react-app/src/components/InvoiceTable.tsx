import React from 'react';
import { Invoice } from '../types';

interface InvoiceTableProps {
  invoices: Invoice[];
  onDeleteInvoice: (id: string) => void;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ invoices, onDeleteInvoice }) => {
  const getCurrencySymbol = (currency: 'USD' | 'EUR' | 'CAD') => {
    const symbols = { USD: '$', EUR: '€', CAD: 'C$' };
    return symbols[currency];
  };

  const formatCurrency = (amount: number, currency: 'USD' | 'EUR' | 'CAD') => {
    return `${getCurrencySymbol(currency)}${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString();
  const getStatusClass = (status: string) => `status-badge status-${status}`;

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Recent Invoices</h4>
      <div className="overflow-x-auto">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map(invoice => (
                <tr key={invoice.id}>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.clientName}</td>
                  <td>{formatCurrency(invoice.amount, invoice.currency)}</td>
                  <td className="capitalize">{invoice.type}</td>
                  <td><span className={getStatusClass(invoice.status)}>{invoice.status.toUpperCase()}</span></td>
                  <td>{formatDate(invoice.dueDate)}</td>
                  <td>
                    <button onClick={() => alert('Edit functionality coming soon!')} className="text-blue-600 hover:underline text-sm">Edit</button>
                    <button onClick={() => onDeleteInvoice(invoice.id)} className="text-red-600 hover:underline ml-4 text-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">No invoices recorded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;