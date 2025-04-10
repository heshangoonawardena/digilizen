import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import React from "react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string; // Additional class names for customization
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  return (
    <Card
      className={`hover:bg-primary/10 transition-all hover:shadow-md ${className}`}
    >
      <CardHeader className="flex flex-col items-center space-y-2">
        <div className="bg-primary/10 rounded-full p-3">
          <Icon className="text-primary h-6 w-6" />
        </div>
        <CardTitle className="text-center text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
