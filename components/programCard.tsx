import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    description_snippet: string;
    image_url: string;
    deadline: string;
  };
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="flex bg-[#4F3996] flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={program.image_url || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <h2 className="text-lg font-semibold text-white">{program.title}</h2>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-white leading-relaxed text-sm text-justify">
          {program.description_snippet}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm text-white">
          <Calendar className="h-4 w-4" />
          <span>
            Deadline: {new Date(program.deadline).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/scholarships/${program.id}`}>
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
