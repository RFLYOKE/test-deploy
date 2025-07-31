import PerformanceSummary from "./performance-summary";
import TopSalesTable from "./top-sales-table";
import BottomSalesTable from "./bottom-sales-table";
import KanwilNetChart from "./kanwil-net-chart";

export default function SalesPerformanceTab() {
  return (
    <div className="flex flex-col gap-6">
      <PerformanceSummary />
      <KanwilNetChart />
      <div className="w-full flex gap-2">
        <div className="w-full lg:w-1/2">
          <TopSalesTable />
        </div>
        <div className="w-full lg:w-1/2">
          <BottomSalesTable />
        </div>
      </div>
    </div>
  );
}
