// src/components/dashboard/UnderperformSOTable.jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UnderperformSOTable() {
  // Data dummy, ganti dengan data aktual Anda
  const allUnderperformSOTableData = [
    {
      id: 1,
      name: "RAGIL FAITURRAHMAN",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "1 Tahun 8 Bulan 24...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 2,
      name: "MELKY TUMIJANTOUW",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MANADO",
      masaKerja: "2 Tahun 0 Bulan 24...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 3,
      name: "NIRSA INDIRA PUTRI",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "2 Tahun 8 Bulan 17...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 4,
      name: "SASMITA WULANDARI",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "2 Tahun 8 Bulan 17...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 5,
      name: "CHANDRA GAUG",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "2 Tahun 8 Bulan 11...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 6,
      name: "DIAN WASHILA",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 8 Bulan 27...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 7,
      name: "DWI FITRIA",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 6 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 8,
      name: "NIAR FEDIWIRSYAH",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 5 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 9,
      name: "NURCAIN YELIPEL",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MANADO",
      masaKerja: "0 Tahun 1 Bulan 14...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 10,
      name: "BENEDIKTA MUSDETH...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 1 Bulan 8...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 11,
      name: "MOISES DE ANDRADE...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 1 Bulan 14...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 12,
      name: "NETI MARTANTI SABAT",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL DENPASAR",
      masaKerja: "0 Tahun 0 Bulan 27...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 13,
      name: "ZULFA SATYA NUGRAHA",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL BANDUNG",
      masaKerja: "1 Tahun 8 Bulan 0...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 14,
      name: "NOVI MAIDONA",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL PADANG",
      masaKerja: "2 Tahun 9 Bulan 3...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 15,
      name: "DELA SARY",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL PADANG",
      masaKerja: "1 Tahun 11 Bulan 2...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 16,
      name: "PRIDIKE MORLIANA P...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL PALEMBANG",
      masaKerja: "2 Tahun 0 Bulan 19...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 17,
      name: "TIMMIANNIS",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL PADANG",
      masaKerja: "2 Tahun 8 Bulan 10...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 18,
      name: "IRWAN DANI MUJUKUN",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL SURABAYA",
      masaKerja: "1 Tahun 5 Bulan 4...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 19,
      name: "RULI SEPTIYANTI PRA...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "1 Tahun 1 Bulan 9...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 20,
      name: "NOVITA ANDOON PRA...",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 8 Bulan 9...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 21,
      name: "FAJRIN B. ANDY",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL MAKASSAR",
      masaKerja: "0 Tahun 3 Bulan 16...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 22,
      name: "JOHN DOE",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 1 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 23,
      name: "JANE SMITH",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 2 Bulan 0...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 24,
      name: "PETER JONES",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 3 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 25,
      name: "ALICE BROWN",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 4 Bulan 0...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 26,
      name: "BOB WHITE",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 5 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 27,
      name: "CHRIS GREEN",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 6 Bulan 0...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
    {
      id: 28,
      name: "DANA BLACK",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 7 Bulan 0...",
      totalNett: 0,
      target: "600.000.000",
      progress: 0,
    },
    {
      id: 29,
      name: "EVE BLUE",
      quadrant: "QUADRAN 4",
      kanwil: "KANWIL JAKARTA",
      masaKerja: "0 Tahun 8 Bulan 0...",
      totalNett: 0,
      target: "230.000.000",
      progress: 0,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Max data 10 tiap pagination

  const totalPages = Math.ceil(
    allUnderperformSOTableData.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allUnderperformSOTableData.slice(startIndex, endIndex);

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
      <h3 className="text-lg font-semibold mb-4">Tabel Nama SO Underperform</h3>
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
                MASA_KERJA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TOTAL NETT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Target
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
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
          {endIndex > allUnderperformSOTableData.length
            ? allUnderperformSOTableData.length
            : endIndex}{" "}
          / {allUnderperformSOTableData.length}
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