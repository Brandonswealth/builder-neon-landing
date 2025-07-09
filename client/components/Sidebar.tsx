import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  FolderOpen,
  Users,
  Bot,
  Settings,
  LogOut,
  Calculator,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Design Coordinator", href: "/design", icon: FileText },
  { name: "Estimating & Takeoff", href: "/estimating", icon: Bot },
  { name: "Document Management", href: "/documents", icon: FolderOpen },
  { name: "Project Management", href: "/projects", icon: FileText },
  { name: "Bid Management", href: "/bidding", icon: Calculator },
  { name: "BIM", href: "/bim", icon: FileText },
  { name: "Financial Management", href: "/financial", icon: FileText },
  { name: "CRM", href: "/crm", icon: Users },
  { name: "Scheduling & Monitoring", href: "/scheduling", icon: CheckSquare },
  { name: "Field Productivity", href: "/field", icon: FileText },
  { name: "AI Assistance", href: "/ai", icon: Bot },
  { name: "Integrations", href: "/integrations", icon: FileText },
  { name: "Marketplace", href: "/marketplace", icon: FileText },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-sidebar shadow-lg">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center h-18 px-6 py-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F575b9b39645a4ea4b28723c1f3513cd6?format=webp&width=800"
              alt="BlueSQ Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-sm",
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-sidebar-border">
          <Link
            to="/settings"
            className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-lg transition-colors mb-2"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-lg transition-colors w-full">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
