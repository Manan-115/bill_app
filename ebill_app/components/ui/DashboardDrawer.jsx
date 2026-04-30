"use client";

import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerHandle,
  DrawerFooter,
} from "./drawer";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DescriptionIcon from '@mui/icons-material/Description';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WalletIcon from '@mui/icons-material/Wallet';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function DashboardDrawer({ open, setOpen }) {
  return (
    <Drawer open={open} onOpenChange={setOpen} className="bg-white !m-0">
      <DrawerContent>
        <div className="px-4 bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col max-h-[85vh] overflow-y-auto m-0">
          <DrawerHandle />
          <DrawerHeader className="p-0">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-[16px] font-medium">Sales Transactions</DrawerTitle>
              </div>
              <DrawerClose onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="mt-4 grid grid-cols-4 gap-4 px-2">
            {[
              { icon: ReceiptLongIcon, label: 'Bill / Invoice', tone: 'green' },
              { icon: WalletIcon, label: 'Received Payment', tone: 'green' },
              { icon: AssignmentReturnIcon, label: 'Sales Return', tone: 'green' },
              { icon: DescriptionIcon, label: 'Credit Note', tone: 'green' },
              { icon: AddBoxIcon, label: 'Quotation/ Estimate', tone: 'green' },
              { icon: LocalShippingIcon, label: 'Delivery Challan', tone: 'green' },
              { icon: PaymentsIcon, label: 'Proforma Invoice', tone: 'green' },
              { icon: EventRepeatIcon, label: 'Automated Bill', tone: 'green' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button key={item.label} className="flex flex-col items-center gap-2 p-2 text-sm text-gray-700">
                  <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center shadow-sm">
                    <Icon style={{ color: '#2e7d32' }} />
                  </div>
                  <span className="text-xs text-center">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 border-t pt-2">
            <h3 className="text-[16px] font-medium">Purchase Transactions</h3>
            <div className="mt-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-white rounded-xl flex items-center justify-between">
              <div>
                <div className="font-semibold">Scan & Record Bills</div>
                <div className="text-xs text-gray-500">1.5+ Lakhs bills processed every month</div>
              </div>
              <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-6h1a1 1 0 011 1v11a1 1 0 01-1 1h-9l-4 4V7a1 1 0 011-1h3" />
                </svg>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-4 px-2">
              {[
                { icon: Inventory2Icon, label: 'Purchase' },
                { icon: WalletIcon, label: 'Payment Out' },
                { icon: AssignmentReturnIcon, label: 'Purchase Return' },
                { icon: DescriptionIcon, label: 'Debit Note' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.label} className="flex flex-col items-center gap-2 p-2 text-sm text-gray-700">
                    <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center shadow-sm">
                      <Icon style={{ color: '#4f46e5' }} />
                    </div>
                    <span className="text-xs text-center">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <DrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
