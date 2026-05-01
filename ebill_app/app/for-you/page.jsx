import TopNavBar from '@/components/navigation/TopNavBar';
import BottomNav from "../../components/navigation/BottomNav.jsx";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Users, Package, MoreHorizontal } from "lucide-react";

export default function ForYouPage() {
  return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-5 rounded-b-3xl">
              <h1 className="text-2xl font-semibold">For You ✨</h1>
              <p className="text-sm opacity-90 mt-1">
                  Features designed specially for your business
              </p>
          </div>

          <div className="p-4 space-y-4 flex-1 pb-24">
              {/* Recommended Section */}
              <Card className="rounded-2xl shadow-sm">
                  <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-3">Recommended for you</h2>
                      <div className="grid grid-cols-3 gap-3">
                          {[
                              "e-Invoice",
                              "Staff Attendance & payroll",
                              "Desktop software",
                          ].map((item) => (
                              <div
                                  key={item}
                                  className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-3"
                              >
                                  <div className="h-10 w-10 bg-white rounded-lg mb-2" />
                                  <p className="text-xs text-center">{item}</p>
                              </div>
                          ))}
                      </div>
                  </CardContent>
              </Card>

              {/* Marketing Section */}
              <Card className="rounded-2xl">
                  <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-3">Marketing & Sales</h2>
                      <div className="grid grid-cols-4 gap-3 text-center">
                          {[
                              "WhatsApp",
                              "Rewards",
                              "Notes",
                              "Store",
                          ].map((item) => (
                              <div key={item} className="flex flex-col items-center">
                                  <div className="h-12 w-12 bg-gray-100 rounded-full mb-2" />
                                  <p className="text-xs">{item}</p>
                              </div>
                          ))}
                      </div>
                  </CardContent>
              </Card>

              <Card className="rounded-2xl">
                  <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-3">Accounting</h2>
                      <div className="grid grid-cols-4 gap-3 text-center">
                          {[
                              "GST filing",
                              "Balance Sheet",
                              "Automated Bills",
                              "CA Reports Sharing",
                              "Reports",
                              "Data Export to Tally",
                          ].map((item) => (
                              <div key={item} className="flex flex-col items-center">
                                  <div className="h-12 w-12 bg-gray-100 rounded-full mb-2" />
                                  <p className="text-xs">{item}</p>
                              </div>
                          ))}
                      </div>
                  </CardContent>
              </Card>
              <Card className="rounded-2xl">
                  <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-3">Business Efficiency</h2>
                      <div className="grid grid-cols-4 gap-3 text-center">
                              <div className="flex flex-col items-center">
                                  <div className="h-12 w-12 bg-gray-100 rounded-full mb-2" />
                                  <p className="text-xs">Smart Caculator</p>
                              </div>
                      </div>
                  </CardContent>
              </Card>
          </div>

          {/* Bottom Navigation */}
          <BottomNav/>
      </div>
  );
}
