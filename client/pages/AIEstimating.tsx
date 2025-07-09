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
    name: "SkyTower Downtown Complex - Tower A",
    status: "Completed",
    accuracy: "96%",
    totalCost: "$4,247,500",
    createdAt: "2024-11-28",
    blueprint: "SkyTower-FloorPlans-L1-L25.pdf",
    sqft: "125,000",
    type: "Commercial High-Rise",
  },
  {
    id: 2,
    name: "Riverside Village - Phase 1 Homes",
    status: "In Progress",
    accuracy: "92%",
    totalCost: "$2,845,200",
    createdAt: "2024-11-25",
    blueprint: "Riverside-SitePlan-Foundation.pdf",
    sqft: "45,000",
    type: "Residential Development",
  },
  {
    id: 3,
    name: "Metro Mall - Food Court Renovation",
    status: "Completed",
    accuracy: "98%",
    totalCost: "$678,900",
    createdAt: "2024-11-22",
    blueprint: "MetroMall-FoodCourt-Renovation.pdf",
    sqft: "15,200",
    type: "Commercial Renovation",
  },
  {
    id: 4,
    name: "Industrial Warehouse - Expansion Wing",
    status: "Review",
    accuracy: "88%",
    totalCost: "$1,234,500",
    createdAt: "2024-11-20",
    blueprint: "Warehouse-ExpansionWing-Structural.pdf",
    sqft: "85,000",
    type: "Industrial Construction",
  },
  {
    id: 5,
    name: "Green Hospital - Emergency Wing",
    status: "In Progress",
    accuracy: "94%",
    totalCost: "$8,950,000",
    createdAt: "2024-11-18",
    blueprint: "Hospital-EmergencyWing-Complete.pdf",
    sqft: "75,000",
    type: "Healthcare Facility",
  },
];

const materialCategories = [
  {
    name: "Concrete & Masonry",
    cost: "$1,320,500",
    percentage: 31,
    details: "Foundation, slabs, walls, finishes",
    quantity: "2,450 cubic yards",
  },
  {
    name: "Steel & Structural",
    cost: "$1,104,300",
    percentage: 26,
    details: "Beams, columns, reinforcement",
    quantity: "485 tons",
  },
  {
    name: "Electrical Systems",
    cost: "$679,600",
    percentage: 16,
    details: "Wiring, panels, fixtures, controls",
    quantity: "25,000 linear feet",
  },
  {
    name: "HVAC Systems",
    cost: "$552,200",
    percentage: 13,
    details: "Units, ductwork, controls",
    quantity: "15 units",
  },
  {
    name: "Plumbing & Fire Safety",
    cost: "$339,800",
    percentage: 8,
    details: "Pipes, fixtures, sprinkler system",
    quantity: "8,500 linear feet",
  },
  {
    name: "Windows & Exterior",
    cost: "$255,100",
    percentage: 6,
    details: "Curtain wall, glazing, roofing",
    quantity: "12,000 sq ft",
  },
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
                  AI + BIM Processing:
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    BIM model extraction
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Autodesk integration
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-orange-500" />
                    Quantity takeoffs
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    Real-time pricing
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <div className="flex items-center text-xs text-accent">
                  <Bot className="mr-2 h-4 w-4" />
                  <span className="font-medium">Enterprise Integration</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Direct BIM model import from Autodesk Construction Cloud,
                  Procore, and Bentley platforms
                </p>
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
                      <p className="text-xs text-muted-foreground">
                        $
                        {(
                          parseFloat(
                            selectedEstimate.totalCost.replace(/[$,]/g, ""),
                          ) /
                          parseFloat(selectedEstimate.sqft.replace(/,/g, ""))
                        ).toFixed(2)}
                        /sq ft
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        AI Accuracy
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        {selectedEstimate.accuracy}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {selectedEstimate.sqft} sq ft
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
                          <p className="text-xs text-muted-foreground mb-1">
                            {category.details}
                          </p>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground">
                              Qty: {category.quantity}
                            </span>
                            <span className="text-xs font-medium text-accent">
                              {category.percentage}%
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
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-2">
                      <span>{estimate.type}</span>
                      <span className="font-medium text-foreground">
                        {estimate.totalCost}
                      </span>
                      <span>{estimate.sqft} sq ft</span>
                      <span>{estimate.accuracy} accuracy</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      📁 {estimate.blueprint}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Created: {estimate.createdAt}
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
