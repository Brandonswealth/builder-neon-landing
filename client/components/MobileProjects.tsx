import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Plus,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "SkyTower Downtown Complex",
    client: "Metropolitan Development",
    location: "Seattle, WA",
    progress: 72,
    budget: "$4.2M",
    dueDate: "Mar 15, 2025",
    team: 15,
    status: "On Track",
    color: "bg-green-500",
    image: "🏢",
  },
  {
    id: 2,
    name: "Metro Mall Renovation",
    client: "Pacific Retail Partners",
    location: "Tacoma, WA",
    progress: 94,
    budget: "$890K",
    dueDate: "Dec 10, 2024",
    team: 22,
    status: "Final Phase",
    color: "bg-blue-500",
    image: "🏪",
  },
  {
    id: 3,
    name: "Riverside Village",
    client: "Riverside Communities",
    location: "Bellevue, WA",
    progress: 18,
    budget: "$12.8M",
    dueDate: "Aug 30, 2025",
    team: 8,
    status: "Planning",
    color: "bg-orange-500",
    image: "🏘️",
  },
  {
    id: 4,
    name: "Industrial Warehouse",
    client: "Northwest Logistics",
    location: "Kent, WA",
    progress: 45,
    budget: "$2.1M",
    dueDate: "Feb 28, 2025",
    team: 12,
    status: "In Progress",
    color: "bg-purple-500",
    image: "🏭",
  },
];

export function MobileProjects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="space-y-4">
      {/* iOS Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">23 active projects</p>
        </div>
        <Button
          className="h-10 w-10 rounded-full bg-primary shadow-lg active:scale-95 transition-transform"
          size="sm"
        >
          <Plus className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full pl-10 pr-4 py-3 bg-white border-0 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Search projects..."
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-12 w-12 rounded-2xl bg-white shadow-sm active:scale-95 transition-transform"
        >
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {["All", "Active", "Planning", "Completed"].map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "default" : "ghost"}
            size="sm"
            className={`rounded-full px-4 py-2 whitespace-nowrap transition-all ${
              selectedFilter === filter
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-white text-muted-foreground"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="border-0 shadow-sm bg-white rounded-2xl">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600">96%</p>
            <p className="text-xs text-muted-foreground">On Budget</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white rounded-2xl">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">94%</p>
            <p className="text-xs text-muted-foreground">On Schedule</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white rounded-2xl">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-purple-600">$38.4M</p>
            <p className="text-xs text-muted-foreground">Total Value</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-0 shadow-sm bg-white rounded-2xl active:scale-98 transition-transform"
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                {/* Project Image/Icon */}
                <div
                  className={`w-12 h-12 ${project.color} rounded-2xl flex items-center justify-center text-2xl shadow-md`}
                >
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.client}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 rounded-full"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">
                        Progress
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${project.color} h-2 rounded-full transition-all`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="truncate">{project.dueDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{project.team} members</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between mt-3">
                    <Badge
                      className={`text-xs border-0 ${
                        project.status === "On Track"
                          ? "bg-green-100 text-green-700"
                          : project.status === "Final Phase"
                            ? "bg-blue-100 text-blue-700"
                            : project.status === "Planning"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <Button
        variant="ghost"
        className="w-full py-3 rounded-2xl bg-white shadow-sm active:scale-95 transition-transform"
      >
        Load More Projects
      </Button>
    </div>
  );
}
