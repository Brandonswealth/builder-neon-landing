import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  FileText,
  Users,
  CheckSquare,
  Upload,
  Calendar,
} from "lucide-react";

const quickActions = [
  {
    title: "New Project",
    description: "Start a new construction project",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Add Team Member",
    description: "Invite someone to your workspace",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Create Task",
    description: "Add a task to a project",
    icon: CheckSquare,
    color: "bg-orange-500",
  },
  {
    title: "Upload Document",
    description: "Add files to document center",
    icon: Upload,
    color: "bg-purple-500",
  },
  {
    title: "Schedule Meeting",
    description: "Set up a project meeting",
    icon: Calendar,
    color: "bg-pink-500",
  },
];

export default function Add() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Quick Actions
            </h1>
            <p className="text-muted-foreground">
              Choose what you'd like to create or add
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <Card
              key={action.title}
              className="bg-card border shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-accent"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${action.color} text-white`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Plus className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Quick Actions Hub
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              This mobile-optimized quick actions interface allows rapid task
              creation and content addition from any device.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
