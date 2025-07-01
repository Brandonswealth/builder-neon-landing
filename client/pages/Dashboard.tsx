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
    value: "12",
    change: "+2 this month",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Tasks Due Today",
    value: "8",
    change: "3 overdue",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+3 this week",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Revenue This Month",
    value: "$127K",
    change: "+15% vs last month",
    icon: TrendingUp,
    color: "text-primary",
  },
];

const recentProjects = [
  {
    name: "Downtown Office Complex",
    status: "In Progress",
    progress: 65,
    dueDate: "Dec 15, 2024",
    team: 8,
  },
  {
    name: "Residential Development",
    status: "Planning",
    progress: 25,
    dueDate: "Jan 30, 2025",
    team: 5,
  },
  {
    name: "Commercial Renovation",
    status: "Review",
    progress: 90,
    dueDate: "Nov 28, 2024",
    team: 12,
  },
];

const aiRecommendations = [
  {
    title: "Review permit application",
    project: "Downtown Office Complex",
    priority: "High",
    type: "Permit Review",
  },
  {
    title: "RFI for electrical changes",
    project: "Residential Development",
    priority: "Medium",
    type: "Change Order",
  },
  {
    title: "Update material takeoffs",
    project: "Commercial Renovation",
    priority: "Low",
    type: "Estimation",
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
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {project.dueDate}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {project.team} members
                        </span>
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
                    <p className="text-xs text-accent">{rec.type}</p>
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
