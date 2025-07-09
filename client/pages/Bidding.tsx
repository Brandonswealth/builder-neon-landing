import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Plus,
  Search,
  Filter,
  Download,
  Send,
  Eye,
  Edit,
  Calendar,
  DollarSign,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Building,
  Users,
  FileText,
  Target,
  BarChart3,
  PieChart,
} from "lucide-react";

const bidStats = [
  {
    title: "Active Bids",
    value: "18",
    change: "+5 this week",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Win Rate",
    value: "67%",
    change: "+12% this quarter",
    icon: Target,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Bid Value",
    value: "$24.7M",
    change: "+$8.2M this month",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    title: "Pipeline",
    value: "42",
    change: "15 closing this week",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const activeBids = [
  {
    id: 1,
    project: "Seattle Metropolitan Hospital - Emergency Wing",
    client: "Seattle Medical Center",
    bidAmount: "$18,500,000",
    profit: "$2,775,000",
    margin: "15%",
    dueDate: "Dec 15, 2024",
    daysLeft: 8,
    status: "In Progress",
    priority: "High",
    type: "Healthcare",
    sqft: "75,000",
    estimator: "Sarah Johnson",
    lastActivity: "Cost analysis updated",
    documents: 24,
    subcontractors: 12,
    rfi: 3,
  },
  {
    id: 2,
    project: "Bellevue Corporate Tower - Phase 2",
    client: "Metropolitan Development",
    bidAmount: "$12,300,000",
    profit: "$1,845,000",
    margin: "15%",
    dueDate: "Dec 22, 2024",
    daysLeft: 15,
    status: "Review",
    priority: "High",
    type: "Commercial",
    sqft: "150,000",
    estimator: "Mike Chen",
    lastActivity: "Submitted for review",
    documents: 18,
    subcontractors: 8,
    rfi: 1,
  },
  {
    id: 3,
    project: "Tacoma Warehouse Complex - Building C",
    client: "Northwest Logistics",
    bidAmount: "$4,200,000",
    profit: "$546,000",
    margin: "13%",
    dueDate: "Jan 10, 2025",
    daysLeft: 32,
    status: "Draft",
    priority: "Medium",
    type: "Industrial",
    sqft: "85,000",
    estimator: "Jennifer Liu",
    lastActivity: "Material takeoffs in progress",
    documents: 12,
    subcontractors: 6,
    rfi: 0,
  },
  {
    id: 4,
    project: "Kent Residential Village - Phase 1",
    client: "Riverside Communities",
    bidAmount: "$8,750,000",
    profit: "$1,225,000",
    margin: "14%",
    dueDate: "Dec 28, 2024",
    daysLeft: 21,
    status: "Pending Approval",
    priority: "Medium",
    type: "Residential",
    sqft: "45,000",
    estimator: "David Rodriguez",
    lastActivity: "Waiting client approval",
    documents: 15,
    subcontractors: 10,
    rfi: 2,
  },
];

const recentWins = [
  {
    project: "SkyTower Downtown Complex",
    client: "Metropolitan Development",
    bidAmount: "$42,000,000",
    margin: "16%",
    wonDate: "Nov 25, 2024",
    type: "Commercial High-Rise",
  },
  {
    project: "Green Valley School District",
    client: "Evergreen School Board",
    bidAmount: "$15,200,000",
    margin: "14%",
    wonDate: "Nov 18, 2024",
    type: "Educational",
  },
  {
    project: "Redmond Tech Campus",
    client: "Infinity Tech Solutions",
    bidAmount: "$28,500,000",
    margin: "18%",
    wonDate: "Nov 10, 2024",
    type: "Commercial Office",
  },
];

const bidCategories = [
  { name: "Commercial", count: 8, value: "$45.2M", color: "bg-blue-500" },
  { name: "Healthcare", count: 3, value: "$32.1M", color: "bg-green-500" },
  { name: "Industrial", count: 4, value: "$18.7M", color: "bg-orange-500" },
  { name: "Residential", count: 6, value: "$24.8M", color: "bg-purple-500" },
  { name: "Educational", count: 2, value: "$12.4M", color: "bg-pink-500" },
];

export default function Bidding() {
  const [selectedBid, setSelectedBid] = useState(activeBids[0]);
  const [activeTab, setActiveTab] = useState("active");

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Bid Management
            </h1>
            <p className="text-lg text-muted-foreground">
              Win more work with intelligent bidding and proposal management
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg">
              <Plus className="mr-2 h-4 w-4" />
              Create Bid
            </Button>
          </div>
        </div>

        {/* Bid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bidStats.map((stat) => (
            <Card
              key={stat.title}
              className="bg-card border shadow-md hover:shadow-lg transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bid Categories Overview */}
        <Card className="bg-card border shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <PieChart className="mr-2 h-5 w-5 text-primary" />
              Bid Portfolio Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {bidCategories.map((category) => (
                <div
                  key={category.name}
                  className="text-center p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors"
                >
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                  >
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} bids
                  </p>
                  <p className="text-lg font-bold text-accent">
                    {category.value}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Bids</TabsTrigger>
            <TabsTrigger value="wins">Recent Wins</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {/* Search and Filter Bar */}
            <Card className="bg-card border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Search bids by project name, client, or bid amount..."
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Active Bids List */}
            <div className="grid gap-4">
              {activeBids.map((bid) => (
                <Card
                  key={bid.id}
                  className={`bg-card border shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                    selectedBid.id === bid.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedBid(bid)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {bid.project}
                          </h3>
                          <Badge
                            variant={
                              bid.status === "In Progress"
                                ? "default"
                                : bid.status === "Review"
                                  ? "secondary"
                                  : bid.status === "Draft"
                                    ? "outline"
                                    : "secondary"
                            }
                          >
                            {bid.status}
                          </Badge>
                          <Badge
                            variant={
                              bid.priority === "High"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {bid.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {bid.client} • {bid.type} • {bid.sqft} sq ft
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last activity: {bid.lastActivity}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          Bid Amount
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {bid.bidAmount}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">Profit</p>
                        <p className="text-lg font-bold text-green-600">
                          {bid.profit}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">Margin</p>
                        <p className="text-lg font-bold text-accent">
                          {bid.margin}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          Due Date
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {bid.dueDate}
                        </p>
                        <p className="text-xs text-orange-600">
                          {bid.daysLeft} days left
                        </p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          Documents
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {bid.documents}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">Subs</p>
                        <p className="text-lg font-bold text-foreground">
                          {bid.subcontractors}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          {bid.estimator}
                        </span>
                        {bid.rfi > 0 && (
                          <span className="flex items-center text-orange-600">
                            <AlertTriangle className="mr-1 h-4 w-4" />
                            {bid.rfi} RFI
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Updated 2 hours ago
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wins" className="space-y-4">
            <Card className="bg-card border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Recent Wins - Q4 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWins.map((win, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {win.project}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {win.client} • {win.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Won on {win.wonDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {win.bidAmount}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {win.margin} margin
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                    Win Rate Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <TrendingUp className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Comprehensive bid performance analytics and forecasting
                    coming soon.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <PieChart className="mr-2 h-5 w-5 text-accent" />
                    Profit Margins by Type
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <DollarSign className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Margin Analysis
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Detailed profit margin analysis by project type and market
                    segment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
