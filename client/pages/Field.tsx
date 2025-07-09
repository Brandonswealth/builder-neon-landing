import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Plus, Camera, MapPin, Clock, Users } from "lucide-react";

export default function Field() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Field Productivity
            </h1>
            <p className="text-muted-foreground mb-2">
              Mobile-first tools for field teams and productivity tracking
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Project Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Document Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Scheduling & Monitoring
              </span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Field Productivity
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                AI Assistance
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Integrations
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Field Report
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Smartphone className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Field Productivity
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Mobile-optimized tools for field teams including photo capture,
              GPS tracking, time logging, and real-time reporting.
            </p>
            <div className="flex space-x-2 mt-4">
              <Badge variant="outline">Photo Reports</Badge>
              <Badge variant="outline">GPS Tracking</Badge>
              <Badge variant="outline">Time Logging</Badge>
              <Badge variant="outline">Mobile Forms</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
