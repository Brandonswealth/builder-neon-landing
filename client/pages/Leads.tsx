import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Plus,
  Search,
  Filter,
  MapPin,
  DollarSign,
  Calendar,
  Building,
  Users,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Clock,
  Eye,
  Heart,
  Share,
} from "lucide-react";

const publicLeads = [
  {
    id: "LEAD-001",
    title: "Commercial Office Complex - Downtown Seattle",
    type: "Commercial",
    location: "Seattle, WA",
    budget: "$2.5M - $3.2M",
    timeline: "6 months",
    description:
      "50,000 sq ft office complex requiring full construction services including foundation, structural, electrical, and HVAC work.",
    client: "Seattle Development Corp",
    contact: "Available to Premium Members",
    posted: "2 hours ago",
    applicants: 12,
    category: "New Construction",
    requirements: [
      "Licensed General Contractor",
      "Commercial Experience",
      "$1M+ Bonding",
    ],
    rating: 4.8,
    verified: true,
    premium: true,
  },
  {
    id: "LEAD-002",
    title: "Residential Renovation - Bellevue Home",
    type: "Residential",
    location: "Bellevue, WA",
    budget: "$150K - $200K",
    timeline: "3 months",
    description:
      "Complete kitchen and bathroom renovation for luxury home. High-end finishes and custom cabinetry required.",
    client: "Private Homeowner",
    contact: "michael.johnson@email.com",
    posted: "5 hours ago",
    applicants: 8,
    category: "Renovation",
    requirements: ["Residential License", "References Required", "Insurance"],
    rating: 4.6,
    verified: true,
    premium: false,
  },
  {
    id: "LEAD-003",
    title: "Industrial Warehouse Expansion",
    type: "Industrial",
    location: "Tacoma, WA",
    budget: "$800K - $1.2M",
    timeline: "4 months",
    description:
      "25,000 sq ft warehouse expansion with loading docks, office space, and specialized electrical requirements.",
    client: "Pacific Logistics Inc",
    contact: "Available to Premium Members",
    posted: "1 day ago",
    applicants: 15,
    category: "Expansion",
    requirements: [
      "Industrial Experience",
      "Heavy Equipment",
      "Safety Certification",
    ],
    rating: 4.9,
    verified: true,
    premium: true,
  },
  {
    id: "LEAD-004",
    title: "Retail Store Buildout - Shopping Center",
    type: "Retail",
    location: "Kirkland, WA",
    budget: "$75K - $120K",
    timeline: "6 weeks",
    description:
      "2,500 sq ft retail space buildout for national chain store. Fast-track schedule with specific brand requirements.",
    client: "National Retail Chain",
    contact: "sarah.williams@retailcorp.com",
    posted: "2 days ago",
    applicants: 6,
    category: "Tenant Improvement",
    requirements: [
      "Retail Experience",
      "Fast-Track Capability",
      "Brand Compliance",
    ],
    rating: 4.5,
    verified: false,
    premium: false,
  },
];

const leadStats = [
  {
    title: "Available Leads",
    value: "247",
    change: "+23 today",
    icon: Target,
    color: "text-blue-600",
  },
  {
    title: "Won This Month",
    value: "18",
    change: "$4.2M total value",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Active Bids",
    value: "32",
    change: "8 pending response",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Success Rate",
    value: "67%",
    change: "+5% this quarter",
    icon: Star,
    color: "text-purple-600",
  },
];

const leadCategories = [
  { name: "Commercial", count: 89, budget: "$45M", color: "bg-blue-500" },
  { name: "Residential", count: 124, budget: "$12M", color: "bg-green-500" },
  { name: "Industrial", count: 34, budget: "$28M", color: "bg-orange-500" },
  { name: "Healthcare", count: 18, budget: "$35M", color: "bg-purple-500" },
  { name: "Educational", count: 12, budget: "$22M", color: "bg-pink-500" },
];

export default function Leads() {
  const [activeTab, setActiveTab] = useState("public");
  const [selectedLead, setSelectedLead] = useState(publicLeads[0]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Leads Marketplace
            </h1>
            <p className="text-muted-foreground mb-2">
              Find new construction opportunities and grow your business
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Leads Marketplace
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Bid Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Financial Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                AI Assistance
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Star className="mr-2 h-4 w-4" />
              Upgrade to Premium
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Submit Lead
            </Button>
          </div>
        </div>

        {/* Lead Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {leadStats.map((stat) => (
            <Card key={stat.title} className="bg-card border shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-accent">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lead Categories */}
        <Card className="bg-card border shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Building className="mr-2 h-5 w-5 text-primary" />
              Lead Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {leadCategories.map((category) => (
                <div
                  key={category.name}
                  className="text-center p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
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
                    {category.count} leads
                  </p>
                  <p className="text-lg font-bold text-accent">
                    {category.budget}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="public">Public Leads</TabsTrigger>
            <TabsTrigger value="private">Private Network</TabsTrigger>
            <TabsTrigger value="my-bids">My Bids</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="public" className="space-y-4">
            {/* Search and Filter */}
            <Card className="bg-card border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Search leads by location, type, or budget..."
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Leads List */}
            <div className="grid gap-4">
              {publicLeads.map((lead) => (
                <Card
                  key={lead.id}
                  className={`bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedLead.id === lead.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedLead(lead)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {lead.title}
                          </h3>
                          {lead.premium && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              Premium
                            </Badge>
                          )}
                          {lead.verified && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              Verified
                            </Badge>
                          )}
                          <Badge variant="outline">{lead.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {lead.description}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {lead.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {lead.budget}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {lead.timeline}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {lead.applicants} applicants
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {lead.posted}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">
                            {lead.rating}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {lead.client}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Submit Bid
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {lead.requirements.map((req, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="private" className="space-y-4">
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border shadow-md">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Private Network Leads
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive leads from your professional network and referral
                  partners
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Join Network
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-bids" className="space-y-4">
            <Card className="bg-card border shadow-md">
              <CardHeader>
                <CardTitle className="text-foreground">
                  My Active Bids
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Downtown Office Complex
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Submitted 3 days ago • $2.8M bid
                      </p>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700">
                      Pending
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Warehouse Expansion
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Submitted 1 week ago • $950K bid
                      </p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">
                      Under Review
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Bid Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Detailed analytics on your bidding success rate and lead
                    conversion
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Market Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Market trends and competitive analysis for your target
                    sectors
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
