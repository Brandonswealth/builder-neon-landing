import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { HelpWidget } from "./HelpWidget";
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

      {/* iOS Mobile Layout */}
      <div className="md:hidden">
        {/* iOS Status Bar Space */}
        <div className="h-safe-top bg-background"></div>

        <main className={cn("pb-28 min-h-screen bg-gray-50", className)}>
          <div className="p-4 space-y-4">{children}</div>
        </main>
        <BottomNav />
      </div>

      {/* Help Widget - Available on all pages */}
      <HelpWidget />
    </div>
  );
}
