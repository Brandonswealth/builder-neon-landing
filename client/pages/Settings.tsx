import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Save } from "lucide-react";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and application preferences
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <SettingsIcon className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Settings Panel
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              User preferences, team management, billing, and system
              configurations will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
