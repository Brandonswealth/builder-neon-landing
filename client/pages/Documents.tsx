import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Plus } from "lucide-react";

export default function Documents() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Document Center
            </h1>
            <p className="text-muted-foreground">
              File management with access levels and e-signature requests
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <FolderOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Document Center
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              File folders for Plans, Contracts, Permits with access levels and
              e-signature capabilities will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
