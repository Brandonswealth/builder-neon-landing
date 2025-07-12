import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Plus,
  TrendingUp,
  PieChart,
  BarChart3,
  FileText,
  Receipt,
  CreditCard,
  Camera,
  Users,
  Building,
  Calendar,
  Download,
  Upload,
  Eye,
  Edit,
  Send,
} from "lucide-react";

const invoiceData = [
  {
    id: "INV-2024-001",
    client: "Metropolitan Development",
    project: "SkyTower Downtown",
    amount: "$125,000",
    status: "Paid",
    dueDate: "Dec 1, 2024",
    issueDate: "Nov 1, 2024",
  },
  {
    id: "INV-2024-002",
    client: "Riverside Communities",
    project: "Residential Village Phase 1",
    amount: "$89,500",
    status: "Pending",
    dueDate: "Dec 15, 2024",
    issueDate: "Nov 15, 2024",
  },
];

const expenseData = [
  {
    id: "EXP-001",
    category: "Materials",
    vendor: "ABC Steel Supply",
    amount: "$15,250",
    project: "SkyTower Downtown",
    date: "Nov 28, 2024",
    receipt: true,
  },
  {
    id: "EXP-002",
    category: "Equipment Rental",
    vendor: "Pacific Equipment",
    amount: "$2,400",
    project: "Metro Mall Renovation",
    date: "Nov 27, 2024",
    receipt: true,
  },
];

const transactionData = [
  {
    id: "TXN-001",
    type: "Payment Received",
    amount: "+$125,000",
    description: "Payment from Metropolitan Development",
    date: "Nov 28, 2024",
    category: "Income",
  },
  {
    id: "TXN-002",
    type: "Material Purchase",
    amount: "-$15,250",
    description: "Steel beams from ABC Steel Supply",
    date: "Nov 28, 2024",
    category: "Materials",
  },
];

export default function Financial() {
  const [activeTab, setActiveTab] = useState("invoices");

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Financial Management
            </h1>
            <p className="text-muted-foreground mb-2">
              Complete financial control, accounting, and business management
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Project Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Bid Management
              </span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                Financial Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                AI Assistance
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Integrations
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-3xl font-bold text-green-600">$2.4M</p>
                  <p className="text-xs text-green-600">+15% this month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Outstanding</p>
                  <p className="text-3xl font-bold text-orange-600">$189K</p>
                  <p className="text-xs text-orange-600">12 invoices</p>
                </div>
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Monthly Expenses
                  </p>
                  <p className="text-3xl font-bold text-blue-600">$345K</p>
                  <p className="text-xs text-blue-600">-8% vs last month</p>
                </div>
                <Receipt className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Net Profit</p>
                  <p className="text-3xl font-bold text-primary">$421K</p>
                  <p className="text-xs text-primary">18.2% margin</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="receipts">Receipts</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Invoice Management
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Create Invoice
              </Button>
            </div>

            <div className="grid gap-4">
              {invoiceData.map((invoice) => (
                <Card
                  key={invoice.id}
                  className="bg-card border shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {invoice.id}
                          </h3>
                          <Badge
                            variant={
                              invoice.status === "Paid"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {invoice.client} • {invoice.project}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>Issue: {invoice.issueDate}</span>
                          <span>Due: {invoice.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">
                          {invoice.amount}
                        </p>
                        <div className="flex space-x-2 mt-2">
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Expense Tracking
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Camera className="mr-2 h-4 w-4" />
                  Receipt Snap
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Expense
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {expenseData.map((expense) => (
                <Card
                  key={expense.id}
                  className="bg-card border shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {expense.category}
                          </h3>
                          {expense.receipt && (
                            <Badge
                              variant="outline"
                              className="text-green-600 border-green-600"
                            >
                              Receipt Attached
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {expense.vendor} • {expense.project}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {expense.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">
                          {expense.amount}
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Receipt className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="receipts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Receipt Management
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Camera className="mr-2 h-4 w-4" />
                Snap Receipt
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border shadow-md">
              <CardContent className="p-8 text-center">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Receipt Snap Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  Instantly capture and digitize receipts with AI-powered data
                  extraction
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline">AI OCR</Badge>
                  <Badge variant="outline">Auto-categorization</Badge>
                  <Badge variant="outline">Project Matching</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Transaction History
              </h2>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>

            <div className="grid gap-4">
              {transactionData.map((transaction) => (
                <Card key={transaction.id} className="bg-card border shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">
                          {transaction.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-lg font-bold ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.amount}
                        </p>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Monthly Reports
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    P&L Statement
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monthly profit & loss
                  </p>
                  <Badge className="mt-2">November 2024</Badge>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <PieChart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Cash Flow
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monthly cash flow analysis
                  </p>
                  <Badge className="mt-2">November 2024</Badge>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Project Profitability
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Project-by-project analysis
                  </p>
                  <Badge className="mt-2">November 2024</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Customer & Projects
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Metropolitan Development
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enterprise Client
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Active Projects:
                      </span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Total Value:
                      </span>
                      <span className="font-medium">$8.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Outstanding:
                      </span>
                      <span className="font-medium text-orange-600">$125K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Riverside Communities
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Residential Developer
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Active Projects:
                      </span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Total Value:
                      </span>
                      <span className="font-medium">$15.6M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Outstanding:
                      </span>
                      <span className="font-medium text-green-600">$0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
