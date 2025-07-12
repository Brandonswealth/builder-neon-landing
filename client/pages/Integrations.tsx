import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plug,
  Plus,
  Phone,
  Building,
  DollarSign,
  FileText,
  Users,
  Calendar,
  BarChart3,
  Settings,
  CheckCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const callTrackingData = [
  {
    source: "Google Ads",
    calls: 47,
    conversions: 12,
    revenue: "$285,000",
    trend: "+15%",
  },
  {
    source: "Website",
    calls: 32,
    conversions: 8,
    revenue: "$165,000",
    trend: "+8%",
  },
  {
    source: "Social Media",
    calls: 18,
    conversions: 4,
    revenue: "$98,000",
    trend: "+22%",
  },
];

const integrationCategories = [
  {
    title: "Call Management & Lead Tracking",
    integrations: [
      {
        name: "CallRail",
        description: "Call tracking, recording, and lead attribution",
        status: "Connected",
        features: ["Call tracking", "Lead scoring", "Recording", "Analytics"],
        logo: "📞",
      },
      {
        name: "RingCentral",
        description: "Business phone and communication platform",
        status: "Available",
        features: ["VoIP calls", "Team messaging", "Video meetings"],
        logo: "☎️",
      },
      {
        name: "HubSpot",
        description: "CRM and inbound marketing platform",
        status: "Connected",
        features: ["Lead management", "Email marketing", "Sales pipeline"],
        logo: "🎯",
      },
    ],
  },
  {
    title: "Financial & Accounting",
    integrations: [
      {
        name: "QuickBooks",
        description: "Accounting and financial management",
        status: "Connected",
        features: ["Invoicing", "Expense tracking", "Tax preparation"],
        logo: "💰",
      },
      {
        name: "Sage Construction",
        description: "Construction-specific accounting software",
        status: "Available",
        features: ["Job costing", "Payroll", "Financial reporting"],
        logo: "📊",
      },
      {
        name: "Xero",
        description: "Cloud-based accounting platform",
        status: "Available",
        features: ["Bank reconciliation", "Invoicing", "Reporting"],
        logo: "📈",
      },
    ],
  },
  {
    title: "BIM & Design",
    integrations: [
      {
        name: "Autodesk Construction Cloud",
        description: "BIM collaboration and project management",
        status: "Connected",
        features: [
          "Model coordination",
          "Issue tracking",
          "Document management",
        ],
        logo: "🏗️",
      },
      {
        name: "Procore",
        description: "Construction management platform",
        status: "Available",
        features: [
          "Project management",
          "Quality & safety",
          "Financial management",
        ],
        logo: "🔧",
      },
      {
        name: "Bentley Systems",
        description: "Infrastructure engineering software",
        status: "Available",
        features: ["Design modeling", "Project delivery", "Asset performance"],
        logo: "🏭",
      },
    ],
  },
];

export default function Integrations() {
  const [activeTab, setActiveTab] = useState("call-tracking");

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Business Management Integrations
            </h1>
            <p className="text-muted-foreground mb-2">
              Complete business ecosystem with call tracking, financial
              management, and construction tools
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
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
                AI Assistance
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="call-tracking">Call Tracking</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="construction">Construction</TabsTrigger>
            <TabsTrigger value="all">All Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="call-tracking" className="space-y-6">
            {/* CallRail Integration Showcase */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl">
                      📞
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        CallRail Integration
                      </h2>
                      <p className="text-muted-foreground">
                        Complete call tracking and lead attribution solution
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Connected
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-lg">
                    <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">97</p>
                    <p className="text-sm text-muted-foreground">
                      Total Calls Today
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">24</p>
                    <p className="text-sm text-muted-foreground">
                      Qualified Leads
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg">
                    <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">$548K</p>
                    <p className="text-sm text-muted-foreground">
                      Attributed Revenue
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg">
                    <ArrowUpRight className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">18%</p>
                    <p className="text-sm text-muted-foreground">
                      Conversion Rate
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">
                    Call Source Performance
                  </h3>
                  {callTrackingData.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/60 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {source.source}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {source.calls} calls • {source.conversions}{" "}
                          conversions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          {source.revenue}
                        </p>
                        <p className="text-sm text-green-600">{source.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call Management Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border shadow-md">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Call Recording
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic call recording with transcription and analysis
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Lead Attribution
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track which marketing channels drive the most valuable calls
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Call Routing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Intelligent call routing based on project type and location
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">
              Financial Management Integrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationCategories[1].integrations.map(
                (integration, index) => (
                  <Card
                    key={index}
                    className="bg-card border shadow-md hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{integration.logo}</div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {integration.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            integration.status === "Connected"
                              ? "default"
                              : "outline"
                          }
                        >
                          {integration.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {integration.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full mt-4"
                        variant={
                          integration.status === "Connected"
                            ? "outline"
                            : "default"
                        }
                      >
                        {integration.status === "Connected"
                          ? "Configure"
                          : "Connect"}
                      </Button>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="construction" className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">
              Construction & BIM Integrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationCategories[2].integrations.map(
                (integration, index) => (
                  <Card
                    key={index}
                    className="bg-card border shadow-md hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{integration.logo}</div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {integration.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            integration.status === "Connected"
                              ? "default"
                              : "outline"
                          }
                        >
                          {integration.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {integration.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full mt-4"
                        variant={
                          integration.status === "Connected"
                            ? "outline"
                            : "default"
                        }
                      >
                        {integration.status === "Connected"
                          ? "Configure"
                          : "Connect"}
                      </Button>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.integrations.map((integration, index) => (
                    <Card
                      key={index}
                      className="bg-card border shadow-md hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{integration.logo}</div>
                            <div>
                              <h3 className="font-semibold text-foreground">
                                {integration.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {integration.description}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              integration.status === "Connected"
                                ? "default"
                                : "outline"
                            }
                          >
                            {integration.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          {integration.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button
                          className="w-full mt-4"
                          variant={
                            integration.status === "Connected"
                              ? "outline"
                              : "default"
                          }
                        >
                          {integration.status === "Connected"
                            ? "Configure"
                            : "Connect"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
