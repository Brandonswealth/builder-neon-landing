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
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "AI Estimating", href: "/estimating", icon: Bot },
  { name: "Projects", href: "/projects", icon: FileText },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Documents", href: "/documents", icon: FolderOpen },
  { name: "CRM", href: "/crm", icon: Users },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">
                B
              </span>
            </div>
            <span className="text-sidebar-foreground font-semibold text-xl">
              BlueSQ
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
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
