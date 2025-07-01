import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CheckSquare,
  Plus,
  FolderOpen,
  User,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Add", href: "/add", icon: Plus, isAdd: true },
  { name: "Files", href: "/documents", icon: FolderOpen },
  { name: "Account", href: "/account", icon: User },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <nav className="flex items-center justify-around py-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors min-w-0",
                item.isAdd
                  ? "bg-primary text-primary-foreground"
                  : isActive
                    ? "text-primary"
                    : "text-muted-foreground",
              )}
            >
              <item.icon
                className={cn("h-5 w-5 mb-1", item.isAdd && "h-6 w-6")}
              />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
