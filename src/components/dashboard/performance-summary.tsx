// src/components/dashboard/PerformanceSummary.jsx
export default function PerformanceSummary() {
  // Data dummy, ganti dengan data aktual Anda
  const summaryData = [
    {
      label: "TOTAL NOA NEW",
      value: "71",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "TOTAL NETT NEW",
      value: "8.016.000.000",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      label: "Total Sales Officer",
      value: "69",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      label: "Total SO Active",
      value: "40",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      label: "Jumlah Kanwil",
      value: "12",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      label: "Jumlah Cabang",
      value: "51",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {summaryData.map((item) => (
        <div
          key={item.label}
          className={`${item.bgColor} p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center`}
        >
          <p className="text-md font-bold text-gray-700 dark:text-gray-900">
            {item.label}
          </p>
          <h2 className={`text-xl font-bold mt-1 ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}