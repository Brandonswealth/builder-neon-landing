import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="bg-card border shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 px-8">
            <AlertTriangle className="h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Page Not Found
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/">Return to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
