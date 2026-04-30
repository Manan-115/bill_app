"use client";

import * as React from "react";
import BottomNav from '@/components/navigation/BottomNav';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Sliders } from "lucide-react";

export default function ItemsPage() {
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-28 bg-slate-50">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 bg-white border-b">
        <h2 className="text-lg font-semibold text-slate-800">Items</h2>
        <div className="flex items-center gap-1 text-indigo-600">
          <button className="p-1.5 rounded-md hover:bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
          </button>
          <button className="p-1.5 rounded-md hover:bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-3 py-2 bg-white border-b overflow-x-auto">
        <button className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium text-xs whitespace-nowrap">Low Stock</button>
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium text-xs flex items-center gap-1 whitespace-nowrap"
        >
          Category
          <svg className={`w-3 h-3 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
        </button>
        <button className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium text-xs flex items-center gap-1 whitespace-nowrap">
          Filter
          <Sliders className="w-3 h-3" />
        </button>
      </div>

      {/* Items list */}
      <div className="px-3 mt-3">
        <Card className="shadow-sm">
          <CardContent className="flex items-start gap-3 p-3">
            <div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm flex-shrink-0">S</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-slate-800 text-sm">Sample Item</div>
                  <div className="text-slate-500 text-xs">Amul Butter 500gm</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-semibold text-slate-800 text-sm">124.0</div>
                  <div className="text-xs text-slate-400">BOX</div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div>
                  <div className="text-slate-400 text-xs">Sales Price</div>
                  <div className="font-medium text-slate-800">₹ 220</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Purchase Price</div>
                  <div className="font-medium text-slate-800">₹ 190</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating actions (centered) */}
      <div className="fixed bottom-24 left-0 right-0 px-4 max-w-xl mx-auto flex items-center justify-between gap-3 z-40">
        <Button className="bg-violet-700 hover:bg-violet-800 text-white rounded-full flex-1 h-12 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Create New Item
        </Button>
        <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-full h-12 w-40 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3M21 7v4a1 1 0 01-1 1h-3M7 21h10"/></svg>
          Bulk Action
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
