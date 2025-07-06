import CabangPage from "@/components/master/cabang-page";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader title="Cabang" />
      <div className="flex flex-1 flex-col">
        <div className="w-full">
            <CabangPage/>
        </div>
      </div>
    </>
  );
}
