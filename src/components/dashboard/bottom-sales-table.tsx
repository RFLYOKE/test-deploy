// src/components/dashboard/BottomSalesTable.jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BottomSalesTable() {
  // Data dummy, ganti dengan data aktual Anda
  const allBottomPerformers = [
    {
      id: 1,
      name: "ABESTA PUTRI MAMUASA",
      quadrant: "QUADRAN 1",
      kanwil: "KANWIL MANADO",
      masaKerja: "0 Tahun 1 Bulan 14 Hari",
      totalNett: "13.000.000",
      target: "230.000.000",
      progress: "5.65%",
    },
    {
      id: 2,
      name: "A. REST DARMAWATI",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 11 Bulan 7 Hari",
      totalNett: "20.000.000",
      target: "600.000.000",
      progress: "3.33%",
    },
    {
      id: 3,
      name: "SYNDI NAHAS",
      quadrant: "QUADRAN 1",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 1 Bulan 14 Hari",
      totalNett: "25.000.000",
      target: "230.000.000",
      progress: "10.87%",
    },
    {
      id: 4,
      name: "RESTI WULANDARI MUC...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 8 Bulan 27 Hari",
      totalNett: "45.000.000",
      target: "600.000.000",
      progress: "7.5%",
    },
    {
      id: 5,
      name: "MUHAMMAD SULUAJUR",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "1 Tahun 8 Bulan 22 Hari",
      totalNett: "50.000.000",
      target: "600.000.000",
      progress: "8.33%",
    },
    {
      id: 6,
      name: "ADINDA KINANTI MUSTI...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL YOGYAKARTA",
      masaKerja: "0 Tahun 5 Bulan 4 Hari",
      totalNett: "50.000.000",
      target: "600.000.000",
      progress: "8.33%",
    },
    {
      id: 7,
      name: "DANA GERALDA",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "1 Tahun 1 Bulan 8 Hari",
      totalNett: "50.000.000",
      target: "600.000.000",
      progress: "8.33%",
    },
    {
      id: 8,
      name: "MIRANDA GEBYANI KORI",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 11 Bulan 22...",
      totalNett: "60.000.000",
      target: "600.000.000",
      progress: "10%",
    },
    {
      id: 9,
      name: "TITIN RACHMANIAH",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL SURABAYA",
      masaKerja: "0 Tahun 10 Bulan 16...",
      totalNett: "64.000.000",
      target: "600.000.000",
      progress: "10.67%",
    },
    {
      id: 10,
      name: "PRETTY NUNISKY TRIANI ...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 0 Bulan 26 Hari",
      totalNett: "70.000.000",
      target: "230.000.000",
      progress: "30.43%",
    },
    // Tambahkan lebih banyak data dummy agar pagination terlihat
    {
      id: 11,
      name: "ADDITIONAL BOTTOM 1",
      quadrant: "QUADRAN 1",
      kanwil: "KANWIL BALI",
      masaKerja: "0 Tahun 1 Bulan 0 Hari",
      totalNett: "5.000.000",
      target: "100.000.000",
      progress: "5%",
    },
    {
      id: 12,
      name: "ADDITIONAL BOTTOM 2",
      quadrant: "QUADRAN 2",
      kanwil: "KANWIL JOGJA",
      masaKerja: "0 Tahun 3 Bulan 0 Hari",
      totalNett: "10.000.000",
      target: "200.000.000",
      progress: "5%",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(allBottomPerformers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allBottomPerformers.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-md shadow">
      <h3 className="text-lg font-semibold mb-4">BOTTOM Sales Performance</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-zinc-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAMA SO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QUADRANT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                KANWIL BRI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Masa Kerja
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TOTAL NETT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Target
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress KPI
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-zinc-800 dark:divide-gray-700">
            {currentItems.map((so) => (
              <tr key={so.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {so.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.quadrant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.kanwil}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.masaKerja}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.totalNett}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.target}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {so.progress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {startIndex + 1} -{" "}
          {endIndex > allBottomPerformers.length
            ? allBottomPerformers.length
            : endIndex}{" "}
          / {allBottomPerformers.length}
        </span>
        <Button
          variant="outline"
          size="sm"
          className="ml-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="ml-1"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </Button>
      </div>
    </div>
  );
}