"use client";

import * as React from "react";
import BottomNav from '@/components/navigation/BottomNav';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Sliders } from "lucide-react";
import TopNavBar from '@/components/navigation/TopNavBar';
import ActionButtonsBar from "@/components/actions/ActionButtonsBar";

export default function ItemsPage() {
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-28 bg-slate-50">
      <TopNavBar variant="items" />

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

      <ActionButtonsBar variant="items" />

      <BottomNav />
    </div>
  );
}
