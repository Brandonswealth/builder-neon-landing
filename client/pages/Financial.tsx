import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Plus,
  TrendingUp,
  PieChart,
  BarChart3,
} from "lucide-react";

export default function Financial() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Financial Management
            </h1>
            <p className="text-muted-foreground mb-2">
              Complete financial control and cost management
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Design Coordinator
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Estimating & Takeoff
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Project Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Bid Management
              </span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Financial Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Scheduling & Monitoring
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                AI Assistance
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <DollarSign className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Financial Management
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Comprehensive financial tracking, cost control, budgeting, and
              profitability analysis for construction projects.
            </p>
            <div className="flex space-x-2 mt-4">
              <Badge variant="outline">Cost Control</Badge>
              <Badge variant="outline">Budget Tracking</Badge>
              <Badge variant="outline">Profit Analysis</Badge>
              <Badge variant="outline">Cash Flow</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
