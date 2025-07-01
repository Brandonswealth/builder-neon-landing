import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar />
        <main className={cn("flex-1 ml-64", className)}>
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <main className={cn("pb-16", className)}>
          <div className="p-4">{children}</div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
