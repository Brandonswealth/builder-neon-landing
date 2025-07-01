import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus } from "lucide-react";

export default function CRM() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">CRM Lite</h1>
            <p className="text-muted-foreground">
              Manage contacts, clients, subcontractors, and vendors
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Users className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              CRM Lite
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Contact management with status tracking (Inquiry → Estimate →
              Signed → Active) and follow-up notes will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
