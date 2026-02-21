import { DashboardHeader } from "@/components/DashboardHeader";
import { SideNav } from "@/components/SideNav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed hidden md:block md:w-64 border shadow-sm">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
