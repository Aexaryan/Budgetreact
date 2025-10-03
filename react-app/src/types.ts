export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  subCategory: string;
  date: string;
  vendor: string;
  receipt: string;
  status: 'pending' | 'approved' | 'rejected';
  notes: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  type: string;
  clientName: string;
  contactPerson: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'CAD';
  paymentTerms: 'net30' | 'net15' | 'net60' | 'due_on_receipt' | 'custom';
  customTerms?: string;
  description: string;
  dueDate: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  notes: string;
  createdAt: string;
}