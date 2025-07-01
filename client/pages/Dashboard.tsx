import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  TrendingUp,
  Users,
  FileText,
  AlertCircle,
  Plus,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    title: "Active Projects",
    value: "23",
    change: "+5 this month",
    icon: FileText,
    color: "text-blue-600",
    trend: "up",
  },
  {
    title: "Tasks Due Today",
    value: "12",
    change: "2 overdue",
    icon: Clock,
    color: "text-orange-600",
    trend: "down",
  },
  {
    title: "Team Members",
    value: "47",
    change: "+8 this week",
    icon: Users,
    color: "text-green-600",
    trend: "up",
  },
  {
    title: "Revenue This Month",
    value: "$2.4M",
    change: "+23% vs last month",
    icon: TrendingUp,
    color: "text-primary",
    trend: "up",
  },
];

const recentProjects = [
  {
    name: "SkyTower Downtown Complex",
    status: "In Progress",
    progress: 72,
    dueDate: "Mar 15, 2025",
    team: 15,
    budget: "$4.2M",
    location: "Downtown Seattle",
    phase: "Foundation & Structure",
  },
  {
    name: "Riverside Residential Village",
    status: "Planning",
    progress: 18,
    dueDate: "Aug 30, 2025",
    team: 8,
    budget: "$12.8M",
    location: "Bellevue, WA",
    phase: "Pre-Construction",
  },
  {
    name: "Metro Mall Renovation",
    status: "Review",
    progress: 94,
    dueDate: "Dec 10, 2024",
    team: 22,
    budget: "$890K",
    location: "Tacoma, WA",
    phase: "Final Inspections",
  },
  {
    name: "Industrial Warehouse Expansion",
    status: "In Progress",
    progress: 45,
    dueDate: "Feb 28, 2025",
    team: 12,
    budget: "$2.1M",
    location: "Kent, WA",
    phase: "Structural Work",
  },
  {
    name: "Green Hospital Wing",
    status: "Bidding",
    progress: 8,
    dueDate: "Oct 15, 2025",
    team: 6,
    budget: "$18.5M",
    location: "Seattle, WA",
    phase: "Design Development",
  },
];

const aiRecommendations = [
  {
    title: "Submit structural drawings to city",
    project: "SkyTower Downtown Complex",
    priority: "High",
    type: "Permit Review",
    dueDate: "Tomorrow",
    estimatedTime: "2 hours",
  },
  {
    title: "Schedule concrete pour inspection",
    project: "Industrial Warehouse Expansion",
    priority: "High",
    type: "Inspection",
    dueDate: "Dec 3",
    estimatedTime: "30 mins",
  },
  {
    title: "RFI: HVAC system modifications",
    project: "Riverside Residential Village",
    priority: "Medium",
    type: "Change Order",
    dueDate: "Dec 5",
    estimatedTime: "1 hour",
  },
  {
    title: "Update material costs for Q1",
    project: "Metro Mall Renovation",
    priority: "Medium",
    type: "Cost Analysis",
    dueDate: "Dec 8",
    estimatedTime: "3 hours",
  },
  {
    title: "Review subcontractor bids",
    project: "Green Hospital Wing",
    priority: "Low",
    type: "Procurement",
    dueDate: "Dec 12",
    estimatedTime: "4 hours",
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.change}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full bg-accent/10 ${stat.color}`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <Card className="lg:col-span-2 bg-card border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Recent Projects</CardTitle>
              <Button variant="ghost" size="sm">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">
                          {project.name}
                        </h3>
                        <Badge
                          variant={
                            project.status === "In Progress"
                              ? "default"
                              : project.status === "Planning"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {project.dueDate}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1 h-3 w-3" />
                          {project.team} members
                        </span>
                        <span className="font-medium text-foreground">
                          {project.budget}
                        </span>
                        <span>{project.phase}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        📍 {project.location}
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2 transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-accent" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {aiRecommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-3 border border-border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm text-foreground">
                        {rec.title}
                      </h4>
                      <Badge
                        variant={
                          rec.priority === "High"
                            ? "destructive"
                            : rec.priority === "Medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {rec.project}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-accent">{rec.type}</span>
                      <span className="text-muted-foreground">
                        Due: {rec.dueDate}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Est: {rec.estimatedTime}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
