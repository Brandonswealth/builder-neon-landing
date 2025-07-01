import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Plus } from "lucide-react";

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
              Kanban + Gantt hybrid task management with drag-and-drop
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <CheckSquare className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Task Management
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Drag-and-drop tasks, user assignments, progress tracking, and
              mobile touch gestures will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
