// src/components/dashboard/KanwilNetChart.jsx
export default function KanwilNetChart() {
  const chartData = [
    { name: "KANWIL MAKASSAR", nqa: 28, nett: 25 },
    { name: "KANWIL DENPASAR", nqa: 22, nett: 18 },
    { name: "KANWIL PADANG", nqa: 8, nett: 10 },
    { name: "KANWIL MANADO", nqa: 2, nett: 3 },
    { name: "KANWIL BANDAR LAMPUNG", nqa: 1, nett: 1.5 },
    { name: "KANWIL BANDUNG", nqa: 1, nett: 2 },
    { name: "KANWIL SURABAYA", nqa: 1, nett: 1 },
    { name: "KANWIL PALEMBANG", nqa: 1, nett: 0.5 },
  ];

  const maxVal = Math.max(...chartData.map((d) => Math.max(d.nqa, d.nett)));
  const scaleFactor = 100 / maxVal; // Skala bar dari 0-100%

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-md shadow">
      <h3 className="text-lg font-semibold mb-4">
        TOTAL NQA and TOTAL NETT by KANWIL
      </h3>
      <div className="flex flex-col h-[300px] justify-between">
        {" "}
        {/* Adjusted height */}
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center mb-1">
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 w-28 text-right pr-2">
              {item.name.replace("KANWIL ", "")}
            </div>
            <div className="flex flex-grow flex-col">
              <div className="flex items-center">
                <div
                  className="bg-blue-500 h-3 rounded-r" // Slightly thinner bar
                  style={{ width: `${item.nqa * scaleFactor}%` }}
                ></div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {item.nqa}
                </span>
              </div>
              <div className="flex items-center mt-0.5">
                {" "}
                {/* Small gap between bars */}
                <div
                  className="bg-red-500 h-3 rounded-r" // Change to red for Nett based on image
                  style={{ width: `${item.nett * scaleFactor}%` }}
                ></div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {item.nett}
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* X-Axis Labels */}
        <div className="w-full flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 px-32">
          {" "}
          {/* Adjusted padding to align with bars */}
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>
      </div>
    </div>
  );
}