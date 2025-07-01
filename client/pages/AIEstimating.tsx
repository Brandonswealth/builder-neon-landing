import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  Eye,
  Download,
  Bot,
  Calculator,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const recentEstimates = [
  {
    id: 1,
    name: "Downtown Office Complex - Phase 1",
    status: "Completed",
    accuracy: "94%",
    totalCost: "$2,847,500",
    createdAt: "2024-11-20",
    blueprint: "Floor Plans - Levels 1-5.pdf",
  },
  {
    id: 2,
    name: "Residential Development - Building A",
    status: "In Progress",
    accuracy: "89%",
    totalCost: "$1,245,200",
    createdAt: "2024-11-18",
    blueprint: "Site Plan & Foundation.pdf",
  },
  {
    id: 3,
    name: "Commercial Renovation - Retail Space",
    status: "Review",
    accuracy: "91%",
    totalCost: "$456,800",
    createdAt: "2024-11-15",
    blueprint: "Renovation Plans - Main Floor.pdf",
  },
];

const materialCategories = [
  { name: "Concrete & Masonry", cost: "$450,200", percentage: 31 },
  { name: "Steel & Structural", cost: "$380,100", percentage: 26 },
  { name: "Electrical Systems", cost: "$225,800", percentage: 16 },
  { name: "HVAC Systems", cost: "$190,400", percentage: 13 },
  { name: "Plumbing", cost: "$120,600", percentage: 8 },
  { name: "Other Materials", cost: "$85,400", percentage: 6 },
];

export default function AIEstimating() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState(recentEstimates[0]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              AI Estimating
            </h1>
            <p className="text-muted-foreground">
              Upload blueprints and get instant AI-powered cost estimates
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Bot className="mr-2 h-4 w-4" />
            New Estimate
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <Card className="lg:col-span-1 bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Upload className="mr-2 h-5 w-5 text-accent" />
                Upload Blueprint
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-accent bg-accent/5"
                    : "border-muted-foreground/25 hover:border-accent/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm font-medium text-foreground mb-2">
                  Drop your blueprint here
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  PDF, DWG, or image files up to 50MB
                </p>
                <Button variant="outline" size="sm">
                  Choose File
                </Button>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-medium text-foreground">
                  Processing Steps:
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Document analysis
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Material identification
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-orange-500" />
                    Cost calculation
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    Report generation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estimate Viewer */}
          <Card className="lg:col-span-2 bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-foreground">
                <div className="flex items-center">
                  <Eye className="mr-2 h-5 w-5 text-accent" />
                  Estimate Viewer
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Calculator className="mr-2 h-4 w-4" />
                    Create Bid
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="labor">Labor</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        Total Cost
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {selectedEstimate.totalCost}
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        AI Accuracy
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        {selectedEstimate.accuracy}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">
                      Cost Breakdown
                    </h4>
                    {materialCategories.map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">
                              {category.name}
                            </span>
                            <span className="text-sm font-medium text-foreground">
                              {category.cost}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-accent rounded-full h-2"
                              style={{ width: `${category.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="materials" className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="mx-auto h-12 w-12 mb-4" />
                    <p>Detailed material takeoffs will appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="labor" className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="mx-auto h-12 w-12 mb-4" />
                    <p>Labor cost breakdown will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Recent Estimates */}
        <Card className="bg-card border shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Estimates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentEstimates.map((estimate) => (
                <div
                  key={estimate.id}
                  className={`flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer ${
                    selectedEstimate.id === estimate.id
                      ? "bg-accent/10 border-accent"
                      : ""
                  }`}
                  onClick={() => setSelectedEstimate(estimate)}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground">
                        {estimate.name}
                      </h3>
                      <Badge
                        variant={
                          estimate.status === "Completed"
                            ? "default"
                            : estimate.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {estimate.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{estimate.blueprint}</span>
                      <span>•</span>
                      <span>{estimate.totalCost}</span>
                      <span>•</span>
                      <span>{estimate.accuracy} accuracy</span>
                      <span>•</span>
                      <span>{estimate.createdAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
