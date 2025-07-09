import { Layout } from "@/components/Layout";
import { MobileDashboard } from "@/components/MobileDashboard";
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
  FolderOpen,
  CheckCircle,
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
      {/* Mobile iOS Dashboard */}
      <div className="md:hidden">
        <MobileDashboard />
      </div>

      {/* Desktop Dashboard */}
      <div className="hidden md:block space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Construction Command Center
            </h1>
            <p className="text-lg text-muted-foreground">
              Real contractors. Real results. Real control over your business.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Watch Demo
            </Button>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* 3-Click Demo - Buildertrend Style */}
        <Card className="bg-gradient-to-br from-slate-50 to-white border shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                CONSTRUCTION MANAGEMENT SOFTWARE
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Infinite potential. Total control.
              </h2>
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <CheckCircle className="h-5 w-5" />
                  <span>Unlimited users</span>
                </div>
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <CheckCircle className="h-5 w-5" />
                  <span>Unlimited projects</span>
                </div>
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <CheckCircle className="h-5 w-5" />
                  <span>Unlimited potential</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Workflow 1: AI Estimating */}
              <div
                className="text-center group cursor-pointer"
                onClick={() => (window.location.href = "/estimating")}
              >
                <div className="bg-accent/10 hover:bg-accent/20 rounded-xl p-6 transition-all group-hover:scale-105">
                  <div className="text-accent text-4xl mb-4">🤖</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Get Instant Estimate
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      <span>Upload Blueprint</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <span>AI Analyzes Materials</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <span>Get Cost Breakdown</span>
                    </div>
                  </div>
                  <Button
                    className="mt-4 bg-accent hover:bg-accent/90"
                    size="sm"
                  >
                    Try Now →
                  </Button>
                </div>
              </div>

              {/* Workflow 2: Task Management */}
              <div
                className="text-center group cursor-pointer"
                onClick={() => (window.location.href = "/tasks")}
              >
                <div className="bg-green-500/10 hover:bg-green-500/20 rounded-xl p-6 transition-all group-hover:scale-105">
                  <div className="text-green-600 text-4xl mb-4">✅</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Create & Assign Task
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      <span>Click "New Task"</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <span>Fill Task Details</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <span>Assign to Team</span>
                    </div>
                  </div>
                  <Button
                    className="mt-4 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    Create Task →
                  </Button>
                </div>
              </div>

              {/* Workflow 3: Project Status */}
              <div
                className="text-center group cursor-pointer"
                onClick={() => (window.location.href = "/projects")}
              >
                <div className="bg-blue-500/10 hover:bg-blue-500/20 rounded-xl p-6 transition-all group-hover:scale-105">
                  <div className="text-blue-600 text-4xl mb-4">📊</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Check Project Status
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      <span>Click "Projects"</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <span>Select Project</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <span>View Progress & Issues</span>
                    </div>
                  </div>
                  <Button
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
                    size="sm"
                  >
                    View Projects →
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Grid - Buildertrend Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="bg-card border shadow-md hover:shadow-lg transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 mb-4`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.title}
                  </p>
                  <p className="text-xs text-accent font-medium">
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-card border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              More 3-Click Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <Users className="h-6 w-6 text-green-600" />
                <div className="text-center">
                  <div className="text-xs font-medium">Add Team Member</div>
                  <div className="text-xs text-muted-foreground">
                    Invite • Set Role • Send
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <FolderOpen className="h-6 w-6 text-blue-600" />
                <div className="text-center">
                  <div className="text-xs font-medium">Upload Document</div>
                  <div className="text-xs text-muted-foreground">
                    Select • Tag • Share
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <Calendar className="h-6 w-6 text-purple-600" />
                <div className="text-center">
                  <div className="text-xs font-medium">Schedule Inspection</div>
                  <div className="text-xs text-muted-foreground">
                    Date • Inspector • Notify
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <AlertCircle className="h-6 w-6 text-orange-600" />
                <div className="text-center">
                  <div className="text-xs font-medium">Report Issue</div>
                  <div className="text-xs text-muted-foreground">
                    Photo • Description • Assign
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enterprise Construction Management */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  🏗️ Enterprise Construction Platform
                </h2>
                <p className="text-muted-foreground">
                  Procore-level project controls with Autodesk BIM integration
                </p>
              </div>
              <Badge className="bg-accent text-accent-foreground">
                ENTERPRISE
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-white/50 rounded-lg border border-white/20">
                <div className="text-primary text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-foreground text-sm">
                  Project Controls
                </h3>
                <p className="text-xs text-muted-foreground">
                  Real-time cost tracking
                </p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-white/20">
                <div className="text-primary text-2xl mb-2">🏗️</div>
                <h3 className="font-semibold text-foreground text-sm">
                  BIM Integration
                </h3>
                <p className="text-xs text-muted-foreground">
                  3D model coordination
                </p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-white/20">
                <div className="text-primary text-2xl mb-2">🤝</div>
                <h3 className="font-semibold text-foreground text-sm">
                  Collaboration
                </h3>
                <p className="text-xs text-muted-foreground">
                  Team coordination
                </p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-white/20">
                <div className="text-primary text-2xl mb-2">📱</div>
                <h3 className="font-semibold text-foreground text-sm">
                  Mobile First
                </h3>
                <p className="text-xs text-muted-foreground">
                  Field-ready tools
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => (window.location.href = "/bidding")}
              >
                Bid Management →
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => (window.location.href = "/projects")}
              >
                Project Controls →
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => (window.location.href = "/documents")}
              >
                Document Management →
              </Button>
            </div>
          </CardContent>
        </Card>

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
