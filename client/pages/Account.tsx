import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Settings, CreditCard, LogOut, Shield } from "lucide-react";

export default function Account() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Account</h1>
            <p className="text-muted-foreground">
              Manage your profile and account settings
            </p>
          </div>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="bg-card border shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground">
                  John Constructor
                </h2>
                <p className="text-muted-foreground">
                  john@bluesqconstruction.com
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge>Project Manager</Badge>
                  <Badge variant="secondary">Premium Plan</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border shadow-sm hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Password, 2FA, and login settings
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Billing</h3>
                  <p className="text-sm text-muted-foreground">
                    Subscription and payment methods
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sign Out */}
        <Card className="bg-card border shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Sign Out</h3>
                <p className="text-sm text-muted-foreground">
                  Sign out of your BlueSQ account
                </p>
              </div>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
