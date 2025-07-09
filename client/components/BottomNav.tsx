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
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-border/50 safe-area-pb">
      <nav className="flex items-center justify-around px-2 py-1 pb-safe">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center p-3 rounded-xl transition-all duration-200 min-w-0 active:scale-95",
                item.isAdd
                  ? "bg-primary text-primary-foreground shadow-lg transform scale-110"
                  : isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground active:bg-muted/50",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center rounded-full transition-all",
                  item.isAdd && "bg-white/20 p-1",
                )}
              >
                <item.icon
                  className={cn(
                    "transition-all",
                    item.isAdd ? "h-7 w-7" : "h-6 w-6",
                    isActive && !item.isAdd && "scale-110",
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-xs font-medium mt-1 transition-all",
                  isActive && "font-semibold",
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
