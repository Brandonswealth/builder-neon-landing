import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Plus, Brain, Zap, Target, TrendingUp } from "lucide-react";

export default function AI() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              AI Assistance
            </h1>
            <p className="text-muted-foreground mb-2">
              Intelligent automation and insights across all construction
              workflows
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
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Scheduling & Monitoring
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Field Productivity
              </span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                AI Assistance
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Marketplace
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New AI Task
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Bot className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              AI Assistance
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Intelligent automation, predictive analytics, and AI-powered
              insights to optimize every aspect of construction management.
            </p>
            <div className="flex space-x-2 mt-4">
              <Badge variant="outline">Predictive Analytics</Badge>
              <Badge variant="outline">Smart Automation</Badge>
              <Badge variant="outline">Risk Assessment</Badge>
              <Badge variant="outline">Cost Optimization</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
