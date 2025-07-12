import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Workflow as WorkflowIcon,
  Plus,
  Users,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  Filter,
  Search,
  MoreHorizontal,
  Play,
  Pause,
  Settings,
} from "lucide-react";

const workflowBoards = [
  {
    id: 1,
    name: "SkyTower Downtown Project",
    type: "Project Management",
    team: ["Sarah J.", "Mike C.", "Lisa R.", "Tom W."],
    tasks: 24,
    completed: 18,
    progress: 75,
    status: "On Track",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    name: "Leads & Sales Pipeline",
    type: "Sales Management",
    team: ["Jennifer L.", "David R.", "Amy K."],
    tasks: 32,
    completed: 20,
    progress: 62,
    status: "Active",
    lastUpdated: "1 hour ago",
  },
  {
    id: 3,
    name: "HR Onboarding Process",
    type: "Human Resources",
    team: ["HR Team", "Department Heads"],
    tasks: 15,
    completed: 12,
    progress: 80,
    status: "In Progress",
    lastUpdated: "30 minutes ago",
  },
  {
    id: 4,
    name: "Quality Control Checklist",
    type: "Quality Management",
    team: ["QC Inspectors", "Site Managers"],
    tasks: 18,
    completed: 16,
    progress: 89,
    status: "Near Complete",
    lastUpdated: "4 hours ago",
  },
];

const taskStatuses = [
  { name: "Not Started", count: 12, color: "bg-gray-200 text-gray-700" },
  { name: "In Progress", count: 8, color: "bg-blue-100 text-blue-700" },
  { name: "Review", count: 5, color: "bg-yellow-100 text-yellow-700" },
  { name: "Completed", count: 18, color: "bg-green-100 text-green-700" },
  { name: "On Hold", count: 3, color: "bg-red-100 text-red-700" },
];

const sampleTasks = [
  {
    id: 1,
    task: "Foundation inspection scheduled",
    person: "Mike C.",
    status: "In Progress",
    priority: "High",
    dueDate: "Dec 2, 2024",
    project: "SkyTower Downtown",
  },
  {
    id: 2,
    task: "Material delivery confirmation",
    person: "Sarah J.",
    status: "Completed",
    priority: "Medium",
    dueDate: "Nov 30, 2024",
    project: "SkyTower Downtown",
  },
  {
    id: 3,
    task: "Client proposal review",
    person: "Jennifer L.",
    status: "Review",
    priority: "High",
    dueDate: "Dec 1, 2024",
    project: "Leads Pipeline",
  },
  {
    id: 4,
    task: "New hire documentation",
    person: "HR Team",
    status: "Not Started",
    priority: "Medium",
    dueDate: "Dec 5, 2024",
    project: "HR Onboarding",
  },
];

const workflowTemplates = [
  {
    name: "Construction Project Management",
    description: "Complete project workflow from planning to completion",
    tasks: 45,
    category: "Project Management",
  },
  {
    name: "Sales Lead Management",
    description: "Track leads from initial contact to signed contract",
    tasks: 20,
    category: "Sales & Marketing",
  },
  {
    name: "Employee Onboarding",
    description: "Comprehensive new hire onboarding process",
    tasks: 15,
    category: "Human Resources",
  },
  {
    name: "Quality Control Process",
    description: "Standardized quality assurance checklist",
    tasks: 25,
    category: "Quality Management",
  },
];

export default function Workflow() {
  const [activeTab, setActiveTab] = useState("boards");
  const [selectedBoard, setSelectedBoard] = useState(workflowBoards[0]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Workflow Management
            </h1>
            <p className="text-muted-foreground mb-2">
              Monday.com-style project and process management for construction
              teams
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Workflow Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Project Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Scheduling & Monitoring
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                HR Service
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                AI Assistance
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Settings className="mr-2 h-4 w-4" />
              Automation
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Board
            </Button>
          </div>
        </div>

        {/* Workflow Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {taskStatuses.map((status) => (
            <Card key={status.name} className="bg-card border shadow-md">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">
                  {status.count}
                </p>
                <p className="text-sm text-muted-foreground">{status.name}</p>
                <Badge className={`mt-2 ${status.color} border-0`}>
                  {status.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="boards">My Boards</TabsTrigger>
            <TabsTrigger value="tasks">All Tasks</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="boards" className="space-y-4">
            <div className="grid gap-4">
              {workflowBoards.map((board) => (
                <Card
                  key={board.id}
                  className={`bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedBoard.id === board.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedBoard(board)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {board.name}
                          </h3>
                          <Badge variant="outline">{board.type}</Badge>
                          <Badge
                            className={
                              board.status === "On Track"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : board.status === "Active"
                                  ? "bg-blue-100 text-blue-700 border-blue-200"
                                  : "bg-orange-100 text-orange-700 border-orange-200"
                            }
                          >
                            {board.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {board.tasks} tasks • {board.completed} completed •
                          Updated {board.lastUpdated}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Progress
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {board.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${board.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div className="flex -space-x-2">
                          {board.team.slice(0, 3).map((member, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
                            >
                              {member.slice(0, 2)}
                            </div>
                          ))}
                          {board.team.length > 3 && (
                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground border-2 border-white">
                              +{board.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Open Board
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            {/* Search and Filter */}
            <Card className="bg-card border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Search tasks..."
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Monday.com Style Task Table */}
            <Card className="bg-card border shadow-md">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="text-left p-4 font-medium text-foreground">
                          Task
                        </th>
                        <th className="text-left p-4 font-medium text-foreground">
                          Person
                        </th>
                        <th className="text-left p-4 font-medium text-foreground">
                          Status
                        </th>
                        <th className="text-left p-4 font-medium text-foreground">
                          Priority
                        </th>
                        <th className="text-left p-4 font-medium text-foreground">
                          Due Date
                        </th>
                        <th className="text-left p-4 font-medium text-foreground">
                          Project
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleTasks.map((task) => (
                        <tr
                          key={task.id}
                          className="border-b border-border hover:bg-muted/20"
                        >
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium text-foreground">
                                {task.task}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white">
                                {task.person.slice(0, 2)}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {task.person}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              className={
                                task.status === "Completed"
                                  ? "bg-green-100 text-green-700 border-0"
                                  : task.status === "In Progress"
                                    ? "bg-blue-100 text-blue-700 border-0"
                                    : task.status === "Review"
                                      ? "bg-yellow-100 text-yellow-700 border-0"
                                      : "bg-gray-100 text-gray-700 border-0"
                              }
                            >
                              {task.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge
                              variant={
                                task.priority === "High"
                                  ? "destructive"
                                  : "secondary"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {task.dueDate}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-muted-foreground">
                              {task.project}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflowTemplates.map((template, index) => (
                <Card
                  key={index}
                  className="bg-card border shadow-md hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {template.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {template.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{template.tasks} tasks</span>
                          <Badge variant="outline">{template.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Team Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Track team productivity and task completion rates
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Project Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <WorkflowIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Workflow efficiency analysis and process optimization
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
