// src/components/dashboard/TopSalesTable.jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TopSalesTable() {
  // Data dummy, ganti dengan data aktual Anda
  const allTopPerformers = [
    {
      id: 1,
      name: "HASESTA",
      quadrant: "QUADRAN 1",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 0 Bulan 27 Hari",
      totalNett: "11.000.000",
      target: "230.000.000",
      progress: "255.65%",
    },
    {
      id: 2,
      name: "DARMAWAN",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 10 Bulan 14 Hari",
      totalNett: "555.000.000",
      target: "600.000.000",
      progress: "92.5%",
    },
    {
      id: 3,
      name: "SONIA SITIANI SAR...",
      quadrant: "QUADRAN 2",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "1 Tahun 10 Bulan 23 Hari",
      totalNett: "550.000.000",
      target: "600.000.000",
      progress: "91.67%",
    },
    {
      id: 4,
      name: "ABDUL AZID",
      quadrant: "QUADRAN 2",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "1 Tahun 2 Bulan 15 Hari",
      totalNett: "545.000.000",
      target: "600.000.000",
      progress: "90.83%",
    },
    {
      id: 5,
      name: "ANDRE VERXIO",
      quadrant: "QUADRAN 2",
      kanwil: "KANWIL JAKARTA 2",
      masaKerja: "2 Tahun 8 Bulan 17 Hari",
      totalNett: "500.000.000",
      target: "600.000.000",
      progress: "88.33%",
    },
    {
      id: 6,
      name: "DONI KOJE",
      quadrant: "QUADRAN 3",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 8 Bulan 16 Hari",
      totalNett: "390.000.000",
      target: "230.000.000",
      progress: "165.57%",
    },
    {
      id: 7,
      name: "RISKA DWI ANDRYANI",
      quadrant: "QUADRAN 3",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "1 Tahun 3 Bulan 27 Hari",
      totalNett: "379.000.000",
      target: "600.000.000",
      progress: "65.17%",
    },
    {
      id: 8,
      name: "MUSTAINO LALLO",
      quadrant: "QUADRAN 3",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "1 Tahun 2 Bulan 18 Hari",
      totalNett: "323.000.000",
      target: "600.000.000",
      progress: "55.83%",
    },
    {
      id: 9,
      name: "YUDADE TIARA",
      quadrant: "QUADRAN 3",
      kanwil: "KANWIL BANDUNG",
      masaKerja: "0 Tahun 1 Bulan 26 Hari",
      totalNett: "315.000.000",
      target: "230.000.000",
      progress: "136.96%",
    },
    {
      id: 10,
      name: "SULKIFLI MUSTRAINI...",
      quadrant: "QUADRAN 3",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 11 Bulan 6 Hari",
      totalNett: "314.000.000",
      target: "600.000.000",
      progress: "52.33%",
    },
    // Tambahkan lebih banyak data dummy agar pagination terlihat
    {
      id: 11,
      name: "ADDITIONAL TOP 1",
      quadrant: "QUADRAN 1",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "1 Tahun 0 Bulan 0 Hari",
      totalNett: "200.000.000",
      target: "400.000.000",
      progress: "50%",
    },
    {
      id: 12,
      name: "ADDITIONAL TOP 2",
      quadrant: "QUADRAN 2",
      kanwil: "KANWIL SURABAYA",
      masaKerja: "0 Tahun 6 Bulan 0 Hari",
      totalNett: "150.000.000",
      target: "300.000.000",
      progress: "50%",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(allTopPerformers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allTopPerformers.slice(startIndex, endIndex);

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
      <h3 className="text-lg font-semibold mb-4">TOP Sales Performance</h3>
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
          {endIndex > allTopPerformers.length
            ? allTopPerformers.length
            : endIndex}{" "}
          / {allTopPerformers.length}
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