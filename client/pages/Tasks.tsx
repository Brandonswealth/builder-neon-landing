import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckSquare,
  Plus,
  Calendar,
  User,
  Clock,
  AlertTriangle,
  CheckCircle,
  Circle,
  MoreHorizontal,
} from "lucide-react";

const taskColumns = [
  {
    id: "todo",
    title: "To Do",
    count: 8,
    color: "bg-slate-100",
  },
  {
    id: "inprogress",
    title: "In Progress",
    count: 5,
    color: "bg-blue-100",
  },
  {
    id: "review",
    title: "Review",
    count: 3,
    color: "bg-yellow-100",
  },
  {
    id: "done",
    title: "Done",
    count: 12,
    color: "bg-green-100",
  },
];

const tasks = {
  todo: [
    {
      id: 1,
      title: "Submit structural drawings to city",
      project: "SkyTower Downtown",
      assignee: "Sarah Johnson",
      priority: "High",
      dueDate: "Dec 2, 2024",
      tags: ["Permits", "Structural"],
    },
    {
      id: 2,
      title: "Order steel beams for foundation",
      project: "Warehouse Expansion",
      assignee: "Mike Chen",
      priority: "Medium",
      dueDate: "Dec 5, 2024",
      tags: ["Materials", "Procurement"],
    },
    {
      id: 3,
      title: "Schedule concrete pour",
      project: "Riverside Village",
      assignee: "Jennifer Liu",
      priority: "High",
      dueDate: "Dec 3, 2024",
      tags: ["Scheduling", "Concrete"],
    },
  ],
  inprogress: [
    {
      id: 4,
      title: "Foundation excavation Phase 2",
      project: "SkyTower Downtown",
      assignee: "David Rodriguez",
      priority: "High",
      dueDate: "Dec 8, 2024",
      tags: ["Excavation", "Foundation"],
    },
    {
      id: 5,
      title: "HVAC system design review",
      project: "Hospital Wing",
      assignee: "Amanda Foster",
      priority: "Medium",
      dueDate: "Dec 10, 2024",
      tags: ["HVAC", "Design"],
    },
  ],
  review: [
    {
      id: 6,
      title: "Electrical inspection report",
      project: "Metro Mall",
      assignee: "Tom Wilson",
      priority: "High",
      dueDate: "Dec 1, 2024",
      tags: ["Electrical", "Inspection"],
    },
    {
      id: 7,
      title: "Material cost estimation",
      project: "Warehouse Expansion",
      assignee: "Lisa Chang",
      priority: "Medium",
      dueDate: "Dec 4, 2024",
      tags: ["Cost", "Estimation"],
    },
  ],
  done: [
    {
      id: 8,
      title: "Site survey completion",
      project: "Riverside Village",
      assignee: "Mark Thompson",
      priority: "Medium",
      dueDate: "Nov 28, 2024",
      tags: ["Survey", "Completed"],
    },
    {
      id: 9,
      title: "Building permit approval",
      project: "Metro Mall",
      assignee: "Sarah Johnson",
      priority: "High",
      dueDate: "Nov 25, 2024",
      tags: ["Permits", "Approved"],
    },
  ],
};

const taskStats = [
  {
    title: "Total Tasks",
    value: 28,
    icon: CheckSquare,
    color: "text-blue-600",
  },
  { title: "Overdue", value: 3, icon: AlertTriangle, color: "text-red-600" },
  { title: "Due Today", value: 5, icon: Clock, color: "text-orange-600" },
  { title: "Completed", value: 12, icon: CheckCircle, color: "text-green-600" },
];

export default function Tasks() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Task Management
            </h1>
            <p className="text-muted-foreground">
              Organize and track tasks across all your projects
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>

        {/* Task Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {taskStats.map((stat) => (
            <Card key={stat.title} className="bg-card border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="kanban" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {taskColumns.map((column) => (
                <Card key={column.id} className="bg-card border shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-foreground">
                        {column.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {column.count}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks[column.id as keyof typeof tasks]?.map((task) => (
                      <Card
                        key={task.id}
                        className="bg-background border shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm font-medium text-foreground line-clamp-2">
                              {task.title}
                            </h4>
                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                          </div>

                          <p className="text-xs text-muted-foreground mb-3">
                            {task.project}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {task.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs px-1 py-0"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span className="text-muted-foreground">
                                {task.assignee.split(" ")[0]}
                              </span>
                            </div>
                            <Badge
                              variant={
                                task.priority === "High"
                                  ? "destructive"
                                  : task.priority === "Medium"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {task.priority}
                            </Badge>
                          </div>

                          <div className="flex items-center text-xs text-muted-foreground mt-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{task.dueDate}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gantt" className="space-y-4">
            <Card className="bg-card border shadow-sm">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Gantt Chart View
                </h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Interactive timeline view with task dependencies, critical
                  path analysis, and resource allocation will be implemented
                  here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
