"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Camera, X, Settings } from "lucide-react";

export default function CreateBillPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    partyName: "",
    items: [],
  });

  useEffect(() => {
    setIsVisible(true);

    const searchParams = new URLSearchParams(window.location.search);
    const key = searchParams.get("key");
    const shouldAutoLoad = key === "received" || key === "recieved" || key === "bill";

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

  const handleScanInvoice = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleAddItems = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { id: Math.random(), name: "", qty: 0, price: 0 }],
    });
  };

  return (
    <div className={`relative min-h-screen bg-gray-50 pb-4 transition-transform duration-300 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-blue-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Create Bill / Invoice</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95">
          <FileText className="w-5 h-5 text-blue-600" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Create Invoices Instantly Section */}
        {showBanner && (
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 animate-fade-in">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-1">Create Invoices instantly</h2>
                <p className="text-sm text-gray-600">Instantly add Invoices bills from bill Image or PDF</p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 hover:bg-white rounded transition-colors active:scale-90"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Scan & Record Invoices Button */}
            <Button
              onClick={handleScanInvoice}
              className="w-full bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 active:scale-95 transition-all"
              variant="outline"
            >
              <Camera className="w-4 h-4 mr-2" />
              Scan & Record Invoices
            </Button>
          </Card>
        )}

        {/* Invoice #1 Section */}
        <div className="space-y-2 animate-fade-in">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-blue-600">Invoice #1</span>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-500 border-gray-300 hover:text-gray-700 active:scale-95"
            >
              EDIT
            </Button>
          </div>
          <p className="text-sm text-gray-500">01 May 2026 - 7 day(s) to due</p>
        </div>

        {/* Party Name Field */}
        <div className="space-y-2 animate-fade-in">
          <label className="block text-sm font-semibold text-gray-900">
            PARTY NAME <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              placeholder="Search/Create Party"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all active:scale-95"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Items Section */}
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-sm font-semibold text-gray-900">ITEMS</h2>
          <Button
            onClick={handleAddItems}
            className="w-full bg-blue-100 text-blue-600 hover:bg-blue-100 active:scale-95 transition-all py-2 font-semibold rounded-md"
            variant="outline"
          >
            Add Items
          </Button>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-gray-100/80 ">
          <Settings className="h-12 w-12 text-blue-900 animate-spin" />
          <p className="mt-4 text-blue-900 animate-fade-in">Loading...</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
