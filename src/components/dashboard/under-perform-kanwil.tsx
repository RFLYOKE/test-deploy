// src/components/dashboard/UnderperformKanwilChart.jsx
export default function UnderperformKanwilChart() {
  const kanwilData = [
    { name: "KANWIL MAKASSAR", value: 11 },
    { name: "KANWIL DENPASAR", value: 7 },
    { name: "KANWIL PADANG", value: 3 },
    { name: "KANWIL MANADO", value: 2 },
    { name: "KANWIL BANDAR LAMPUNG", value: 1 },
    { name: "KANWIL BANDUNG", value: 1 },
    { name: "KANWIL SURABAYA", value: 1 },
    { name: "KANWIL PALEMBANG", value: 1 },
  ];

  const maxValue = Math.max(...kanwilData.map((d) => d.value));
  const scaleFactor = 100 / maxValue;

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-md shadow">
      <h3 className="text-lg font-semibold mb-4">
        KANWIL dengan SO Underperform Terbanyak
      </h3>
      <div className="h-64 flex flex-col justify-between">
        {kanwilData.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 w-32 text-right pr-2">
              {item.name}
            </div>
            <div className="flex flex-grow items-center">
              <div
                className="bg-red-500 h-4 rounded-r"
                style={{ width: `${item.value * scaleFactor * 0.8}%` }} // Adjusted for better visual
              ></div>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {item.value}
              </span>
            </div>
          </div>
        ))}
        {/* X-Axis Labels */}
        <div className="w-full flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 px-[140px]">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>6</span>
          <span>8</span>
          <span>10</span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
}