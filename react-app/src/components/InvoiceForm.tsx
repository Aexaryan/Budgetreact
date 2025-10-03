import React, { useState, useEffect } from 'react';
import { Invoice } from '../types';

interface InvoiceFormProps {
  onAddInvoice: (invoice: Omit<Invoice, 'id' | 'invoiceNumber'>) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onAddInvoice }) => {
  const [type, setType] = useState('');
  const [clientName, setClientName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'CAD'>('USD');
  const [paymentTerms, setPaymentTerms] = useState<'net30' | 'net15' | 'net60' | 'due_on_receipt' | 'custom'>('net30');
  const [customTerms, setCustomTerms] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  const [status, setStatus] = useState<'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'>('draft');
  const [notes, setNotes] = useState('');
  const [showCustomTerms, setShowCustomTerms] = useState(false);

  useEffect(() => {
    setShowCustomTerms(paymentTerms === 'custom');
  }, [paymentTerms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !clientName || !amount) {
      alert('Please fill out all required fields.');
      return;
    }
    onAddInvoice({
      type,
      clientName,
      contactPerson,
      clientEmail,
      clientPhone,
      clientAddress,
      amount: Number(amount),
      currency,
      paymentTerms,
      customTerms,
      description,
      dueDate,
      status,
      notes,
      createdAt: new Date().toISOString(),
    });
    // Reset form
    setType('');
    setClientName('');
    setContactPerson('');
    setClientEmail('');
    setClientPhone('');
    setClientAddress('');
    setAmount('');
    setCurrency('USD');
    setPaymentTerms('net30');
    setCustomTerms('');
    setDescription('');
    setDueDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    setStatus('draft');
    setNotes('');
  };

  return (
    <div className="expense-form">
      <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Create New Invoice</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Invoice Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="form-input" required>
            <option value="">Select type</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="investment">Investment</option>
            <option value="partnership">Partnership</option>
            <option value="advertising">Advertising</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Client/Company Name</label>
          <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="form-input" placeholder="Enter company name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Person</label>
          <input type="text" value={contactPerson} onChange={e => setContactPerson(e.target.value)} className="form-input" placeholder="Enter contact person name" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} className="form-input" placeholder="Enter email address" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input type="tel" value={clientPhone} onChange={e => setClientPhone(e.target.value)} className="form-input" placeholder="Enter phone number" />
        </div>
        <div className="form-group">
          <label className="form-label">Address</label>
          <textarea value={clientAddress} onChange={e => setClientAddress(e.target.value)} className="form-input" rows={3} placeholder="Enter full address"></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Invoice Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="form-input" placeholder="0.00" step="0.01" required />
        </div>
        <div className="form-group">
          <label className="form-label">Currency</label>
          <select value={currency} onChange={e => setCurrency(e.target.value as any)} className="form-input" required>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="CAD">CAD (C$)</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Payment Terms</label>
          <select value={paymentTerms} onChange={e => setPaymentTerms(e.target.value as any)} className="form-input" required>
            <option value="net30">Net 30 Days</option>
            <option value="net15">Net 15 Days</option>
            <option value="net60">Net 60 Days</option>
            <option value="due_on_receipt">Due on Receipt</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        {showCustomTerms && (
          <div className="form-group">
            <label className="form-label">Custom Payment Terms</label>
            <input type="text" value={customTerms} onChange={e => setCustomTerms(e.target.value)} className="form-input" placeholder="Enter custom terms" />
          </div>
        )}
        <div className="form-group">
          <label className="form-label">Services/Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-input" rows={4} placeholder="Describe services or sponsorship benefits" required></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Due Date</label>
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value as any)} className="form-input" required>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Notes</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} className="form-input" rows={3} placeholder="Additional notes"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">Create Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceForm;