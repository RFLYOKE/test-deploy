import UnderperformKanwilChart from "./under-perform-kanwil";
import UnderperformSOTable from "./underperform-so-table";

export default function SalesUnderperformanceTab() {
  return (
    <div className="flex flex-col gap-6">
      <UnderperformKanwilChart />
      <UnderperformSOTable />
    </div>
  );
}