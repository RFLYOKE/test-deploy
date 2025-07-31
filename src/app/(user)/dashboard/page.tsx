"use client";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Calendar04 } from "@/components/ui/calendar04";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";

import SalesPerformanceTab from "@/components/dashboard/sales-performance-tab";
import SalesUnderperformanceTab from "@/components/dashboard/sales-underperformance-tab";

export default function Page() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("salesPerformance"); // State untuk tab aktif
  const { data: session } = useSession();

  const role = session?.user?.roles?.[0]?.name; // Contoh role untuk filter cabang

  return (
    <>
      <SiteHeader title="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* Filter Section */}
            <div className="w-full flex flex-wrap gap-2 items-center justify-between px-4 lg:px-6">
              <Input placeholder="Cari nama..." className="w-full lg:w-1/2" />
              <div className="flex items-center gap-2">
                {role === "superadmin" && (
                  <select className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800">
                    <option value="">Semua Cabang</option>
                    <option value="active">Cabang 1</option>
                    <option value="inactive">Cabang 2</option>
                  </select>
                )}
                <Button
                  onClick={() => setShowCalendar((prev) => !prev)}
                  variant="default"
                  size="sm"
                >
                  Filter Berdasarkan Tanggal
                </Button>
                {showCalendar && (
                  <div className="absolute top-32 right-4 z-50">
                    <Calendar04 />
                  </div>
                )}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex px-4 lg:px-6 border-b border-gray-200 dark:border-gray-700">
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "salesPerformance"
                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("salesPerformance")}
              >
                Sales Performance
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "salesUnderperformance"
                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("salesUnderperformance")}
              >
                Sales Underperformance
              </button>
            </div>

            {/* Tab Content */}
            <div className="px-4 lg:px-6 mb-6">
              {activeTab === "salesPerformance" && <SalesPerformanceTab />}
              {activeTab === "salesUnderperformance" && (
                <SalesUnderperformanceTab />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}