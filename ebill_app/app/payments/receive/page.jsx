'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, User, Plus, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RecordPaymentInPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    setIsVisible(true);

    const searchParams = new URLSearchParams(window.location.search);
    const key = searchParams.get('key');
    const shouldAutoLoad = key === 'received' || key === 'recieved' || key === 'bill';

    if (shouldAutoLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <div 
      className={`relative min-h-screen transition-transform duration-300 ease-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ backgroundColor: '#f5f3ff' }}
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button 
          onClick={handleBack}
          className="text-gray-700"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Record Payment In</h1>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Payment Info Header */}
        <div className="bg-white px-4 py-2.5 mt-2">
          <div className=" rounded-lg p-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-purple-600">Received Payment #1</p>
              <p className="text-xs text-gray-500 mt-0.5">01 May 2026</p>
            </div>
            <button className="inline-flex items-center justify-center bg-white text-purple-600 text-xs font-semibold px-3 py-1 border-2 border-purple-600 rounded-[9999px]">
              EDIT
            </button>
          </div>
        </div>

        {/* Party Name Field */}
        <div className="bg-white px-4 py-2.5">
          <label className="block text-[10px] font-bold text-gray-700 mb-2">
            PARTY NAME <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
              <User className="w-4 h-4" />
            </div>
            <select className="w-full pl-9 pr-9 py-2 text-xs border border-gray-300 rounded-lg text-gray-400 appearance-none bg-white">
              <option>Search/Create Party</option>
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Amount Field */}
        <div className="bg-white px-4 py-2.5 space-y-2">
          <div className="flex items-center justify-between gap-4">
            <label className="text-[10px] font-bold text-gray-700 whitespace-nowrap">
              AMOUNT <span className="text-red-500">*</span>
            </label>
            <div className="relative w-52">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-7 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-white"
                placeholder=""
              />
            </div>
          </div>

          {!showDiscount ? (
            <div className="flex justify-end">
              <button 
                onClick={() => setShowDiscount(true)}
                className="text-purple-600 font-semibold text-xs flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Payment In Discount
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4 pt-1">
              <label className="text-[10px] font-bold text-gray-700 whitespace-nowrap">
                PAYMENT IN DISCOUNT
              </label>
              <div className="relative w-52">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₹</span>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-white"
                  placeholder=""
                />
              </div>
            </div>
          )}
        </div>

        {/* Invoice Section */}
        <div className="bg-white px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700">Invoice</span>
          <button className="text-purple-600 text-xs font-semibold flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" />
            Add Unpaid Invoice
          </button>
        </div>

        {/* Payment Mode */}
        <div className="bg-white px-4 py-2.5">
          <label className="block text-[12px] font-bold text-gray-700 mb-2">
            Payment Mode
          </label>
          <div className="relative">
            <select 
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
            >
              <option>Cash</option>
              <option>UPI</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>Cheque</option>
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Note Button */}
        {!showNote && (
          <div className="bg-white px-4 py-2.5">
            <button 
              onClick={() => setShowNote(true)}
              className="text-indigo-600 text-xs font-medium flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              Note
            </button>
          </div>
        )}

        {/* Note Field */}
        {showNote && (
          <div className="bg-white px-4 py-2.5">
            <label className="block text-[10px] font-bold text-gray-700 mb-2">
              Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              rows="2"
              placeholder="Add a note..."
            />
          </div>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-gray-100/80 ">
          <Settings className="h-12 w-12 text-blue-900 animate-spin" />
          <p className="mt-4 text-blue-900">Preparing payment screen...</p>
        </div>
      )}
    </div>
  );
}
