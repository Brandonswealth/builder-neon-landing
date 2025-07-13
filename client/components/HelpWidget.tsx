import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Bot,
  Video,
  X,
  Star,
  Zap,
  FileText,
  Calculator,
  Crown,
} from "lucide-react";

export function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ai");

  const supportOptions = [
    {
      id: "ai",
      title: "AI Assistant",
      description: "Instant help with construction questions",
      icon: Bot,
      color: "bg-blue-500",
      available: true,
    },
    {
      id: "chat",
      title: "Live Chat",
      description: "Chat with our support experts",
      icon: MessageCircle,
      color: "bg-green-500",
      available: true,
    },
    {
      id: "phone",
      title: "Phone Support",
      description: "Talk to a construction specialist",
      icon: Phone,
      color: "bg-purple-500",
      available: true,
    },
    {
      id: "video",
      title: "Screen Share",
      description: "Virtual support with screen sharing",
      icon: Video,
      color: "bg-orange-500",
      available: true,
    },
  ];

  const quickActions = [
    {
      title: "Submit a Bid",
      description: "Bid on construction projects",
      icon: Calculator,
      action: () => (window.location.href = "/leads"),
    },
    {
      title: "Create Estimate",
      description: "AI-powered cost estimation",
      icon: FileText,
      action: () => (window.location.href = "/estimating"),
    },
    {
      title: "Upgrade to Premium",
      description: "Access AutoCAD & advanced tools",
      icon: Crown,
      premium: true,
    },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg animate-pulse"
          size="sm"
        >
          <HelpCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 bg-white border shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-foreground">
              BlueSQ Support
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Get instant help with your construction management needs
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Support Options */}
          <div className="grid grid-cols-2 gap-2">
            {supportOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeTab === option.id ? "default" : "outline"}
                className="h-auto p-3 flex flex-col items-center space-y-1"
                onClick={() => setActiveTab(option.id)}
              >
                <div
                  className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center`}
                >
                  <option.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-xs font-medium">{option.title}</span>
              </Button>
            ))}
          </div>

          {/* Active Support Content */}
          <div className="min-h-[120px] p-4 bg-muted/30 rounded-lg">
            {activeTab === "ai" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-blue-500" />
                  <span className="font-medium text-foreground">
                    AI Construction Assistant
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ask me anything about project management, estimating, BIM,
                  scheduling, or any construction workflow.
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Try asking:</p>
                  <p className="text-xs text-blue-600">
                    "How do I create a construction estimate?"
                  </p>
                  <p className="text-xs text-blue-600">
                    "Help me with project scheduling"
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Start AI Chat
                </Button>
              </div>
            )}

            {activeTab === "chat" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-foreground">
                      Live Support
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-0">
                    Online
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect with our construction experts for personalized help
                  with your projects.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p>⚡ Average response time: 2 minutes</p>
                  <p>🏗️ Construction specialists available</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Start Live Chat
                </Button>
              </div>
            )}

            {activeTab === "phone" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span className="font-medium text-foreground">
                    Phone Support
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Speak directly with construction management experts.
                </p>
                <div className="text-sm font-medium text-foreground">
                  📞 (888) 555-BLUE
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>🕐 Mon-Fri: 6AM-8PM PST</p>
                  <p>🕐 Sat-Sun: 8AM-5PM PST</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-purple-500 hover:bg-purple-600"
                >
                  Call Now
                </Button>
              </div>
            )}

            {activeTab === "video" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-orange-500" />
                  <span className="font-medium text-foreground">
                    Screen Share Support
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get virtual assistance with screen sharing for complex
                  construction workflows.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p>🖥️ Screen sharing & remote assistance</p>
                  <p>👨‍💻 Expert guidance through your projects</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Start Screen Share
                </Button>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Quick Actions</p>
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-3"
                onClick={action.action}
              >
                <div className="flex items-center space-x-3">
                  <action.icon className="h-4 w-4" />
                  <div className="text-left">
                    <p className="text-sm font-medium">{action.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                  {action.premium && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </Button>
            ))}
          </div>

          {/* Premium Upgrade */}
          <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-foreground">
                Upgrade to Premium
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Access AutoCAD integration, advanced BIM tools, unlimited
              projects, and priority support.
            </p>
            <Button
              size="sm"
              className="w-full bg-yellow-500 hover:bg-yellow-600"
            >
              <Crown className="mr-2 h-3 w-3" />
              Upgrade Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
