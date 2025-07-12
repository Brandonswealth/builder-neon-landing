import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Plus,
  UserPlus,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Award,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Search,
  Filter,
  Settings,
  Download,
} from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Manager",
    department: "Construction",
    status: "Active",
    hireDate: "Jan 15, 2022",
    salary: "$85,000",
    performance: "Excellent",
    email: "sarah.j@bluesq.com",
    phone: "(206) 555-0123",
    address: "Seattle, WA",
  },
  {
    id: 2,
    name: "Mike Chen",
    position: "Site Supervisor",
    department: "Operations",
    status: "Active",
    hireDate: "Mar 22, 2021",
    salary: "$72,000",
    performance: "Good",
    email: "mike.c@bluesq.com",
    phone: "(206) 555-0124",
    address: "Bellevue, WA",
  },
  {
    id: 3,
    name: "Jennifer Liu",
    position: "Estimator",
    department: "Pre-Construction",
    status: "Active",
    hireDate: "Aug 10, 2023",
    salary: "$68,000",
    performance: "Excellent",
    email: "jennifer.l@bluesq.com",
    phone: "(206) 555-0125",
    address: "Kirkland, WA",
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Safety Coordinator",
    department: "Safety",
    status: "On Leave",
    hireDate: "Nov 5, 2020",
    salary: "$75,000",
    performance: "Good",
    email: "david.r@bluesq.com",
    phone: "(206) 555-0126",
    address: "Tacoma, WA",
  },
];

const hrMetrics = [
  {
    title: "Total Employees",
    value: "47",
    change: "+3 this month",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Open Positions",
    value: "5",
    change: "2 urgent",
    icon: UserPlus,
    color: "text-orange-600",
  },
  {
    title: "Avg Salary",
    value: "$74K",
    change: "+5% this year",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Retention Rate",
    value: "92%",
    change: "+3% vs industry",
    icon: TrendingUp,
    color: "text-purple-600",
  },
];

const openPositions = [
  {
    title: "Senior Project Manager",
    department: "Construction",
    type: "Full-time",
    location: "Seattle, WA",
    salaryRange: "$90K - $110K",
    applicants: 12,
    posted: "1 week ago",
    urgent: true,
  },
  {
    title: "Electrical Foreman",
    department: "Operations",
    type: "Full-time",
    location: "Bellevue, WA",
    salaryRange: "$75K - $85K",
    applicants: 8,
    posted: "3 days ago",
    urgent: true,
  },
  {
    title: "Construction Estimator",
    department: "Pre-Construction",
    type: "Full-time",
    location: "Remote/Hybrid",
    salaryRange: "$65K - $80K",
    applicants: 15,
    posted: "2 weeks ago",
    urgent: false,
  },
];

const benefits = [
  {
    name: "Health Insurance",
    coverage: "100% Premium",
    description: "Medical, Dental, Vision",
  },
  {
    name: "Retirement Plan",
    coverage: "6% Match",
    description: "401(k) with company matching",
  },
  {
    name: "Paid Time Off",
    coverage: "25 Days",
    description: "Vacation + sick days",
  },
  {
    name: "Training Budget",
    coverage: "$2,500/year",
    description: "Professional development",
  },
  {
    name: "Equipment Allowance",
    coverage: "$1,200/year",
    description: "Tools and safety gear",
  },
  {
    name: "Flexible Schedule",
    coverage: "Available",
    description: "Work-life balance options",
  },
];

const upcomingEvents = [
  {
    title: "Safety Training Workshop",
    date: "Dec 5, 2024",
    time: "9:00 AM",
    attendees: 25,
    type: "Training",
  },
  {
    title: "Monthly All-Hands Meeting",
    date: "Dec 10, 2024",
    time: "2:00 PM",
    attendees: 47,
    type: "Meeting",
  },
  {
    title: "Holiday Party",
    date: "Dec 20, 2024",
    time: "6:00 PM",
    attendees: 52,
    type: "Social",
  },
];

export default function HR() {
  const [activeTab, setActiveTab] = useState("employees");
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">HR Service</h1>
            <p className="text-muted-foreground mb-2">
              Complete human resources management for construction teams
            </p>
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                HR Service
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Workflow Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Financial Management
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                CRM
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Scheduling & Monitoring
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              HR Reports
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* HR Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {hrMetrics.map((metric) => (
            <Card key={metric.title} className="bg-card border shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {metric.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-xs text-accent">{metric.change}</p>
                  </div>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="payroll">Payroll</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="employees" className="space-y-4">
            {/* Search and Filter */}
            <Card className="bg-card border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Search employees by name, position, or department..."
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Employee List */}
            <div className="grid gap-4">
              {employees.map((employee) => (
                <Card
                  key={employee.id}
                  className={`bg-card border shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedEmployee.id === employee.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-foreground">
                              {employee.name}
                            </h3>
                            <Badge
                              variant={
                                employee.status === "Active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {employee.status}
                            </Badge>
                            <Badge
                              className={
                                employee.performance === "Excellent"
                                  ? "bg-green-100 text-green-700 border-green-200"
                                  : "bg-blue-100 text-blue-700 border-blue-200"
                              }
                            >
                              {employee.performance}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {employee.position} • {employee.department}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {employee.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-3 w-3 mr-1" />
                              {employee.phone}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              Hired: {employee.hireDate}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              {employee.salary}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recruiting" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Open Positions
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Post Job
              </Button>
            </div>

            <div className="grid gap-4">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="bg-card border shadow-md hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {position.title}
                          </h3>
                          {position.urgent && (
                            <Badge className="bg-red-100 text-red-700 border-red-200">
                              Urgent
                            </Badge>
                          )}
                          <Badge variant="outline">{position.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {position.department} • {position.location}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {position.salaryRange}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {position.applicants} applicants
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Posted {position.posted}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {position.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Applicants
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Employee Benefits Package
              </h2>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Manage Benefits
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {benefit.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                      <Badge className="bg-primary/10 text-primary">
                        {benefit.coverage}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-4">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border shadow-md">
              <CardContent className="p-8 text-center">
                <DollarSign className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Payroll Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Automated payroll processing, tax calculations, and direct
                  deposit management
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-foreground">$347K</p>
                    <p className="text-sm text-muted-foreground">
                      Monthly Payroll
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">47</p>
                    <p className="text-sm text-muted-foreground">Employees</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">$74K</p>
                    <p className="text-sm text-muted-foreground">
                      Average Salary
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border shadow-md">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Training & Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professional development programs, safety certifications, and
                  skill assessments
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">
                      Completed Courses
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">23</p>
                    <p className="text-sm text-muted-foreground">
                      Certifications
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">$2.5K</p>
                    <p className="text-sm text-muted-foreground">
                      Training Budget/Employee
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Upcoming Events
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </div>

            <div className="grid gap-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-card border shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {event.date} at {event.time}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.attendees} attendees • {event.type}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
