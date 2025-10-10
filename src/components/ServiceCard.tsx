import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, Download, TrendingUp } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  category: string;
  verified: boolean;
  price: "Free" | "Premium";
  downloads: string;
  rating: number;
  language: string;
}

const ServiceCard = ({
  name,
  description,
  category,
  verified,
  price,
  downloads,
  rating,
  language,
}: ServiceCardProps) => {
  return (
    <Card className="card-hover shadow-card cursor-pointer group">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {name}
              </CardTitle>
              {verified && (
                <div className="badge-verified">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              )}
            </div>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </div>
          
          {price === "Premium" ? (
            <div className="badge-premium shrink-0">Premium</div>
          ) : (
            <Badge variant="secondary" className="shrink-0">Free</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-medium">{rating}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>{downloads}</span>
            </div>

            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>{language}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              OpenAPI
            </Badge>
            <Badge variant="outline" className="text-xs">
              Docker
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
