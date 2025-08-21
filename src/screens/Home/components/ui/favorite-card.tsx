import * as React from "react"
import { cn } from "@/lib/utils"
import SkeletonComponent from "@/components/skeleton"
import Widget from "@/domain/models/Widget.model"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
const CLASS_DEFAULT = "h-full w-full rounded-xl flex flex-row items-center p-2 gap-4 shadow-none"
export default function FavoriteCard({ className, data}: Readonly<{
  className?: string;
  data?: Widget | undefined;
}>) {
  if(!data){
      return (
        <Card className={cn(CLASS_DEFAULT, className)}>
          <div className="flex h-12 w-12 rounded-full">
            <Skeleton className="w-full h-full rounded-full" />
          </div>
          <div className="flex h-4 w-25">
            <Skeleton className="w-full h-full" />
          </div>
        </Card>
      )
  }
  return (
    <Card className={cn(CLASS_DEFAULT, className)}>
      <div className="flex h-12 w-12 rounded-full">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
      <div className="flex h-4 w-25">
        <Skeleton className="w-full h-full" />
      </div>
    </Card>
    
  );
}