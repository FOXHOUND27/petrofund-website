import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export interface TrainingProgram {
  id: number;
  title: string;
  description_snippet: string;
  start_date: string; // ISO date string, e.g., "2025-10-30"
  application_deadline: string; // ISO date string
  duration: string;
  location: string;
  image_url: string;
}

interface TrainingCardProps {
  training: TrainingProgram;
}

export function TrainingCard({ training }: TrainingCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isDeadlineSoon = () => {
    const deadline = new Date(training.application_deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil(
      (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilDeadline <= 7 && daysUntilDeadline > 0;
  };

  return (
    <Card className="overflow-hidden bg-[#4F3996] flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden bg-muted">
        <Image
          src={training.image_url || "/placeholder.svg"}
          alt={training.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl text-white font-semibold leading-tight text-balance">
            {training.title}
          </h3>
          {isDeadlineSoon() && (
            <Badge variant="destructive" className="shrink-0 text-xs">
              Closing Soon
            </Badge>
          )}
        </div>
        <p className="text-sm text-white leading-relaxed text-justify">
          {training.description_snippet}
        </p>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pb-4">
        {/* Application Deadline */}
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-white shrink-0" />
          <div>
            <span className="text-white">Apply by: </span>
            <span className="font-medium text-white">
              {formatDate(training.application_deadline)}
            </span>
          </div>
        </div>

        {/* Training Duration */}
        <div className="flex text-white items-center gap-2 text-sm">
          <Calendar className="h-4 w-4  shrink-0" />
          <div>
            <span>Duration: </span>
            <span className="font-medium">{training.duration}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex text-white items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="font-medium">{training.location}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={`/training/${training.id}`}>
          <Button
            className="bg-primary flex gap-x-4 items-center justify-center text-white my-2 px-8 xl:px-10 py-2.5 rounded-md hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
            size="lg"
          >
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
