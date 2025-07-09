import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  TrendingUp,
  Users,
  FileText,
  AlertTriangle,
  Plus,
  ChevronRight,
  Bot,
  Calculator,
  CheckSquare,
  Bell,
  Search,
} from "lucide-react";

const quickStats = [
  { title: "Projects", value: "23", color: "bg-blue-500", icon: FileText },
  { title: "Tasks", value: "47", color: "bg-green-500", icon: CheckSquare },
  {
    title: "Revenue",
    value: "$2.4M",
    color: "bg-purple-500",
    icon: TrendingUp,
  },
  { title: "Team", value: "47", color: "bg-orange-500", icon: Users },
];

const quickActions = [
  {
    title: "Estimating",
    subtitle: "AI takeoffs",
    icon: Bot,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    href: "/estimating",
  },
  {
    title: "Bid Mgmt",
    subtitle: "Proposals",
    icon: Calculator,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    href: "/bidding",
  },
  {
    title: "Projects",
    subtitle: "Management",
    icon: FileText,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    href: "/projects",
  },
  {
    title: "Field Tools",
    subtitle: "Productivity",
    icon: Plus,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    href: "/field",
  },
];

const recentActivity = [
  {
    title: "Foundation pour scheduled",
    project: "SkyTower Downtown",
    time: "2 hours ago",
    type: "schedule",
  },
  {
    title: "Bid submitted",
    project: "Metro Hospital Wing",
    time: "4 hours ago",
    type: "bid",
  },
  {
    title: "Task completed",
    project: "Warehouse Expansion",
    time: "6 hours ago",
    type: "task",
  },
];

export function MobileDashboard() {
  return (
    <div className="space-y-6">
      {/* iOS Header */}
      <div className="flex items-center justify-between px-1 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Good Morning</h1>
          <p className="text-muted-foreground">John Constructor</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full bg-gray-100 relative"
          >
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
          </Button>
        </div>
      </div>

      {/* Comprehensive Features Badge */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-4">
        <CardContent className="p-3">
          <div className="text-center">
            <p className="text-xs font-semibold text-primary mb-2">
              COMPLETE CONSTRUCTION PLATFORM
            </p>
            <div className="flex flex-wrap gap-1 justify-center">
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Design
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Estimating
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Documents
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Projects
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Bids
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                BIM
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Financial
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Scheduling
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Field
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                AI
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Integrations
              </span>
              <span className="text-xs bg-white/70 text-primary px-2 py-1 rounded">
                Marketplace
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {quickStats.map((stat) => (
          <Card
            key={stat.title}
            className="border-0 shadow-sm bg-white rounded-2xl"
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3 px-1">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant="ghost"
              className="h-auto p-0 bg-white rounded-2xl shadow-sm active:scale-95 transition-transform"
              onClick={() => (window.location.href = action.href)}
            >
              <Card className="w-full border-0 shadow-none">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`p-3 rounded-2xl ${action.color} shadow-lg`}
                    >
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {action.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Button>
          ))}
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-lg font-semibold text-foreground">
            Active Projects
          </h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-3">
          <Card className="border-0 shadow-sm bg-white rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    SkyTower Downtown
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Seattle, WA • $4.2M
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">
                  72% Complete
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span>Due: Mar 15, 2025</span>
                <span>15 team members</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Metro Mall Renovation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tacoma, WA • $890K
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  94% Complete
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span>Due: Dec 10, 2024</span>
                <span>22 team members</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3 px-1">
          Recent Activity
        </h2>
        <Card className="border-0 shadow-sm bg-white rounded-2xl">
          <CardContent className="p-4">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.project}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* iOS Style Today's Tasks */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3 px-1">
          Today's Tasks
        </h2>
        <Card className="border-0 shadow-sm bg-white rounded-2xl">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Submit structural drawings
                  </p>
                  <p className="text-xs text-muted-foreground">
                    SkyTower Downtown • Due in 2 hours
                  </p>
                </div>
                <Badge className="bg-red-100 text-red-700 border-0 text-xs">
                  High
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Schedule concrete pour
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Warehouse Expansion • Due today
                  </p>
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-0 text-xs">
                  Medium
                </Badge>
              </div>

              <Button variant="ghost" size="sm" className="w-full text-primary">
                View All Tasks
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
