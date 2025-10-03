import React from 'react';

const FinancialReports: React.FC = () => {
  return (
    <section className="accounting-card">
      <h3 className="text-2xl font-bold mb-6 text-[#2B2E4A]">Financial Reports</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
          <div className="text-4xl mb-3">📊</div>
          <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Monthly Report</h4>
          <p className="text-gray-600 mb-4">Generate monthly financial summary</p>
          <button className="btn-primary">Generate Report</button>
        </div>
        <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
          <div className="text-4xl mb-3">📈</div>
          <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Budget Analysis</h4>
          <p className="text-gray-600 mb-4">Analyze budget vs actual spending</p>
          <button className="btn-primary">View Analysis</button>
        </div>
        <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
          <div className="text-4xl mb-3">💾</div>
          <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Export Data</h4>
          <p className="text-gray-600 mb-4">Export financial data to Excel/PDF</p>
          <button className="btn-primary">Export</button>
        </div>
      </div>
    </section>
  );
};

export default FinancialReports;