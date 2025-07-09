import { Layout } from "@/components/Layout";
import { MobileProjects } from "@/components/MobileProjects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Plus,
  Calendar,
  Users,
  DollarSign,
  MapPin,
  Clock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "SkyTower Downtown Complex",
    status: "In Progress",
    progress: 72,
    budget: "$4.2M",
    spent: "$3.1M",
    location: "Downtown Seattle",
    startDate: "Jan 15, 2024",
    endDate: "Mar 15, 2025",
    team: 15,
    phase: "Foundation & Structure",
    client: "Metropolitan Development Group",
    manager: "Sarah Johnson",
    priority: "High",
  },
  {
    id: 2,
    name: "Riverside Residential Village",
    status: "Planning",
    progress: 18,
    budget: "$12.8M",
    spent: "$1.2M",
    location: "Bellevue, WA",
    startDate: "Nov 1, 2024",
    endDate: "Aug 30, 2025",
    team: 8,
    phase: "Pre-Construction",
    client: "Riverside Communities LLC",
    manager: "Mike Chen",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Metro Mall Renovation",
    status: "Near Completion",
    progress: 94,
    budget: "$890K",
    spent: "$845K",
    location: "Tacoma, WA",
    startDate: "Aug 1, 2024",
    endDate: "Dec 10, 2024",
    team: 22,
    phase: "Final Inspections",
    client: "Pacific Retail Partners",
    manager: "Jennifer Liu",
    priority: "High",
  },
  {
    id: 4,
    name: "Industrial Warehouse Expansion",
    status: "In Progress",
    progress: 45,
    budget: "$2.1M",
    spent: "$950K",
    location: "Kent, WA",
    startDate: "Sep 15, 2024",
    endDate: "Feb 28, 2025",
    team: 12,
    phase: "Structural Work",
    client: "Northwest Logistics Corp",
    manager: "David Rodriguez",
    priority: "Medium",
  },
  {
    id: 5,
    name: "Green Hospital Wing",
    status: "Bidding",
    progress: 8,
    budget: "$18.5M",
    spent: "$485K",
    location: "Seattle, WA",
    startDate: "Dec 1, 2024",
    endDate: "Oct 15, 2025",
    team: 6,
    phase: "Design Development",
    client: "Seattle Medical Center",
    manager: "Dr. Amanda Foster",
    priority: "High",
  },
];

const upcomingMilestones = [
  {
    project: "SkyTower Downtown Complex",
    milestone: "Foundation Pour Complete",
    date: "Dec 5, 2024",
    status: "On Track",
  },
  {
    project: "Metro Mall Renovation",
    milestone: "Final Building Inspection",
    date: "Dec 8, 2024",
    status: "Scheduled",
  },
  {
    project: "Industrial Warehouse Expansion",
    milestone: "Steel Frame Installation",
    date: "Dec 12, 2024",
    status: "At Risk",
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Mobile iOS Projects */}
      <div className="md:hidden">
        <MobileProjects />
      </div>

      {/* Desktop Projects */}
      <div className="hidden md:block space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track all your construction projects
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Enterprise Project Controls */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">
                Enterprise Project Controls
              </h2>
              <Badge className="bg-accent text-accent-foreground">
                PROCORE-LEVEL
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">Portfolio Value</p>
                <p className="text-2xl font-bold text-foreground">$38.4M</p>
                <p className="text-xs text-green-600">+12% YoY</p>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Schedule Performance
                </p>
                <p className="text-2xl font-bold text-accent">94%</p>
                <p className="text-xs text-green-600">On-time delivery</p>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Cost Performance
                </p>
                <p className="text-2xl font-bold text-green-600">96%</p>
                <p className="text-xs text-green-600">Under budget</p>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">Quality Score</p>
                <p className="text-2xl font-bold text-primary">9.2/10</p>
                <p className="text-xs text-green-600">Client satisfaction</p>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">Safety Record</p>
                <p className="text-2xl font-bold text-green-600">0</p>
                <p className="text-xs text-green-600">Incidents</p>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-muted-foreground">Change Orders</p>
                <p className="text-2xl font-bold text-orange-600">2.1%</p>
                <p className="text-xs text-orange-600">Avg. impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Projects
                  </p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold text-foreground">$38.4M</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">At Risk</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list">Project List</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-4">
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-card border shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.name}
                          </h3>
                          <Badge
                            variant={
                              project.status === "In Progress"
                                ? "default"
                                : project.status === "Planning"
                                  ? "secondary"
                                  : project.status === "Near Completion"
                                    ? "outline"
                                    : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                          <Badge
                            variant={
                              project.priority === "High"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {project.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.client} • {project.phase}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {project.startDate} - {project.endDate}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {project.team} team members
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {project.spent} / {project.budget}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-foreground">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <Card className="bg-card border shadow-sm">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Calendar View
                </h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Interactive project timeline and scheduling calendar will be
                  implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-4">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Upcoming Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMilestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {milestone.milestone}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {milestone.project}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {milestone.date}
                        </p>
                        <Badge
                          variant={
                            milestone.status === "On Track"
                              ? "default"
                              : milestone.status === "At Risk"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {milestone.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
