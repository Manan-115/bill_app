'use client';

import { ChevronRight, Crown, HelpCircle, Gift, FileText, User, Bell, Users, Trash2, Search, Printer, Star, Info } from 'lucide-react';

export default function MorePage() {
  const menuItems = [
    {
      section: 'top',
      items: [
        { icon: Crown, label: 'myBillBook Subscription Plan', color: 'text-amber-500' },
        { icon: HelpCircle, label: 'Help', color: 'text-indigo-500' },
        { icon: Gift, label: 'Invite & Earn', color: 'text-indigo-500' },
      ]
    },
    {
      section: 'Settings',
      items: [
        { icon: FileText, label: 'Invoice Settings', color: 'text-indigo-500' },
        { icon: User, label: 'Account Settings', color: 'text-indigo-500' },
        { icon: Bell, label: 'Reminder Settings', color: 'text-indigo-500' },
        { icon: Users, label: 'Manage User', color: 'text-indigo-500' },
        { icon: Trash2, label: 'Recover Deleted Invoices', color: 'text-indigo-500' },
      ]
    },
    {
      section: 'Others',
      items: [
        { icon: Search, label: 'GST Rate Finder', color: 'text-indigo-500' },
        { icon: Printer, label: 'Buy Printer', color: 'text-indigo-500' },
        { icon: Star, label: 'Rate app on Playstore', color: 'text-indigo-500' },
        { icon: Info, label: 'About', color: 'text-indigo-500' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-white px-4 pt-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Business Name</h1>
            <button className="flex items-center text-xs font-semibold text-gray-700 hover:text-gray-900">
              BUSINESS & GST SETTINGS
              <ChevronRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="w-14 h-14 bg-sky-300 rounded-2xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">B</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-2">
        {menuItems.map((section, idx) => (
          <div key={idx}>
            {section.section !== 'top' && (
              <div className="px-4 py-3 bg-gray-100">
                <h2 className="text-sm font-semibold text-gray-600">{section.section}</h2>
              </div>
            )}
            <div className="bg-white">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  className={`w-full flex items-center justify-between px-4 py-3.5 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    item.label === 'myBillBook Subscription Plan' ? 'bg-amber-50/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className={`text-sm font-medium ${
                      item.label === 'myBillBook Subscription Plan' ? 'text-amber-700' : 'text-gray-800'
                    }`}>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Help Button */}
      <button className="fixed bottom-24 right-6 bg-gray-800 text-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <HelpCircle className="w-3.5 h-3.5 text-gray-800" />
        </div>
        <span className="text-sm font-medium">Help</span>
      </button>
    </div>
  );
}
