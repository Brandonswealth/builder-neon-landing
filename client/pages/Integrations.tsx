import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plug, Plus, Zap, Link, Settings, Database } from "lucide-react";

export default function Integrations() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
            <p className="text-muted-foreground mb-2">
              Connect with your existing tools and software ecosystem
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Estimating & Takeoff
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Document Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Project Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                BIM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Financial Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Integrations
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Marketplace
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Plug className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Integrations
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Seamlessly connect with leading construction software, accounting
              systems, BIM platforms, and productivity tools.
            </p>
            <div className="flex space-x-2 mt-4">
              <Badge variant="outline">Autodesk</Badge>
              <Badge variant="outline">QuickBooks</Badge>
              <Badge variant="outline">Procore</Badge>
              <Badge variant="outline">Microsoft</Badge>
              <Badge variant="outline">Sage</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
