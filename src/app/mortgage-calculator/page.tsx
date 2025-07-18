'use client';

import { useState } from 'react';

export default function CalculatorPage() {
  const [homePrice, setHomePrice] = useState(695200);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // %
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(15);
  const [zipCode, setZipCode] = useState('110003');

  const downPayment = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

  return (
    <div className="p-6 max-w-3xl mx-auto bg-green-50 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Mortgage Calculator</h1>
      <p className="text-gray-600 mb-6">
        Free mortgage calculator to estimate your monthly mortgage payments with annual amortization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Home Price */}
        <label>
          Home price:
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full mt-1 p-2 rounded border border-gray-300"
          />
        </label>

        {/* ZIP Code */}
        <label>
          ZIP code:
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full mt-1 p-2 rounded border border-gray-300"
          />
        </label>

        {/* Down Payment Percent */}
        <label>
          Down payment (%):
          <input
            type="number"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full mt-1 p-2 rounded border border-gray-300"
          />
        </label>

        {/* Down Payment (readonly calculated amount) */}
        <div>
          <p className="text-sm text-gray-600">Down payment amount:</p>
          <p className="font-semibold text-black">${downPayment.toLocaleString()}</p>
        </div>

        {/* Interest Rate */}
        <label>
          Interest rate (%):
          <input
            type="number"
            value={interestRate}
            step="0.01"
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full mt-1 p-2 rounded border border-gray-300"
          />
        </label>

        {/* Loan Term */}
        <label>
          Length of loan:
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full mt-1 p-2 rounded border border-gray-300"
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </label>
      </div>

      {/* Output */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <p className="text-xl font-semibold">
          Monthly payment: <span className="text-green-700">${monthlyPayment.toFixed(0)}/mo</span>
        </p>
      </div>
    </div>
  );
}


